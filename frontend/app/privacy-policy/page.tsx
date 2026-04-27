export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 space-y-8">
      <h1 className="text-4xl font-bold">Privacy Policy</h1>
      <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Introduction</h2>
        <p>Welcome to SocialSave Pro. We respect your privacy and are committed to protecting any information that may be collected through your use of our website. This policy explains what happens to any data we receive.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Information We Do NOT Collect</h2>
        <p>SocialSave Pro is a utility tool designed to help you analyze and backup your social media content. We do NOT store, save, or keep any of the media you process through our service. All media is proxied in real-time to your browser and is not retained on our servers once the download is complete.</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>No personal identification information (PII) is required to use our tool.</li>
          <li>No download history is maintained.</li>
          <li>No cookies are used to track your personal browsing habits outside of basic session management.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. Third-Party Services</h2>
        <p>We use third-party services like Google AdSense to serve advertisements. These services may use cookies and web beacons to collect information as part of the ad-serving process. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.</p>
        <p>You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-pink-500 underline">Google Ads Settings</a>.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. Compliance with Laws</h2>
        <p>We will disclose your information where required to do so by law or subpoena or if we believe that such action is necessary to comply with the law and the reasonable requests of law enforcement.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at support@socialsave.pro.</p>
      </section>
    </main>
  );
}
