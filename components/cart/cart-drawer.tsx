"use client"

import { useState, useEffect } from "react"
import { ShoppingCart, X, Trash2, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import Image from "next/image"
import Link from "next/link"

export default function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart()

  const toggleCart = () => setIsOpen(!isOpen)

  // Close cart when clicking escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [])

  // Prevent scrolling when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <>
      {/* Cart Button */}
      <Button
        onClick={toggleCart}
        variant="outline"
        className="relative p-2 h-10 w-10 rounded-full z-[95]"
        aria-label="Open cart"
      >
        <ShoppingCart className="h-5 w-5" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </Button>

      {/* Cart Drawer */}
      <div
        className={`fixed inset-0 bg-black/50 z-[9999] transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleCart}
      >
        <div
          className={`fixed top-0 right-0 h-full bg-white dark:bg-slate-950 w-full max-w-md transform transition-transform duration-300 ease-in-out z-[10000] ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-bold flex items-center">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Your Cart
                {totalItems > 0 && (
                  <span className="ml-2 text-sm text-slate-600 dark:text-slate-400">({totalItems} items)</span>
                )}
              </h2>
              <button
                onClick={toggleCart}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-full mb-4">
                    <ShoppingCart className="h-10 w-10 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Looks like you haven't added any services to your cart yet.
                  </p>
                  <Button onClick={toggleCart}>Browse Services</Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex border-b pb-4">
                      <div className="relative h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{item.option.name}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 p-1"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center border rounded">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-2 py-1 text-slate-600 dark:text-slate-400"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="px-2 text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 text-slate-600 dark:text-slate-400"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <div className="font-medium">€{(item.price * item.quantity).toFixed(2)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t p-4">
                <div className="flex justify-between mb-4">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-medium">€{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-6">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Taxes and service fees calculated at checkout
                  </span>
                </div>
                <div className="space-y-2">
                  <Link href="/checkout">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Proceed to Checkout</Button>
                  </Link>
                  <Button variant="outline" className="w-full" onClick={clearCart}>
                    Clear Cart
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

