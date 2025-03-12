"use client"
import { Button } from "@/components/ui/button"
import { CheckCircle, Loader2 } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { CustomerFormValues } from "./customer-info-form"

interface OrderConfirmationProps {
  customerInfo: CustomerFormValues;
  orderNumber: string;
  isLoading: boolean;
  onComplete: () => void;
}

export default function OrderConfirmation({ 
  customerInfo, 
  orderNumber, 
  isLoading, 
  onComplete 
}: OrderConfirmationProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="h-12 w-12 text-blue-600 dark:text-blue-400 animate-spin mb-4" />
        <h3 className="text-xl font-semibold mb-2">Processing Your Order</h3>
        <p className="text-slate-600 dark:text-slate-400 text-center max-w-md">
          Please wait while we process your order. This may take a few moments.
        </p>
      </div>
    )
  }
  
  return (
    <div className="py-6">
      <div className="flex flex-col items-center justify-center mb-8">
        <CheckCircle className="h-16 w-16 text-green-600 dark:text-green-400 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Order Confirmed!</h2>
        <p className="text-slate-600 dark:text-slate-400 text-center max-w-md mb-4">
          Thank you for your order. We have received your booking and will contact you shortly to schedule the
          installation.
        </p>
        <div className="bg-slate-50 dark:bg-slate-900 px-4 py-2 rounded-md">
          <span className="text-sm text-slate-500 dark:text-slate-400">Order Number:</span>
          <span className="ml-2 font-semibold">{orderNumber}</span>
        </div>
      </div>
      
      <Separator className="my-6" />
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Customer Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Contact Details</h4>
            <p className="mt-1">
              {customerInfo.firstName} {customerInfo.lastName}
            </p>
            <p>{customerInfo.email}</p>
            <p>{customerInfo.phone}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Service Address</h4>
            <p className="mt-1">{customerInfo.address}</p>
            <p>
              {customerInfo.postalCode}, {customerInfo.city}
            </p>
            <p>{customerInfo.country}</p>
          </div>
        </div>
        {customerInfo.notes && (
          <div className="mt-4">
            <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Special Instructions</h4>
            <p className="mt-1">{customerInfo.notes}</p>
          </div>
        )}
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-8">
        <h3 className="font-medium mb-2">What happens next?</h3>
        <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li>You will receive a confirmation email with your order details.</li>
          <li>Our team will contact you within 24 hours to schedule the installation.</li>
          <li>On the scheduled date, our technician will arrive to perform the installation.</li>
          <li>After the installation is complete, you'll have an opportunity to inspect the work.</li>
        </ol>
      </div>
      
      <div className="flex justify-center">
        <Button onClick={onComplete} className="bg-blue-600 hover:bg-blue-700 px-8" size="lg">
          Complete
        </Button>
      </div>
    </div>
  )
}