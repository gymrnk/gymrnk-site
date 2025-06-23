export default function PrivacyPolicy() {
  const sections = [
    {
      id: "scope",
      title: "1. Scope & Acceptance",
      content: (
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          GymRNK ("<strong className="text-gray-900 dark:text-white">GymRNK</strong>", "<strong className="text-gray-900 dark:text-white">we</strong>", "<strong className="text-gray-900 dark:text-white">our</strong>", or
          "<strong className="text-gray-900 dark:text-white">us</strong>") respects your privacy and is committed to protecting
          your personal information. By creating an account, visiting
          gymrnk.com, or otherwise using the website and mobile applications
          (collectively, the "<strong className="text-gray-900 dark:text-white">Services</strong>"), you agree that your
          information will be handled as described in this Policy and, where
          applicable, in accordance with the privacy laws of your country of
          residence.
        </p>
      )
    },
    {
      id: "information",
      title: "2. Information We Collect",
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">We collect the following categories of personal data:</p>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong className="text-gray-900 dark:text-white">Account Data</strong>
                <span className="text-gray-600 dark:text-gray-300"> — email address, display name, password.</span>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong className="text-gray-900 dark:text-white">Profile Data</strong>
                <span className="text-gray-600 dark:text-gray-300"> — profile photo, bio, date of birth, height, weight, fitness goals.</span>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong className="text-gray-900 dark:text-white">Activity Data</strong>
                <span className="text-gray-600 dark:text-gray-300"> — workouts logged, rankings, posts, likes, friends, messages.</span>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong className="text-gray-900 dark:text-white">Device & Usage Data</strong>
                <span className="text-gray-600 dark:text-gray-300"> — IP address, browser type, device IDs, in‑app events, crash reports, cookies.</span>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong className="text-gray-900 dark:text-white">Media</strong>
                <span className="text-gray-600 dark:text-gray-300"> — photos or videos you upload to share progress or workout content.</span>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <em>Sensitive data</em> (such as health metrics) is processed only to
              deliver the fitness features you request and is never used for
              advertising without your explicit consent.
            </p>
          </div>
        </>
      )
    },
    {
      id: "usage",
      title: "3. How We Use Your Information",
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">We process personal data to:</p>
          <div className="space-y-3">
            {[
              { title: "Provide & maintain the Services", desc: "create and secure accounts, display leaderboards, calculate rankings, and store workout history." },
              { title: "Personalise your experience", desc: "suggest workouts, surface friends' achievements, and tailor in‑app content." },
              { title: "Communicate with you", desc: "send transactional emails, security alerts, service updates, and optional newsletters." },
              { title: "Improve & secure the Services", desc: "debug issues, analyse usage trends, prevent fraud and misuse." },
              { title: "Promote new features & offers", desc: "(with your opt‑in consent)." },
              { title: "Comply with legal obligations", desc: "and enforce our Terms of Service." }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </span>
                <div>
                  <strong className="text-gray-900 dark:text-white">{item.title}</strong>
                  <span className="text-gray-600 dark:text-gray-300"> — {item.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-6">
            Where required by law (e.g., GDPR), we rely on one or more legal
            bases such as contract performance, legitimate interests, consent,
            or compliance with a legal obligation.
          </p>
        </>
      )
    },
    {
      id: "sharing",
      title: "4. Sharing Your Information",
      content: (
        <>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg mb-6">
            <p className="text-green-800 dark:text-green-200 font-semibold">We do not sell personal information.</p>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">We share data only:</p>
          <div className="space-y-3">
            {[
              { title: "With trusted service providers", desc: "who perform services on our behalf (cloud hosting, payment processing, analytics) under strict confidentiality obligations." },
              { title: "With other GymRNK users", desc: "when you choose to make your profile or posts visible, add friends, or join public leaderboards." },
              { title: "For legal reasons", desc: "to comply with applicable law, court order, or to defend our rights." },
              { title: "In a business transfer", desc: "if we merge, sell, or reorganise, your information may transfer, subject to this Policy." }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-gray-900 dark:text-white">{item.title}</strong>
                  <span className="text-gray-600 dark:text-gray-300"> — {item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      id: "cookies",
      title: "5. Cookies & Similar Technologies",
      content: (
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          We use cookies, local storage, and analytics SDKs to keep you signed
          in, remember preferences, and measure traffic and feature usage. You
          can control cookies through your browser or device settings, though
          some functionality may be limited if cookies are disabled.
        </p>
      )
    },
    {
      id: "retention",
      title: "6. Data Retention",
      content: (
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          We retain account data while your account is active and for as long
          as necessary to fulfil the purposes outlined in this Policy (usually
          up to 30 days after deletion for backup integrity), unless a
          longer period is required by law.
        </p>
      )
    },
    {
      id: "security",
      title: "7. Security",
      content: (
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          We employ industry‑standard technical and organisational safeguards
          — encryption in transit, hashed passwords, role‑based access
          controls, and regular security audits. No system is 100% secure;
          please use strong, unique passwords and enable additional security
          options where available.
        </p>
      )
    },
    {
      id: "rights",
      title: "8. Your Rights & Choices",
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Depending on your jurisdiction, you may have the right to:</p>
          <div className="grid gap-3">
            {[
              "Access the personal data we hold about you.",
              "Correct or update inaccurate information.",
              "Delete your account and data (\"right to erasure\").",
              "Object to or restrict certain processing.",
              "Port your data to another service.",
              "Withdraw consent at any time (for processing based on consent)."
            ].map((right, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">{right}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-6">
            You can exercise most controls in your account settings. For other
            requests, email <a href="mailto:privacy@gymrnk.com" className="text-blue-600 dark:text-blue-400 hover:underline">privacy@gymrnk.com</a>.
            We will respond within 30 days or the timeframe required by law.
          </p>
        </>
      )
    },
    {
      id: "transfers",
      title: "9. International Transfers",
      content: (
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          GymRNK is based in Serbia, and our service providers may be located
          worldwide. When we transfer personal data outside your region, we
          use recognised safeguards (such as Standard Contractual Clauses)
          to protect your information.
        </p>
      )
    },
    {
      id: "children",
      title: "10. Children's Privacy",
      content: (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-red-800 dark:text-red-200">
            The Services are <strong>not intended for children under 13</strong> (or the
            minimum age required by local law). We do not knowingly collect data
            from children. If you believe a child has provided us personal data,
            please contact us so we can delete it.
          </p>
        </div>
      )
    },
    {
      id: "thirdparty",
      title: "11. Third‑Party Links",
      content: (
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          The Services may contain links to websites or services we do not
          control. This Policy does not cover those third parties. Review
          their privacy policies before providing any information.
        </p>
      )
    },
    {
      id: "changes",
      title: "12. Changes to This Policy",
      content: (
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          We may update this Policy from time to time. Material changes will
          be highlighted in‑app or via email. Continued use of the Services
          after an update constitutes acceptance of the revised Policy.
        </p>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Your privacy matters to us
            </p>
            <div className="mt-4 inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-300">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Last updated: June 23, 2025
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="mb-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">Quick Navigation</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {sections.slice(0, 12).map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {section.title}
                </h2>
                {section.content}
              </section>
            ))}

            {/* Contact Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                  </svg>
                  <div>
                    <p className="font-semibold">GymRNK Privacy Team</p>
                    <a href="mailto:privacy@gymrnk.com" className="hover:underline">
                      privacy@gymrnk.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-blue-100">
                      GymRNK d.o.o.<br />
                      Trg Oslobođenja 1<br />
                      21000 Novi Sad, Serbia
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-blue-500">
                <p className="text-blue-100">
                  Thank you for trusting GymRNK with your fitness journey.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}