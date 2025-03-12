import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - Ertzan Loonbedrijf",
  description: "Our terms of service and conditions for using our installation services",
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-950 rounded-xl shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose dark:prose-invert max-w-none">
            <p>
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the website or
              services operated by Ertzan Loonbedrijf.
            </p>

            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing our website or using our services, you agree to be bound by these Terms. If you disagree with
              any part of the terms, you may not access our website or use our services.
            </p>

            <h2>2. Services</h2>
            <p>
              Ertzan Loonbedrijf provides professional installation services including but not limited to TV mounting,
              satellite dish installation, air conditioning installation, ceiling fan installation, electrical work, and
              smart home installation.
            </p>

            <h2>3. Service Appointments</h2>
            <p>When scheduling a service appointment, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information about your service needs</li>
              <li>Be present at the scheduled time or provide access to the property</li>
              <li>Ensure the area is accessible and prepared for the installation</li>
              <li>Notify us at least 24 hours in advance if you need to reschedule</li>
            </ul>

            <h2>4. Payment Terms</h2>
            <p>
              Payment is due upon completion of the service unless otherwise agreed upon. We accept various payment
              methods as indicated on our website or communicated by our staff.
            </p>
            <p>
              For certain services, a deposit may be required at the time of booking. Deposits are non-refundable if you
              cancel with less than 24 hours' notice.
            </p>

            <h2>5. Warranties and Guarantees</h2>
            <p>
              All our installation services come with a 1-year warranty covering any issues related to the installation
              work. This warranty does not cover:
            </p>
            <ul>
              <li>Damage caused by misuse, accidents, or natural disasters</li>
              <li>Issues with the product itself (covered by manufacturer warranty)</li>
              <li>Modifications made by anyone other than our technicians</li>
              <li>Normal wear and tear</li>
            </ul>

            <h2>6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Ertzan Loonbedrijf shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether
              incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting
              from:
            </p>
            <ul>
              <li>Your use or inability to use our services</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any interruption or cessation of transmission to or from our services</li>
              <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our service</li>
            </ul>

            <h2>7. Property Access and Damage</h2>
            <p>
              By scheduling our services, you grant our technicians permission to access your property as necessary to
              perform the requested installation. While our technicians take all reasonable precautions, we are not
              responsible for pre-existing conditions that may affect the installation (e.g., weak walls, electrical
              issues).
            </p>

            <h2>8. Cancellation Policy</h2>
            <p>
              You may cancel or reschedule an appointment with at least 24 hours' notice without penalty. Cancellations
              with less than 24 hours' notice may incur a cancellation fee of up to 50% of the service cost.
            </p>

            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will provide notice of significant changes by
              updating the "Last updated" date at the top of this page.
            </p>

            <h2>10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Netherlands, without
              regard to its conflict of law provisions.
            </p>

            <h2>11. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <ul>
              <li>Email: legal@ertzanloonbedrijf.nl</li>
              <li>Phone: 048823813</li>
              <li>Address: Reinwardstraat 33, 2522 AA 's-Gravenhage, Netherlands</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

