export default function TermsOfUse() {
  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms & Eligibility",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      content: (
        <>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg mb-4">
            <p className="text-blue-800 dark:text-blue-200 font-medium">
              You must be at least 13 years old to use the Service.
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            If you are under the age of majority in your jurisdiction (typically 18 years), a parent or legal guardian must review and accept these Terms on your behalf.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            By creating an account, you represent that the registration information you provide is accurate and complete and that you have the legal capacity to enter into this agreement.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            If you register on behalf of an organisation, you confirm that you have authority to bind that entity to these Terms.
          </p>
        </>
      )
    },
    {
      id: "changes",
      title: "2. Changes to These Terms",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      content: (
        <p className="text-gray-600 dark:text-gray-300">
          We may modify these Terms at any time to reflect changes in law, our business, or the Service. Material changes will be notified via email or in-app notice. Unless a longer notice period is required by law, changes take effect when posted. Continued use of the Service after changes become effective constitutes acceptance.
        </p>
      )
    },
    {
      id: "license",
      title: "3. Licence & Permitted Use",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            GymRNK grants you a personal, worldwide, revocable, non-transferable, non-exclusive licence to access and use the Service solely for its intended, non-commercial purposes: logging workouts, engaging with social-fitness features, and viewing or sharing content.
          </p>
          <div className="mt-4">
            <p className="font-semibold text-gray-900 dark:text-white mb-3">You agree not to:</p>
            <div className="space-y-2">
              {[
                "interfere with or disrupt the Service or servers",
                "access the Service via automated means (bots, scrapers, etc.)",
                "reverse-engineer, decompile, or otherwise attempt to derive source code",
                "use the Service to advertise, solicit, or transmit spam",
                "violate any applicable law or third-party right"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )
    },
    {
      id: "accounts",
      title: "4. Accounts & Security",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account.
          </p>
          <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
            <p className="text-amber-800 dark:text-amber-200">
              <strong>Important:</strong> Notify us immediately at <a href="mailto:support@gymrnk.com" className="underline hover:no-underline">support@gymrnk.com</a> if you suspect unauthorised use. GymRNK is not liable for losses arising from unauthorised access due to your failure to safeguard credentials.
            </p>
          </div>
        </>
      )
    },
    {
      id: "content",
      title: "5. User Content & Community Guidelines",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      content: (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            "User Content" means any photos, workout data, comments, or other materials you post. You retain ownership of your User Content, but you grant GymRNK a worldwide, royalty-free licence to host, display, and distribute it via the Service.
          </p>
          <div className="mt-4">
            <p className="font-semibold text-gray-900 dark:text-white mb-3">When posting, you must ensure that content:</p>
            <div className="space-y-2">
              {[
                "is lawful, respectful, and free of hate speech, harassment, or sexually explicit material",
                "does not infringe intellectual-property or privacy rights",
                "does not include unauthorised ads or malware"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            We may remove or restrict content that violates these Terms or applicable law.
          </p>
        </>
      )
    },
    {
      id: "social",
      title: "6. Social Features",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: (
        <p className="text-gray-600 dark:text-gray-300">
          The Service enables friend requests, likes, comments, messaging, and leaderboards. Interact respectfully and adhere to the Community Guidelines. Repeated abusive behaviour may result in suspension.
        </p>
      )
    },
    {
      id: "data",
      title: "7. Data Collection",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      content: (
        <p className="text-gray-600 dark:text-gray-300">
          We collect and process data as described in our <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a>—including workout metrics, images, friendship connections, and technical device data—to operate and improve the Service. By using the Service, you consent to such processing.
        </p>
      )
    },
    {
      id: "ip",
      title: "8. Intellectual Property",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      content: (
        <p className="text-gray-600 dark:text-gray-300">
          All software, branding, and original content provided by GymRNK—not user-generated—are our intellectual property protected by Serbian, EU, and international laws. You may not reproduce, reverse-engineer, or create derivative works without our prior written consent.
        </p>
      )
    },
    {
      id: "reporting",
      title: "9. Reporting & Moderation",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
        </svg>
      ),
      content: (
        <p className="text-gray-600 dark:text-gray-300">
          You may report content or behaviour that violates these Terms via in-app tools or by emailing <a href="mailto:support@gymrnk.com" className="text-blue-600 dark:text-blue-400 hover:underline">support@gymrnk.com</a>. We review reports promptly and may remove content, issue warnings, or suspend accounts. Decisions may be appealed through the same channels.
        </p>
      )
    },
    {
      id: "payments",
      title: "10. Payments & Premium Features",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      content: (
        <p className="text-gray-600 dark:text-gray-300">
          If GymRNK offers paid subscriptions, premium modules, or virtual items, all payments are processed by third-party payment providers (e.g., Stripe, Apple, Google). You agree to comply with their terms and to pay all applicable fees and taxes. Virtual items have no real-world value, are non-refundable, and may be modified, suspended, or discontinued at our discretion.
        </p>
      )
    },
    {
      id: "thirdparty",
      title: "11. Third-Party Links & Services",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      ),
      content: (
        <p className="text-gray-600 dark:text-gray-300">
          The Service may include links to third-party websites or services. We do not control or endorse these sites and are not responsible for their content, privacy practices, or terms. Access them at your own risk.
        </p>
      )
    },
    {
      id: "health",
      title: "12. Health & Medical Disclaimer",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      content: (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-red-800 dark:text-red-200">
            <strong>Warning:</strong> GymRNK provides fitness tracking and social encouragement for informational purposes only. We are not a medical provider. Always consult a qualified health professional before starting or modifying any exercise programme. Using the Service is at your own risk; discontinue any activity that causes pain or distress.
          </p>
        </div>
      )
    },
    {
      id: "law",
      title: "13. Governing Law & Jurisdiction",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      content: (
        <p className="text-gray-600 dark:text-gray-300">
          These Terms are governed by the laws of the Republic of Serbia, without regard to conflict-of-law rules. Any dispute arising out of or related to the Service shall be resolved exclusively in the competent courts of Novi Sad, Serbia, and you consent to their jurisdiction.
        </p>
      )
    },
    {
      id: "suspension",
      title: "14. Suspension & Termination",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
      content: (
        <p className="text-gray-600 dark:text-gray-300">
          We may suspend or terminate your access to the Service at any time with or without notice if you breach these Terms or if we discontinue the Service. Upon termination, all licences granted under these Terms expire.
        </p>
      )
    },
    {
      id: "warranties",
      title: "15. Disclaimer of Warranties",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: (
        <p className="text-gray-600 dark:text-gray-300">
          The Service is provided "as is" and "as available" without warranties of any kind, whether express or implied. GymRNK does not guarantee that the Service will be uninterrupted, error-free, or secure.
        </p>
      )
    },
    {
      id: "liability",
      title: "16. Limitation of Liability",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      content: (
        <p className="text-gray-600 dark:text-gray-300">
          To the maximum extent permitted by law, GymRNK and its affiliates shall not be liable for indirect, incidental, special, consequential, or punitive damages, including lost profits or data, arising from your use of the Service, even if we have been advised of the possibility of such damages. Our aggregate liability shall not exceed the greater of (a) €50 or (b) the amount you paid to GymRNK in the 12 months preceding the claim.
        </p>
      )
    },
    {
      id: "indemnification",
      title: "17. Indemnification",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      content: (
        <p className="text-gray-600 dark:text-gray-300">
          You agree to indemnify, defend, and hold harmless GymRNK, its directors, employees, and agents from any claims, damages, or expenses (including legal fees) arising out of your: (i) use of the Service; (ii) violation of these Terms; or (iii) violation of any third-party right.
        </p>
      )
    },
    {
      id: "agreement",
      title: "18. Entire Agreement",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      content: (
        <p className="text-gray-600 dark:text-gray-300">
          These Terms, together with the Privacy Policy, constitute the entire agreement between you and GymRNK regarding the Service and supersede any prior agreements or understandings.
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
              Terms of Use
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Please read these terms carefully before using GymRNK
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-300">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Last updated: June 23, 2025
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 mb-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Welcome to GymRNK</h2>
            <p className="text-blue-100 leading-relaxed mb-4">
              The gamified social-fitness platform that helps you track progress, climb leaderboards, and connect with a community of like-minded athletes.
            </p>
            <p className="text-blue-100 leading-relaxed">
              These Terms of Use ("Terms") form a legally binding agreement between you and <strong className="text-white">GymRNK d.o.o.</strong> ("GymRNK," "we," "us," or "our"), a company incorporated in the Republic of Serbia with its registered office at Trg Oslobođenja 1, 21000 Novi Sad, Serbia.
            </p>
            <div className="mt-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <p className="text-sm">
                By accessing or using our website, mobile applications, or related services (collectively, the "Service"), you acknowledge that you have read, understood, and agreed to be bound by these Terms and by our <a href="#" className="underline hover:no-underline">Privacy Policy</a>. If you do not agree, please refrain from using the Service.
              </p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="mb-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">Quick Navigation</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center space-x-2"
                >
                  <span className="text-gray-400">{section.icon}</span>
                  <span>{section.title.split('. ')[1]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 scroll-mt-24 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {section.title}
                    </h2>
                    {section.content}
                  </div>
                </div>
              </section>
            ))}

            {/* Contact Section */}
            <section className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                19. Contact
              </h2>
              <p className="text-gray-300 mb-4">Questions or concerns?</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:support@gymrnk.com" className="text-gray-300 hover:text-white hover:underline">
                      support@gymrnk.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-300">
                      GymRNK d.o.o.<br />
                      Trg Oslobođenja 1<br />
                      21000 Novi Sad, Serbia
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mt-6 text-sm">
                We aim to respond promptly, in line with applicable laws and regulations.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-600">
                <p className="text-gray-300 italic">
                  Thank you for choosing GymRNK and for helping us build a positive, motivating fitness community.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}