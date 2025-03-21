/* eslint-disable */
import type { Metadata } from "next";
import Image from "next/image"; // ✅ Replacing <img> with <Image />
import img from "./about.jpg";
import { CheckCircle, Award, Users, ThumbsUp } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Ertzan Loonbedrijf",
  description: "Learn about our company, our mission, and our commitment to quality installation services",
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Ertzan Loonbedrijf</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We&rsquo;re a team of certified professionals dedicated to providing top-quality installation services for homes
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
                Today, we continue to uphold these values as we expand our services and reach. We&rsquo;re proud to have
                served over 10,000 customers and completed more than 25,000 installations across the country.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src={img}
                alt="Ertzan Loonbedrijf team"
                fill // ✅ Automatically fills the container div
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw" // ✅ Responsive image sizes
                priority // ✅ Optimizes LCP
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
                  "I&rsquo;ve used their services multiple times for various installations in my home. Always reliable, always on time, and always excellent work.",
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
                <p className="text-slate-600 dark:text-slate-400 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
