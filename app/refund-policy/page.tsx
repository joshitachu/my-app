/* eslint-disable */
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Refund Policy - Ertzan Loonbedrijf",
  description: "Our refund policy for installation services",
}

export default function RefundPolicyPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-950 rounded-xl shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose dark:prose-invert max-w-none">
            <p>
              At Ertzan Loonbedrijf, we strive to provide the highest quality installation services. We understand that
              sometimes issues may arise, and we want to ensure your complete satisfaction with our services.
            </p>

            <h2>Service Satisfaction Guarantee</h2>
            <p>
              If you are not satisfied with the quality of our installation service, please notify us within 7 days of
              the service completion. We will schedule a follow-up visit to address your concerns at no additional cost.
            </p>

            <h2>Refund Eligibility</h2>
            <p>Refunds may be issued in the following circumstances:</p>
            <ul>
              <li>
                If we are unable to complete the installation due to technical limitations not disclosed during the
                booking process
              </li>
              <li>If our technician fails to arrive for a scheduled appointment without prior notice</li>
              <li>If the installation fails to meet industry standards and cannot be corrected in a follow-up visit</li>
            </ul>

            <h2>Refund Process</h2>
            <p>To request a refund:</p>
            <ol>
              <li>Contact our customer service team within 7 days of the service completion</li>
              <li>Provide your order number and details about the issue</li>
              <li>Our team will review your request and may schedule an inspection if necessary</li>
              <li>If approved, refunds will be processed using the original payment method within 10 business days</li>
            </ol>

            <h2>Partial Refunds</h2>
            <p>In some cases, we may offer partial refunds if:</p>
            <ul>
              <li>Only a portion of the services failed to meet standards</li>
              <li>Additional materials were charged but not used</li>
              <li>The service took significantly less time than estimated</li>
            </ul>

            <h2>Non-Refundable Items</h2>
            <p>The following are not eligible for refunds:</p>
            <ul>
              <li>Cancellations with less than 24 hours' notice</li>
              <li>Custom or special-order materials that have been installed</li>
              <li>Services completed to specification but later unwanted due to change of preference</li>
              <li>Issues arising from customer-provided equipment or materials</li>
            </ul>

            <h2>Warranty Claims</h2>
            <p>
              All our installations come with a 1-year warranty. If issues arise after the 7-day refund period but
              within the warranty period, we will repair or correct the installation at no additional cost.
            </p>

            <h2>Contact Us</h2>
            <p>If you have any questions about our refund policy or need to request a refund, please contact us at:</p>
            <ul>
              <li>Email: support@ertzanloonbedrijf.nl</li>
              <li>Phone: 048823813</li>
              <li>Address: Reinwardstraat 33, 2522 AA 's-Gravenhage, Netherlands</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

