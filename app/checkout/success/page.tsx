"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Home } from "lucide-react"

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [orderNumber, setOrderNumber] = useState("")

  useEffect(() => {
    const order = searchParams.get("order")
    if (!order) {
      router.push("/")
    } else {
      setOrderNumber(order)
    }
  }, [searchParams, router])

  if (!orderNumber) {
    return null
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-2xl mx-auto bg-white dark:bg-slate-950 rounded-lg shadow-sm p-8">
          <div className="flex flex-col items-center justify-center text-center mb-8">
            <div className="h-20 w-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
            <p className="text-slate-600 dark:text-slate-400 mb-2">Your order has been successfully placed.</p>
            <p className="font-medium">
              Order Number: <span className="font-bold">{orderNumber}</span>
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">What happens next?</h2>
            <ol className="space-y-4">
              <li className="flex">
                <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-3 font-medium">
                  1
                </span>
                <div>
                  <h3 className="font-medium">Confirmation Email</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    You will receive a confirmation email with your order details shortly.
                  </p>
                </div>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-3 font-medium">
                  2
                </span>
                <div>
                  <h3 className="font-medium">Scheduling</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Our team will contact you within 24 hours to schedule the installation.
                  </p>
                </div>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-3 font-medium">
                  3
                </span>
                <div>
                  <h3 className="font-medium">Installation</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    On the scheduled date, our technician will arrive to perform the installation.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="outline" className="w-full">
                <Home className="h-4 w-4 mr-2" />
                Return to Home
              </Button>
            </Link>
            <Link href="/services">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Browse More Services
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

