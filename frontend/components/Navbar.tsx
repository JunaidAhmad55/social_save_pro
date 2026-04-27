"use client";

import Link from "next/link";
import { Video, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg insta-gradient shadow-lg group-hover:scale-110 transition-transform">
            <Video size={24} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Social<span className="insta-text-gradient">Save</span> Pro
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/" className="hover:text-pink-500 transition-colors">Home</Link>
          <Link href="/blog" className="hover:text-pink-500 transition-colors">Blog</Link>
          <Link href="/about" className="hover:text-pink-500 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-pink-500 transition-colors">Contact</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-4">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
