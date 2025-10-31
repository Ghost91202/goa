import React from 'react'

export const metadata = {
  title: 'Privacy Policy & Terms - MySite',
  description: 'Privacy policy, data processing, GDPR rights, age verification, and contact details for MySite.'
}

export default function PrivacyPage(){
  const effectiveDate = '2025-10-31'

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <header className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-black">Privacy Policy & Terms</h1>
        <p className="mt-2 text-sm text-pink-500">Effective date: {effectiveDate}</p>
        <div className="mx-auto mt-4 w-24 h-1 bg-linear-to-r from-yellow-400 to-yellow-600 rounded-full" />
      </header>

      <section className="bg-black/55 border border-yellow-600/20 rounded-2xl p-8 backdrop-blur-md shadow-xl">
        <article className="prose lg:prose-xl prose-invert text-white">
          <h2 className="sr-only">Privacy Policy & Terms</h2>

          <h3 className="text-lg font-medium text-yellow-300">Introduction</h3>
          <p>
            Welcome to MySite. We respect your privacy and are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
            data when you use our website and services. Please read it carefully.
          </p>

          <h3 className="text-lg font-medium text-yellow-300">Data We Collect</h3>
          <ul>
            <li>Contact details (name, email, phone) you provide when contacting us or making a booking.</li>
            <li>Communication content you send us (messages, inquiries).</li>
            <li>Usage data (pages visited, clicks, IP address, device/browser information) collected via logs and analytics.</li>
            <li>Cookies and similar technologies for session and preference management.</li>
            <li>Optional profile details (images, descriptions, ratings) you publish or that are provided by providers.</li>
          </ul>

          <h3 className="text-lg font-medium text-yellow-300">How We Use Your Data</h3>
          <p>We use your information to:</p>
          <ul>
            <li>Respond to your inquiries and fulfil booking requests.</li>
            <li>Improve and personalise the site, features, and recommendations.</li>
            <li>Provide customer support and communicate important notices.</li>
            <li>Detect, prevent, and investigate fraud or other prohibited activities.</li>
          </ul>

          <h3 className="text-lg font-medium text-yellow-300">Legal Basis for Processing (GDPR)</h3>
          <p>If you are in the European Economic Area (EEA), we process your personal data under one or more of the
          following legal bases: your consent, performance of a contract, compliance with a legal obligation, or our
          legitimate interests (for example improving services, security, and fraud prevention).</p>

          <h3 className="text-lg font-medium text-yellow-300">Cookies & Tracking</h3>
          <p>We use cookies and similar tools to personalize content, remember preferences, and analyze traffic. You
          can control cookie preferences using your browser settings. For analytics we use aggregated and pseudonymised
          data when possible.</p>

          <h3 className="text-lg font-medium text-yellow-300">Sharing & Third Parties</h3>
          <p>We do not sell your personal data. We may share data with:</p>
          <ul>
            <li>Service providers who operate services on our behalf (hosting, analytics, email delivery).</li>
            <li>Payment processors or partners when a booking or transaction requires it.</li>
            <li>Authorities when required by law or to protect our rights.</li>
          </ul>

          <h3 className="text-lg font-medium text-yellow-300">Profile & Provider Data</h3>
          <p>Profiles and listings that appear on the site may include images, descriptions, rates, availability, and
          reviews submitted by users. Providers are responsible for the accuracy of their own listings. We may retain
          and display content that providers upload to the public site.</p>

          <h3 className="text-lg font-medium text-yellow-300">Data Retention</h3>
          <p>We retain personal data only for as long as necessary for the purposes described, or as required by law.
          We securely delete or anonymize data when it is no longer needed.</p>

          <h3 className="text-lg font-medium text-yellow-300">Your Rights (EEA & UK)</h3>
          <p>Where applicable, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Request correction or completion of inaccurate data.</li>
            <li>Request deletion of your personal data (subject to legal exceptions).</li>
            <li>Object to or restrict processing in certain circumstances.</li>
            <li>Request portability of your data in a commonly used format.</li>
            <li>Lodge a complaint with a supervisory authority.</li>
          </ul>
          <p>To exercise these rights, contact us at <a className="text-yellow-300 underline" href="mailto:privacy@mysite.example">privacy@mysite.example</a>.</p>

          <h3 className="text-lg font-medium text-yellow-300">Age Verification & Sensitive Content</h3>
          <p>
            Our site includes content that may be for adults only. You must be at least 18 years old (or the legal age in
            your country) to use certain features. We implement age verification controls where required; however, you
            must not provide us with personal data of someone under the legal age. We do not knowingly collect personal
            information from children.
          </p>

          <h3 className="text-lg font-medium text-yellow-300">Security</h3>
          <p>We use administrative, technical, and physical safeguards to protect your information. For example, we use
          HTTPS for encrypted in-transit communication, access controls, and secure hosting. However, no system can be
          absolutely secure; report any suspected breach to us immediately.</p>

          <h3 className="text-lg font-medium text-yellow-300">Encrypted Communication</h3>
          <p>When you contact providers using third-party messaging apps (for example WhatsApp), those communications
          may be end-to-end encrypted by the provider (the third-party) — we do not control external encryption services.
          For sensitive exchanges, prefer secure channels and never share unnecessary personal identifiers.</p>

          <h3 className="text-lg font-medium text-yellow-300">Changes to this Policy</h3>
          <p>We may update this policy periodically. We will post the revised policy with a new effective date. Continued use
          of the site after changes constitutes acceptance of the updated policy.</p>

          <h3 className="text-lg font-medium text-yellow-300">Contact & Data Controller</h3>
          <p>
            MySite is the data controller for the information collected on this site. If you have questions about this
            policy or want to exercise your rights, contact: <br />
            <strong>Email:</strong> <a className="text-yellow-300 underline" href="mailto:privacy@mysite.example">privacy@mysite.example</a><br />
            <strong>Address:</strong> 123 Luxe Street, Panaji, Goa
          </p>

          <h3 className="text-lg font-medium text-yellow-300">Additional Terms</h3>
          <p>
            Use of the service is subject to our general Terms of Service. Users must comply with local laws and act
            responsibly. Providers are expected to operate professionally, transparently, and in compliance with applicable laws.
          </p>

          <p className="mt-8 text-sm text-yellow-200">If you have questions or concerns about privacy or data processing, please contact us at <a className="text-yellow-300 underline" href="mailto:privacy@mysite.example">privacy@mysite.example</a>.</p>
        </article>
      </section>
    </main>
  )
}
