import Link from "next/link";
import {Video, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="glass border-t border-white/10 pt-16 pb-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Video size={20} className="text-pink-500" />
            <span className="text-lg font-bold">SocialSave Pro</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            The professional choice for analyzing and backing up your social media content from Instagram and Facebook. Secure, fast, and high-quality.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-white transition-colors">Downloader</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="/dmca" className="hover:text-white transition-colors">DMCA Notice</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="p-2 glass rounded-lg hover:bg-white/10 transition-colors" title="Facebook"><Share2 size={18} /></a>
            <a href="#" className="p-2 glass rounded-lg hover:bg-white/10 transition-colors" title="Instagram">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{opacity:1}}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"/></svg>
            
            {/* <Instagram size={18} /> */}
            </a>
            <a href="#" className="p-2 glass rounded-lg hover:bg-white/10 transition-colors" title="GitHub"><Share2 size={18} /></a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 text-center text-gray-500 text-xs">
        <p>© {new Date().getFullYear()} SocialSave Pro. All rights reserved. Not affiliated with Instagram, Facebook, or Meta Platforms, Inc.</p>
      </div>
    </footer>
  );
}
