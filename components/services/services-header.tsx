"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function ServicesHeader() {
  return (
    <div className="relative bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-700 dark:to-blue-700">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
        <Link href="/" className="inline-flex items-center text-white mb-8 hover:underline transition-all">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Agricultural Technology Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Comprehensive solutions that bridge traditional farming with cutting-edge technology, designed to increase
            productivity and sustainability.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

