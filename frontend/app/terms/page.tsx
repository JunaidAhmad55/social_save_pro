export default function TermsOfService() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 space-y-8">
      <h1 className="text-4xl font-bold">Terms of Service</h1>
      <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
        <p>By accessing and using SocialSave Pro, you agree to be bound by these Terms of Service. If you do not agree, please do not use the service.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Use of Service</h2>
        <p>SocialSave Pro is a tool provided for personal, non-commercial use only. You may use this tool to back up your own content or content for which you have explicit permission from the original owner.</p>
        <div className="bg-red-500/10 border border-red-500/50 p-4 rounded-lg">
          <p className="font-bold text-red-200">Strict Prohibition:</p>
          <p className="text-red-200/80">You are strictly prohibited from using SocialSave Pro to download copyrighted material without the owner's permission. We do not encourage or condone the unauthorized distribution of Intellectual Property.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. Disclaimer</h2>
        <p>SocialSave Pro is provided "as is" without any warranties. We are not responsible for how users utilize the tool or any potential copyright infringements caused by user actions. We are NOT associated with Instagram, Facebook, Meta Platforms, Inc., or any other social media platform.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. Limitations of Liability</h2>
        <p>SocialSave Pro shall not be liable for any damages resulting from the use or inability to use our services, including but not limited to the loss of data or content.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. Modifications</h2>
        <p>We reserve the right to modify these terms at any time. It is your responsibility to review these terms periodically for changes.</p>
      </section>
    </main>
  );
}
