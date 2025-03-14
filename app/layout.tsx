import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CartProvider } from "@/context/cart-context"
import { Toaster } from "@/components/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ertzan Loonbedrijf - Professional Installation Services",
  description: "Expert installation services for TV mounting, electrical work, air conditioning, and smart home setup",
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{__html: `
          /* Override the problematic styles */
          * {
            background: none !important;
            color: inherit !important;
          }
          body {
            background: white !important;
            color: black !important;
          }
        `}} />
      </head>
      <body className={`${inter.className} min-h-screen`}>
        <CartProvider>
          <Navbar />
          <div className="pt-16 md:pt-20 min-h-screen flex flex-col">
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}