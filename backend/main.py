import os
import requests
import subprocess
import sys
import threading
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
import yt_dlp
from typing import Optional

app = FastAPI(title="SocialSave Pro API")

# A robust User-Agent
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"

# Enable CORS
# Set ALLOWED_ORIGINS env var on Render to your Vercel URL, e.g.:
# https://your-app.vercel.app,http://localhost:3000
_raw_origins = os.environ.get("ALLOWED_ORIGINS", "*")
ALLOWED_ORIGINS = [o.strip() for o in _raw_origins.split(",")] if _raw_origins != "*" else ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ExtractRequest(BaseModel):
    url: str

@app.post("/api/extract")
async def extract_media(request: ExtractRequest):
    ydl_opts = {
        'quiet': True,
        'no_warnings': True,
        'format': 'best[height<=720][ext=mp4]/best[height<=720]/best',
        'user_agent': USER_AGENT,
        'referer': 'https://www.youtube.com/' if 'youtube' in request.url.lower() else None,
    }
    
    cookie_path = os.path.join(os.path.dirname(__file__), "..", "cookies.txt")
    if os.path.exists(cookie_path):
        ydl_opts['cookiefile'] = cookie_path
    elif os.path.exists("cookies.txt"):
        ydl_opts['cookiefile'] = "cookies.txt"

    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(request.url, download=False)
            headers = info.get('http_headers', {})
            
            return {
                "title": info.get("title", "Social Media Media"),
                "thumbnail": info.get("thumbnail"),
                "url": info.get("url"),
                "ext": info.get("ext"),
                "id": info.get("id"),
                "duration": info.get("duration"),
                "headers": {
                    "ua": headers.get("User-Agent", USER_AGENT),
                    "ref": headers.get("Referer", "https://www.youtube.com/") if "youtube" in request.url.lower() else headers.get("Referer")
                }
            }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

def log_stderr(pipe):
    """Helper to log stderr to the main console for debugging"""
    for line in iter(pipe.readline, b''):
        print(f"DEBUG: yt-dlp Error: {line.decode().strip()}")
    pipe.close()

@app.get("/api/proxy")
async def proxy_download(
    url: str = Query(...), 
    filename: str = Query("download"),
    ua: Optional[str] = Query(None),
    ref: Optional[str] = Query(None),
    original_url: Optional[str] = Query(None)
):
    is_youtube = original_url and ("youtube.com" in original_url.lower() or "youtu.be" in original_url.lower())
    
    if is_youtube:
        try:
            python_exe = sys.executable
            # Using more robust arguments to bypass 403 errors
            cmd = [
                python_exe, "-m", "yt_dlp",
                "-o", "-",
                "-f", "best[height<=720][ext=mp4]/best[height<=720]/best", 
                "--quiet",
                "--no-warnings",
                "--no-check-certificate",
                "--no-mtime",
                "--user-agent", ua if ua else USER_AGENT,
                "--referer", "https://www.youtube.com/",
                # Use alternative clients that are often less restricted
                "--extractor-args", "youtube:player_client=android,web",
                original_url
            ]
            
            cookie_path = os.path.join(os.path.dirname(__file__), "..", "cookies.txt")
            if os.path.exists(cookie_path):
                cmd.extend(["--cookiefile", cookie_path])
            elif os.path.exists("cookies.txt"):
                cmd.extend(["--cookiefile", "cookies.txt"])
            
            process = subprocess.Popen(
                cmd, 
                stdout=subprocess.PIPE, 
                stderr=subprocess.PIPE,
                bufsize=10**6 
            )
            
            threading.Thread(target=log_stderr, args=(process.stderr,), daemon=True).start()
            
            headers = {
                "Content-Disposition": f"attachment; filename={filename}.mp4",
                "Access-Control-Expose-Headers": "Content-Disposition"
            }
            
            return StreamingResponse(
                process.stdout,
                media_type="video/mp4",
                headers=headers
            )
        except Exception as e:
            print(f"DEBUG: Proxy Execution Error: {str(e)}")
            raise HTTPException(status_code=500, detail=f"Proxy Execution Error: {str(e)}")

    # Fallback
    try:
        req_headers = {
            "User-Agent": ua if ua else USER_AGENT,
            "Accept": "*/*",
            "Connection": "keep-alive",
        }
        if ref:
            req_headers["Referer"] = ref
        elif "googlevideo.com" in url:
            req_headers["Referer"] = "https://www.youtube.com/"
        
        response = requests.get(url, stream=True, headers=req_headers)
        response.raise_for_status()
        
        content_type = response.headers.get("content-type", "application/octet-stream")
        
        if "." not in filename:
            if "video/mp4" in content_type:
                filename += ".mp4"
            elif "image/jpeg" in content_type:
                filename += ".jpg"
            elif "image/png" in content_type:
                filename += ".png"

        resp_headers = {
            "Content-Disposition": f"attachment; filename={filename}",
            "Access-Control-Expose-Headers": "Content-Disposition"
        }

        return StreamingResponse(
            response.iter_content(chunk_size=8192),
            media_type=content_type,
            headers=resp_headers
        )
    except Exception as e:
        detail = str(e)
        if hasattr(e, 'response') and e.response is not None:
            detail = f"{e.response.status_code} Error: {e}"
        raise HTTPException(status_code=500, detail=detail)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)


# ./env/bin/python3 backend/main.py
