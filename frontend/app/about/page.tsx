export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tight pt-10">About <span className="insta-text-gradient">SocialSave Pro</span></h1>
        <p className="text-xl text-gray-400">Empowering creators with secure content analysis and backup tools for Instagram and Facebook.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            At SocialSave Pro, we believe creators should have full control over their digital footprint. Our mission is to provide a fast, secure, and intuitive utility that allows users to analyze social media trends and maintain offline backups of their own creative work across multiple platforms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Why SocialSave Pro?</h2>
          <p className="text-gray-300 leading-relaxed">
            Unlike other tools, we prioritize your security and privacy. We use advanced proxy streaming technology to ensure that no data is stored on our servers. Our tool is optimized for high-speed downloads directly to your device from major platforms like Instagram and Facebook.
          </p>
        </section>
      </div>

      <div className="glass p-8 rounded-2xl border border-white/10 space-y-6">
        <h2 className="text-2xl font-bold text-center">Our Commitment to Quality</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center space-y-2">
            <h3 className="text-pink-500 font-bold text-xl">100%</h3>
            <p className="text-sm text-gray-400">High Quality Downloads</p>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-pink-500 font-bold text-xl">Multi</h3>
            <p className="text-sm text-gray-400">Instagram & Facebook</p>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-pink-500 font-bold text-xl">Private</h3>
            <p className="text-sm text-gray-400">No Account Required</p>
          </div>
        </div>
      </div>
    </main>
  );
}
