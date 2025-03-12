"use client"

import { useCart } from "@/context/cart-context"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { CalendarDays, Clock } from "lucide-react"

export default function OrderSummary() {
  const { items, totalPrice } = useCart()

  // Calculate tax (21% VAT)
  const taxRate = 0.21
  const taxAmount = totalPrice * taxRate
  const totalWithTax = totalPrice + taxAmount

  return (
    <div className="bg-white dark:bg-slate-950 rounded-lg shadow-sm p-6 sticky top-24">
      <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

      {items.length === 0 ? (
        <p className="text-slate-500 dark:text-slate-400 text-center py-6">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {items.map((item) => (
              <div key={item.id} className="flex items-start">
                <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <div className="ml-4 flex-1">
                  <h4 className="font-medium text-sm">{item.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.option.name}</p>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-slate-500 dark:text-slate-400">Qty: {item.quantity}</span>
                    <span className="font-medium text-sm">€{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Separator className="my-4" />

          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Subtotal</span>
              <span>€{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Tax (21% VAT)</span>
              <span>€{taxAmount.toFixed(2)}</span>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>€{totalWithTax.toFixed(2)}</span>
          </div>

          <div className="mt-6 bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
            <h3 className="font-medium mb-2 flex items-center">
              <CalendarDays className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
              Scheduling
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              After your order is confirmed, our team will contact you to schedule the installation at a convenient
              time.
            </p>

            <h3 className="font-medium mb-2 flex items-center">
              <Clock className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
              Service Duration
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The estimated duration for your services is based on standard installations. Complex setups may require
              additional time.
            </p>
          </div>
        </>
      )}
    </div>
  )
}

