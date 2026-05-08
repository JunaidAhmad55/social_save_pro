export default function DisclaimerPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 space-y-8">
      <h1 className="text-4xl font-bold">Disclaimer</h1>
      <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. General Information</h2>
        <p>
          SocialSave Pro is provided for informational and utility purposes only.
          While we strive to keep the service reliable and accurate, we make no
          guarantees regarding availability, completeness, or suitability for any
          specific purpose.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Platform Affiliation</h2>
        <p>
          SocialSave Pro is an independent service and is not affiliated with,
          endorsed by, or sponsored by Instagram, Facebook, YouTube, Meta
          Platforms, Inc., Google, or any other third-party platform.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. User Responsibility</h2>
        <p>
          You are solely responsible for how you use this service and for ensuring
          your actions comply with all applicable laws, platform terms, and
          copyright requirements in your jurisdiction.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. No Legal Advice</h2>
        <p>
          Content on this website does not constitute legal advice. If you are
          unsure whether your use is lawful, consult a qualified legal
          professional.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, SocialSave Pro shall not be
          liable for any direct, indirect, incidental, or consequential damages
          arising from use of or inability to use the service.
        </p>
      </section>
    </main>
  );
}
