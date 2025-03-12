import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Ertzan Loonbedrijf",
  description: "Our privacy policy and how we protect your personal information",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-950 rounded-xl shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose dark:prose-invert max-w-none">
            <p>
              At Ertzan Loonbedrijf, we take your privacy seriously. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>We collect information that you provide directly to us when you:</p>
            <ul>
              <li>Fill out forms on our website</li>
              <li>Create an account</li>
              <li>Subscribe to our newsletter</li>
              <li>Request a quote</li>
              <li>Contact our customer service</li>
              <li>Place an order for our services</li>
            </ul>

            <p>The types of information we may collect include:</p>
            <ul>
              <li>Personal identifiers (name, email address, phone number, postal address)</li>
              <li>Payment information</li>
              <li>Service preferences and history</li>
              <li>Communications with our team</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and administrative messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about products, services, offers, and events</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Personalize and improve your experience</li>
            </ul>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain
              information. Cookies are files with a small amount of data which may include an anonymous unique
              identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
              sent.
            </p>

            <h2>Data Sharing and Disclosure</h2>
            <p>We may share your personal information in the following situations:</p>
            <ul>
              <li>With service providers who perform services on our behalf</li>
              <li>To comply with legal obligations</li>
              <li>To protect and defend our rights and property</li>
              <li>With your consent or at your direction</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the
              security of any personal information we process. However, please also remember that we cannot guarantee
              that the internet itself is 100% secure.
            </p>

            <h2>Your Data Protection Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li>The right to access information we hold about you</li>
              <li>The right to request correction of your personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to object to processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <ul>
              <li>Email: privacy@ertzanloonbedrijf.nl</li>
              <li>Phone: 048823813</li>
              <li>Address: Reinwardstraat 33, 2522 AA 's-Gravenhage, Netherlands</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

