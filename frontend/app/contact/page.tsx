import { Mail, MessageCircle, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tight">Contact <span className="insta-text-gradient">Us</span></h1>
        <p className="text-xl text-gray-400">Have questions or feedback? We'd love to hear from you.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass p-8 rounded-2xl border border-white/10 text-center space-y-4">
          <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto text-pink-500">
            <Mail size={24} />
          </div>
          <h3 className="font-bold">Email</h3>
          <p className="text-sm text-gray-400">support@instasave.pro</p>
        </div>

        <div className="glass p-8 rounded-2xl border border-white/10 text-center space-y-4">
          <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto text-purple-500">
            <MessageCircle size={24} />
          </div>
          <h3 className="font-bold">Support</h3>
          <p className="text-sm text-gray-400">Available 24/7 for technical queries.</p>
        </div>

        <div className="glass p-8 rounded-2xl border border-white/10 text-center space-y-4">
          <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto text-blue-500">
            <MapPin size={24} />
          </div>
          <h3 className="font-bold">Office</h3>
          <p className="text-sm text-gray-400">Digital Nomads, Worldwide</p>
        </div>
      </div>

      <div className="glass p-8 rounded-2xl border border-white/10">
        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-pink-500" />
            <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-pink-500" />
          </div>
          <textarea placeholder="Your Message" rows={6} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-pink-500"></textarea>
          <button type="submit" className="w-full insta-gradient text-white font-bold py-4 rounded-xl hover:scale-[1.02] transition-transform">Send Message</button>
        </form>
      </div>
    </main>
  );
}
