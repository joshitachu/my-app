/* eslint-disable */
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronLeft, Check, Plus, Minus, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/context/cart-context"
import type { Service, ServiceOption } from "@/lib/types"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

export default function ServiceDetail({ service }: { service: Service }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedOption, setSelectedOption] = useState<ServiceOption>(service.options[0])
  const [relatedServices, setRelatedServices] = useState<Service[]>([])
  const { addToCart } = useCart()

  useEffect(() => {
    // Fetch related services
    const fetchRelatedServices = async () => {
      try {
        const { services } = await import("@/lib/services-data")
        const related = services.filter((s) => service.relatedServices.includes(s.id))
        setRelatedServices(related)
      } catch (error) {
        console.error("Error loading related services:", error)
      }
    }

    fetchRelatedServices()
  }, [service.relatedServices])

  const handleAddToCart = () => {
    addToCart({
      id: `${service.id}-${selectedOption.id}`,
      serviceId: service.id,
      name: service.title,
      option: selectedOption,
      quantity,
      price: selectedOption.price,
      image: service.image,
    })

    toast({
      title: "Added to cart",
      description: `${quantity} × ${service.title} (${selectedOption.name})`,
      action: <ToastAction altText="View Cart">View Cart</ToastAction>,
    })
  }

  const increaseQuantity = () => setQuantity((prev) => prev + 1)
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-20">
      {/* Breadcrumb */}
      <div className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-blue-600 dark:hover:text-blue-400">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Service Header */}
      <div className="bg-white dark:bg-slate-950 pt-8 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            href="/services"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 mb-6 hover:underline"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service Image */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Service Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  Professional Installation
                </Badge>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h1>

              <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">{service.description}</p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Service Options</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.options.map((option) => (
                    <div
                      key={option.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        selectedOption.id === option.id
                          ? "border-2 border-blue-600 dark:border-blue-400 bg-slate-50 dark:bg-slate-900"
                          : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                      }`}
                      onClick={() => setSelectedOption(option)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{option.name}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{option.description}</p>
                        </div>
                        {selectedOption.id === option.id && (
                          <div className="h-5 w-5 rounded-full flex items-center justify-center bg-blue-600 dark:bg-blue-500">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="mt-3 font-bold text-lg">€{option.price.toFixed(2)}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={decreaseQuantity}
                    className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-l-lg"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <div className="px-4 py-2 font-medium">{quantity}</div>
                  <button
                    onClick={increaseQuantity}
                    className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-r-lg"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white"
                  size="lg"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart - €{(selectedOption.price * quantity).toFixed(2)}
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                  Professional Installation
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />1 Year Warranty
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                  24/7 Support
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Service Details Tabs */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="bg-white dark:bg-slate-950 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">Service Details</h3>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Our {service.title} service is designed to provide professional installation with attention to detail.
                Our team of certified technicians ensures that your installation is done correctly and safely.
              </p>

              <h4>Key Benefits</h4>
              <ul>
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <h4>Our Approach</h4>
              <p>
                We begin with a thorough assessment of your space and requirements. Our team then plans the installation
                process to ensure minimal disruption to your home or office. We handle everything from setup to testing
                and provide comprehensive instructions on how to use your newly installed equipment.
              </p>

              <h4>Ongoing Support</h4>
              <p>
                Our commitment doesn't end with installation. We provide ongoing support to ensure your system continues
                to operate at peak efficiency. Our team is available to address any issues that may arise.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="specifications" className="bg-white dark:bg-slate-950 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Installation Requirements</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 mt-0.5 mr-3">
                      <div className="h-2 w-2 rounded-full bg-slate-600 dark:bg-slate-400" />
                    </div>
                    <span>Compatible with all standard home and office setups</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 mt-0.5 mr-3">
                      <div className="h-2 w-2 rounded-full bg-slate-600 dark:bg-slate-400" />
                    </div>
                    <span>Professional-grade tools and equipment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 mt-0.5 mr-3">
                      <div className="h-2 w-2 rounded-full bg-slate-600 dark:bg-slate-400" />
                    </div>
                    <span>Certified technicians with years of experience</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 mt-0.5 mr-3">
                      <div className="h-2 w-2 rounded-full bg-slate-600 dark:bg-slate-400" />
                    </div>
                    <span>Adherence to local building codes and regulations</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Service Includes</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 mt-0.5 mr-3">
                      <div className="h-2 w-2 rounded-full bg-slate-600 dark:bg-slate-400" />
                    </div>
                    <span>Initial consultation and assessment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 mt-0.5 mr-3">
                      <div className="h-2 w-2 rounded-full bg-slate-600 dark:bg-slate-400" />
                    </div>
                    <span>Professional installation by certified technicians</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 mt-0.5 mr-3">
                      <div className="h-2 w-2 rounded-full bg-slate-600 dark:bg-slate-400" />
                    </div>
                    <span>Testing and quality assurance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 mt-0.5 mr-3">
                      <div className="h-2 w-2 rounded-full bg-slate-600 dark:bg-slate-400" />
                    </div>
                    <span>Post-installation support and warranty</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="bg-white dark:bg-slate-950 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How long does installation typically take?</AccordionTrigger>
                <AccordionContent>
                  Installation time varies depending on the complexity of the job. For most standard installations, we
                  can complete the process within 1-3 hours. More complex installations may require additional time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Do you offer a warranty on your installation services?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer a 1-year warranty on all our installation services. This covers any issues that may
                  arise due to the installation process. If you experience any problems, our team will return to fix the
                  issue at no additional cost.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Do I need to provide any tools or equipment?</AccordionTrigger>
                <AccordionContent>
                  No, our technicians come fully equipped with all the necessary tools and equipment to complete the
                  installation. You only need to ensure that the area is accessible and clear of any obstructions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Can you install equipment that I've purchased elsewhere?</AccordionTrigger>
                <AccordionContent>
                  Yes, we can install equipment that you've purchased from other retailers. Our technicians are trained
                  to work with a wide variety of brands and models. Please ensure that you have all the necessary
                  components and manuals available.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Do you offer emergency installation services?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer emergency installation services for an additional fee. If you need urgent installation,
                  please contact our customer service team, and we'll do our best to accommodate your request as soon as
                  possible.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Services */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <h2 className="text-2xl font-bold mb-8">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((relatedService) => (
            <Link key={relatedService.id} href={`/services/${relatedService.id}`} className="group">
              <div className="bg-white dark:bg-slate-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={relatedService.image || "/placeholder.svg"}
                    alt={relatedService.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {relatedService.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                    {relatedService.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

