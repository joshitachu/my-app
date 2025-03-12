import CheckoutForm from "@/components/checkout/checkout-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Checkout - Ertzan Loonbedrijf",
  description: "Complete your booking for professional installation services",
}

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
        <CheckoutForm />
      </div>
    </main>
  )
}

