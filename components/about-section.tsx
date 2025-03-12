"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/about/company-building.jpg"
              alt="Professional installation services"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Ertzan Loonbedrijf</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              With over 10 years of experience, we specialize in professional installation services for homes and
              offices. Our team of certified technicians delivers high-quality work with attention to detail.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              We pride ourselves on reliability, punctuality, and customer satisfaction. From TV mounting and electrical
              work to air conditioning installation and smart home setup, we provide comprehensive solutions for all
              your installation needs.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">500+</div>
                <div className="text-slate-600 dark:text-slate-400 mt-2">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">100%</div>
                <div className="text-slate-600 dark:text-slate-400 mt-2">Customer Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

