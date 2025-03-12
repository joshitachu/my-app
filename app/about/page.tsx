import type { Metadata } from "next"
import { CheckCircle, Award, Users, ThumbsUp } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Ertzan Loonbedrijf",
  description: "Learn about our company, our mission, and our commitment to quality installation services",
}

export default function AboutPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Ertzan Loonbedrijf</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We're a team of certified professionals dedicated to providing top-quality installation services for homes
            and businesses.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                Founded in 2010, Ertzan Loonbedrijf began as a small family business with a simple mission: to provide
                reliable, high-quality installation services at fair prices. What started as a one-person operation has
                grown into a team of certified professionals serving the entire Netherlands.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                Our founder, Jan Ertzan, started the company after noticing a gap in the market for professional
                installation services. With a background in electrical engineering and a passion for customer service,
                Jan built the company on the principles of quality workmanship, reliability, and customer satisfaction.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Today, we continue to uphold these values as we expand our services and reach. We're proud to have
                served over 10,000 customers and completed more than 25,000 installations across the country.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img
                src="/placeholder.svg?height=800&width=1200"
                alt="Ertzan Loonbedrijf team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
              <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-slate-600 dark:text-slate-400">
                We never compromise on quality. Every installation is performed to the highest standards using premium
                materials and equipment.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
              <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Professionalism</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Our team consists of certified professionals who are punctual, respectful, and committed to delivering
                exceptional service.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
              <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-slate-600 dark:text-slate-400">
                We stand behind our work with comprehensive warranties and are always available to address any concerns.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
              <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <ThumbsUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Your satisfaction is our priority. We listen to your needs and work with you to deliver solutions that
                exceed your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Jan Ertzan",
                role: "Founder & CEO",
                bio: "With over 20 years of experience in installation services, Jan leads our company with passion and expertise.",
                image: "/images/team/jan-ertzan.jpg",
              },
              {
                name: "Lisa van der Berg",
                role: "Operations Manager",
                bio: "Lisa ensures that all our installations run smoothly and efficiently, maintaining our high standards of quality.",
                image: "/images/team/lisa-vanderberg.jpg",
              },
              {
                name: "Pieter de Vries",
                role: "Lead Technician",
                bio: "Pieter brings 15 years of technical expertise to every project, specializing in complex installations.",
                image: "/images/team/pieter-devries.jpg",
              },
              {
                name: "Sophie Jansen",
                role: "Customer Service Manager",
                bio: "Sophie is dedicated to ensuring every customer has an exceptional experience with our company.",
                image: "/images/team/sophie-jansen.jpg",
              },
              {
                name: "Thomas Bakker",
                role: "Technical Specialist",
                bio: "Thomas is our expert in smart home technology and advanced electrical installations.",
                image: "/images/team/thomas-bakker.jpg",
              },
              {
                name: "Emma Visser",
                role: "Scheduling Coordinator",
                bio: "Emma manages our busy installation schedule, ensuring timely service for all our customers.",
                image: "/images/team/emma-visser.jpg",
              },
            ].map((member, index) => (
              <div key={index} className="bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-64">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-3">{member.role}</p>
                  <p className="text-slate-600 dark:text-slate-400">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The team at Ertzan Loonbedrijf did an amazing job mounting my TV and setting up my home theater system. Professional, efficient, and friendly service!",
                author: "Marieke de Jong",
                location: "Amsterdam",
              },
              {
                quote:
                  "I've used their services multiple times for various installations in my home. Always reliable, always on time, and always excellent work.",
                author: "Joost van Dijk",
                location: "Rotterdam",
              },
              {
                quote:
                  "The smart home installation they did for me has transformed how I live. Everything works perfectly, and they were so helpful explaining how to use everything.",
                author: "Anna Smit",
                location: "Utrecht",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience Our Service?</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Contact us today to schedule your installation or request a quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold text-lg"
            >
              Contact Us
            </a>
            <a
              href="/services"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold text-lg"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

