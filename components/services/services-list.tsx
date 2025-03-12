"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tv, Satellite, Wind, Fan, Zap, Home } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import type { Service } from "@/lib/types"
import { useCart } from "@/context/cart-context"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import Link from "next/link"

// Map service titles to icons
const serviceIcons: Record<string, JSX.Element> = {
  "TV Mounting": <Tv className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
  "Satellite Dish Installation": <Satellite className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
  "Air Conditioning Installation": <Wind className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
  "Ceiling Fan Installation": <Fan className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
  "Electrical Work": <Zap className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
  "Smart Home Installation": <Home className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
}

export default function ServicesList() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const { addToCart } = useCart()

  useEffect(() => {
    // Fetch services from API or import them
    const fetchServices = async () => {
      try {
        // In a real app, this would be an API call
        // For now, we'll import them directly
        const { services } = await import("@/lib/services-data")
        setServices(services)
        setLoading(false)
      } catch (error) {
        console.error("Error loading services:", error)
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  const handleAddToCart = (service: Service) => {
    // Add the first option as default
    addToCart({
      id: `${service.id}-${service.options[0].id}`,
      serviceId: service.id,
      name: service.title,
      option: service.options[0],
      quantity: 1,
      price: service.options[0].price,
      image: service.image,
    })

    toast({
      title: "Added to cart",
      description: `${service.title} (${service.options[0].name})`,
      action: <ToastAction altText="View Cart">View Cart</ToastAction>,
    })
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-16 text-center">
        <p>Loading services...</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="grid grid-cols-1 gap-16">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12`}
          >
            <div className="w-full lg:w-1/2">
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="mb-6">
                {serviceIcons[service.title] || <Home className="h-12 w-12 text-blue-600 dark:text-blue-400" />}
              </div>

              <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">{service.title}</h2>

              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">{service.description}</p>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8 shadow-sm">
                <h3 className="font-semibold text-lg mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="h-5 w-5 rounded-full flex items-center justify-center mt-1 mr-3 bg-blue-100 dark:bg-blue-900">
                        <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white flex-1"
                  size="lg"
                  onClick={() => handleAddToCart(service)}
                >
                  Book Service
                </Button>
                <Link href={`/services/${service.id}`} className="flex-1">
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/50 w-full"
                    size="lg"
                  >
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

