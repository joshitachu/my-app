/* eslint-disable */
import type { Metadata } from "next"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
  title: "Contact Us - Ertzan Loonbedrijf",
  description: "Get in touch with our team for professional installation services",
}

export default function ContactPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Have questions or ready to schedule your installation? Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl text-center">
              <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Location</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Reinwardstraat 33
                <br />
                2522 AA s-Gravenhage
                <br />
                Netherlands
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl text-center">
              <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Phone</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-2">Main Office: 048823813</p>
              <p className="text-slate-600 dark:text-slate-400">Customer Support: 048823813</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl text-center">
              <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Email</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-2">info@ertzanloonbedrijf.nl</p>
              <p className="text-slate-600 dark:text-slate-400">support@ertzanloonbedrijf.nl</p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl mb-12">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h3 className="text-xl font-semibold">Business Hours</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Weekdays</h4>
                <p className="text-slate-600 dark:text-slate-400">Monday - Friday: 8:00 AM - 6:00 PM</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Weekends</h4>
                <p className="text-slate-600 dark:text-slate-400">Saturday: 9:00 AM - 4:00 PM</p>
                <p className="text-slate-600 dark:text-slate-400">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" className="w-full" />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" className="w-full" />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help?" className="w-full" />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell us about your project" className="w-full min-h-[150px]" />
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Location</h2>
              <div className="h-[400px] bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden">
                {/* In a real implementation, you would embed a Google Map or similar here */}
                <div className="w-full h-full flex items-center justify-center bg-slate-300 dark:bg-slate-700">
                  <p className="text-slate-600 dark:text-slate-400">Map would be embedded here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How do I schedule an installation?",
                answer:
                  "You can schedule an installation by contacting us through our website, calling our office, or sending us an email. Well work with you to find a convenient time for the service.",
              },
              {
                question: "What areas do you serve?",
                answer:
                  "We currently serve Amsterdam and surrounding areas within a 50km radius. If youre unsure if we service your area, please contact us.",
              },
              {
                question: "Do you offer warranties on your installations?",
                answer:
                  "Yes, all our installations come with a 1-year warranty covering any issues related to the installation work.",
              },
              {
                question: "How long does a typical installation take?",
                answer:
                  "Installation times vary depending on the service. Simple installations like TV mounting typically take 1-2 hours, while more complex services like full smart home setups may take several hours or multiple visits.",
              },
              {
                question: "Do I need to provide any tools or equipment?",
                answer:
                  "No, our technicians come fully equipped with all necessary tools and equipment to complete the installation.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept cash, credit/debit cards, bank transfers, and popular payment apps. Payment is typically collected upon completion of the service.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-slate-600 dark:text-slate-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

