"use client";

import { useState } from "react";
import axios from "axios";
import { 
  Download, 
  Loader2, 
  Link as LinkIcon, 
  AlertCircle, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Globe,
  Plus,
  Minus,
  Video,
  Share2
} from "lucide-react";

interface MediaHeaders {
  ua?: string;
  ref?: string;
}

interface MediaInfo {
  title: string;
  thumbnail: string;
  url: string;
  id: string;
  ext: string;
  headers?: MediaHeaders;
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="glass border border-white/10 rounded-2xl overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center bg-white/5 hover:bg-white/10 transition-colors"
      >
        <span className="font-bold text-lg">{question}</span>
        {isOpen ? <Minus size={20} className="text-pink-500" /> : <Plus size={20} className="text-pink-500" />}
      </button>
      {isOpen && (
        <div className="p-6 text-gray-400 leading-relaxed border-t border-white/10 animate-in fade-in slide-in-from-top-4">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [media, setMedia] = useState<MediaInfo | null>(null);
  const [lastUrl, setLastUrl] = useState(""); // Track the original URL for proxying

  const handleExtract = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);
    setError("");
    setMedia(null);
    setLastUrl(url); // Save the original URL

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await axios.post(`${API_URL}/api/extract`, { url });
      setMedia(response.data);
    } catch (err: any) {
      setError(err.response?.data?.detail || "Failed to extract media. Please check the URL.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!media) return;
    
    // Build the proxy URL with the original URL included for robust YouTube streaming
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
    let proxyUrl = `${API_URL}/api/proxy?url=${encodeURIComponent(media.url)}&filename=${encodeURIComponent(media.id)}&original_url=${encodeURIComponent(lastUrl)}`;
    
    // Add headers if available to prevent 403 errors (used for fallback extraction)
    if (media.headers) {
      if (media.headers.ua) proxyUrl += `&ua=${encodeURIComponent(media.headers.ua)}`;
      if (media.headers.ref) proxyUrl += `&ref=${encodeURIComponent(media.headers.ref)}`;
    }
    
    window.location.href = proxyUrl;
  };

  return (
    <main className="min-h-screen p-4 md:p-12 relative overflow-hidden">
      {/* Search Section */}
      <section className="max-w-4xl mx-auto pt-20 pb-20 space-y-12 text-center">
        <header className="space-y-6">
          <div className="flex justify-center">
            <div className="p-5 rounded-2xl insta-gradient shadow-2xl animate-pulse">
              <Download size={56} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter pt-10">
            Social<span className="insta-text-gradient">Save</span> Pro
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            The ultimate utility to download <span className="text-white font-bold">Instagram, Facebook, & YouTube</span> content in high quality.
          </p>
        </header>

        <form onSubmit={handleExtract} className="relative group max-w-3xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-30 group-focus-within:opacity-80 transition duration-1000"></div>
          <div className="relative glass p-2 flex items-center gap-2 rounded-2xl">
            <div className="pl-6 text-gray-500">
              <LinkIcon size={24} />
            </div>
            <input
              type="text"
              placeholder="Paste Instagram, Facebook, or YouTube link here..."
              className="w-full bg-transparent p-5 text-white text-lg placeholder-gray-500 focus:outline-none"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              disabled={loading}
              type="submit"
              className="insta-gradient text-white px-10 py-5 rounded-xl font-black text-lg shadow-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest"
            >
              {loading ? <Loader2 className="animate-spin" /> : "Extract"}
            </button>
          </div>
        </form>

        {error && (
          <div className="glass bg-red-900/10 border-red-500/50 p-5 rounded-2xl flex items-center gap-4 text-red-200 animate-in fade-in slide-in-from-top-4 max-w-xl mx-auto">
            <AlertCircle className="text-red-500 shrink-0" />
            <p className="text-left font-medium">{error}</p>
          </div>
        )}

        {media && (
          <div className="glass p-8 rounded-3xl space-y-8 animate-in zoom-in-95 duration-500 max-w-xl mx-auto shadow-2xl border-white/20">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner">
              <img
                src={media.thumbnail}
                alt={media.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="bg-pink-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider mb-2 inline-block">Ready to Download</span>
                <h3 className="font-bold text-xl line-clamp-1">{media.title}</h3>
              </div>
            </div>

            <button
              onClick={handleDownload}
              className="w-full bg-white text-black hover:bg-gray-200 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all shadow-xl hover:shadow-white/10 uppercase tracking-widest"
            >
              <Download size={24} />
              Download Now
            </button>
          </div>
        )}
      </section>

      {/* Supported Platforms */}
      <section className="max-w-4xl mx-auto pb-32">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/5 rounded-xl"><Video size={32} /></div>
            <span className="font-bold text-xl">Instagram</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/5 rounded-xl"><Video size={32} /></div>
            <span className="font-bold text-xl">Facebook</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/5 rounded-xl"><Video size={32} /></div>
            <span className="font-bold text-xl">YouTube</span>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="max-w-7xl mx-auto py-32 space-y-20">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">How to <span className="insta-text-gradient">Use</span></h2>
          <p className="text-gray-400">Download from all major social platforms in three simple steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { step: "01", title: "Copy URL", desc: "Open IG, FB, or YouTube and copy the link of the video or post you want to save." },
            { step: "02", title: "Paste Link", desc: "Paste the link into the search bar at the top of SocialSave Pro." },
            { step: "03", title: "Download", desc: "Click Extract and then Download to save the file directly to your device." },
          ].map((item, idx) => (
            <div key={idx} className="glass p-10 rounded-2xl relative group hover:border-pink-500/50 transition-colors">
              <span className="text-6xl font-black text-white/5 absolute top-4 right-8 group-hover:text-pink-500/10 transition-colors">{item.step}</span>
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-xl insta-gradient flex items-center justify-center shadow-lg">
                  {idx === 0 && <LinkIcon size={24} />}
                  {idx === 1 && <Plus size={24} />}
                  {idx === 2 && <Download size={24} />}
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto py-32 bg-white/[0.02] rounded-[4rem] px-12 space-y-20">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Why Choose <span className="insta-text-gradient">Pro</span></h2>
          <p className="text-gray-400">The most multi-platform social media utility on the web.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Zap className="text-yellow-400" />, title: "Ultra Fast", desc: "Proprietary proxy streaming for instant downloads without the wait." },
            { icon: <ShieldCheck className="text-green-400" />, title: "Secure", desc: "We never store your data or media files. 100% private browsing." },
            { icon: <Globe className="text-blue-400" />, title: "Any Device", desc: "Fully responsive. Works perfectly on iOS, Android, PC, and Mac." },
            { icon: <CheckCircle2 className="text-purple-400" />, title: "Multi Platform", desc: "One tool for Instagram, Facebook, YouTube, and more." },
          ].map((feature, idx) => (
            <div key={idx} className="space-y-4 p-4 text-center items-center flex flex-col">
              <div className="p-4 bg-white/5 rounded-2xl">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto py-32 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-black uppercase tracking-tighter">Common <span className="insta-text-gradient">Questions</span></h2>
          <p className="text-gray-400">Everything you need to know about SocialSave Pro.</p>
        </div>

        <div className="space-y-4">
          <FAQItem 
            question="Is SocialSave Pro free to use?"
            answer="Yes! SocialSave Pro is a completely free utility tool. We generate revenue through advertisements to keep our technology updated."
          />
          <FAQItem 
            question="Does it support YouTube video downloads?"
            answer="Yes, we support YouTube video extraction for backup and educational purposes. We currently limit downloads to 720p HD for optimal performance."
          />
          <FAQItem 
            question="Do I need to log in with my social accounts?"
            answer="No. You never have to provide your credentials. We respect your security and privacy."
          />
          <FAQItem 
            question="Is it legal to download social media videos?"
            answer="SocialSave Pro is intended for personal use and backing up your own content. Please ensure you have the rights or permission before downloading content."
          />
        </div>
      </section>
    </main>
  );
}
