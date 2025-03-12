"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/context/cart-context"
import OrderSummary from "./order-summary"
import CustomerInfoForm, { CustomerFormValues } from "./customer-info-form"
import PaymentForm from "./payment-form"
import OrderConfirmation from "./order-confirmation"
import { Check } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

// Define payment information type
interface PaymentInfo {
  cardName: string
  cardNumber: string
  expiryDate: string
  cvv: string
}

const steps = [
  { id: "customer-info", name: "Customer Information" },
  { id: "payment", name: "Payment Details" },
  { id: "confirmation", name: "Confirmation" },
]

export default function CheckoutForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [customerInfo, setCustomerInfo] = useState<CustomerFormValues>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "Netherlands",
    notes: "", // This will now be compatible with the CustomerFormValues type
  })
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })
  const [orderNumber, setOrderNumber] = useState("")
  const { items, totalPrice, clearCart } = useCart()
  const router = useRouter()

  // Redirect to home if cart is empty
  useEffect(() => {
    if (items.length === 0 && currentStep === 0) {
      router.push("/")
      toast({
        title: "Your cart is empty",
        description: "Please add services to your cart before proceeding to checkout.",
        variant: "destructive",
      })
    }
  }, [items.length, currentStep, router])

  const handleCustomerInfoSubmit = (data: CustomerFormValues) => {
    setCustomerInfo(data)
    nextStep()
  }

  const handlePaymentInfoSubmit = (data: PaymentInfo) => {
    setPaymentInfo(data)
    nextStep()
    processOrder()
  }

  const processOrder = async () => {
    setIsLoading(true)

    // Simulate API call to process order
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Generate random order number
    const randomOrderNumber = `ORD-${Math.floor(Math.random() * 10000)}-${new Date().getFullYear()}`
    setOrderNumber(randomOrderNumber)

    setIsLoading(false)
  }

  const completeOrder = () => {
    clearCart()
    router.push(`/checkout/success?order=${orderNumber}`)
  }

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Checkout Steps */}
      <div className="lg:col-span-2">
        <div className="bg-white dark:bg-slate-950 rounded-lg shadow-sm p-6 mb-6">
          <nav aria-label="Progress">
            <ol className="flex items-center">
              {steps.map((step, index) => (
                <li key={step.id} className={`relative flex-1 ${index !== steps.length - 1 ? "pr-8" : ""}`}>
                  <div className="flex items-center">
                    <div
                      className={`relative flex h-8 w-8 items-center justify-center rounded-full ${
                        currentStep >= index
                          ? "bg-blue-600 text-white"
                          : "bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {currentStep > index ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        <span className="text-sm font-medium">{index + 1}</span>
                      )}
                    </div>
                    {index !== steps.length - 1 && (
                      <div
                        className={`h-0.5 w-full ${
                          currentStep > index ? "bg-blue-600" : "bg-slate-200 dark:bg-slate-700"
                        }`}
                      />
                    )}
                  </div>
                  <div className="mt-2">
                    <span className="text-sm font-medium">{step.name}</span>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        <div className="bg-white dark:bg-slate-950 rounded-lg shadow-sm p-6">
          {currentStep === 0 && <CustomerInfoForm initialData={customerInfo} onSubmit={handleCustomerInfoSubmit} />}

          {currentStep === 1 && (
            <PaymentForm
              initialData={paymentInfo}
              onSubmit={handlePaymentInfoSubmit}
              onBack={prevStep}
              isLoading={isLoading}
            />
          )}

          {currentStep === 2 && (
            <OrderConfirmation
              customerInfo={customerInfo}
              orderNumber={orderNumber}
              isLoading={isLoading}
              onComplete={completeOrder}
            />
          )}
        </div>
      </div>

      {/* Order Summary */}
      <div className="lg:col-span-1">
        <OrderSummary />
      </div>
    </div>
  )
}