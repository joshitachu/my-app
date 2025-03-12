"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import AgriTechBackgroundPaths from "./agri-tech-background-paths"
import Image from "next/image"

export default function AgriTechHero() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
      <AgriTechBackgroundPaths />

      {/* You could add a hero image here if desired */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/images/hero/hero-background.jpg"
          alt="Installation services background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 inline-block px-6 py-2 bg-blue-100 dark:bg-blue-900/40 rounded-full text-blue-800 dark:text-blue-200 font-medium text-sm"
          >
            Professional Installation Services
          </motion.div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tighter">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-400 dark:to-blue-300">
              Ertzan
            </span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400">
              Loonbedrijf
            </span>
          </h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-10 max-w-2xl mx-auto"
          >
            Expert installation services for your home and office - from TV mounting and electrical work to smart home
            setup and air conditioning.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg font-medium"
            >
              Our Services
              <span className="ml-2">→</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-indigo-500 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950/50 rounded-full px-8 py-6 text-lg font-medium"
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

