"use client";

import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import { blogPosts } from "../../lib/blogData";

export default function BlogIndex() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20 space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tight pt-10">InstaSave <span className="insta-text-gradient">Blog</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Latest insights into social media growth, algorithm updates, and content strategy.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {blogPosts.map((post) => (
          <article key={post.slug} className="glass rounded-3xl overflow-hidden group hover:border-pink-500/50 transition-all flex flex-col h-full">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </Link>
            
            <div className="p-8 space-y-4 flex flex-col flex-grow">
              <div className="flex items-center gap-4 text-xs text-gray-500 font-bold uppercase tracking-widest border-b border-white/5 pb-4">
                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
              </div>
              
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="text-2xl font-bold leading-tight group-hover:text-pink-500 transition-colors line-clamp-2">
                  {post.title}
                </h2>
              </Link>
              
              <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed flex-grow">
                {post.excerpt}
              </p>
              
              <Link 
                href={`/blog/${post.slug}`} 
                className="flex items-center gap-2 text-pink-500 font-bold uppercase tracking-widest text-xs pt-4 group-hover:translate-x-2 transition-transform"
              >
                Read Full Article <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
