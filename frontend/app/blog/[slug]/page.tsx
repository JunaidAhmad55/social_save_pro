"use client";

import { useParams, useRouter } from "next/navigation";
import { blogPosts } from "../../../lib/blogData";
import { Calendar, User, ChevronLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BlogPost() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold">Post Not Found</h1>
        <Link href="/blog" className="text-pink-500 flex items-center gap-2">
          <ChevronLeft /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-20 pb-40">
      <Link 
        href="/blog" 
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 font-bold uppercase tracking-widest text-xs"
      >
        <ChevronLeft size={16} /> Back to Blog
      </Link>

      <article className="space-y-12">
        <header className="space-y-6">
          <div className="flex items-center gap-4 text-xs text-gray-500 font-bold uppercase tracking-widest">
            <span className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full"><Calendar size={14} /> {post.date}</span>
            <span className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full"><User size={14} /> {post.author}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
            {post.title}
          </h1>
        </header>

        <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover" 
          />
        </div>

        <div 
          className="prose prose-invert prose-pink max-w-none 
          prose-headings:font-black prose-headings:tracking-tight 
          prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-lg
          prose-li:text-gray-300 prose-strong:text-white
          space-y-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <hr className="border-white/10 my-20" />

        <div className="glass p-12 rounded-[2.5rem] text-center space-y-6 border-white/10">
          <h2 className="text-3xl font-black">Want to backup your own content?</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Use InstaSave Pro to securely download and analyze your Reels and Photos today.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-3 insta-gradient text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-transform"
          >
            Go to Downloader <ArrowRight size={20} />
          </Link>
        </div>
      </article>
    </main>
  );
}
