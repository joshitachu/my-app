"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tv, Satellite, Wind, Fan, Zap, Home } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: <Tv className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    title: "TV Mounting",
    description: "Professional TV mounting with clean cable management.",
    price: "€75/hour",
    link: "/services/1",
  },
  {
    icon: <Satellite className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    title: "Satellite Dish Installation",
    description: "Expert satellite dish installation and signal optimization.",
    price: "€100/hour",
    link: "/services/2",
  },
  {
    icon: <Wind className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    title: "Air Conditioning Installation",
    description: "Complete AC installation with electrical connections.",
    price: "€125/hour",
    link: "/services/3",
  },
  {
    icon: <Fan className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />,
    title: "Ceiling Fan Installation",
    description: "Secure ceiling fan mounting and wiring.",
    price: "€75/hour",
    link: "/services/4",
  },
  {
    icon: <Zap className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />,
    title: "Electrical Work",
    description: "Professional electrical installations and wiring.",
    price: "€60/hour",
    link: "/services/5",
  },
  {
    icon: <Home className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />,
    title: "Smart Home Installation",
    description: "Complete smart home setup and configuration.",
    price: "€90/hour",
    link: "/services/6",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Professional installation services for all your home and office needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={service.link}>
                <Card className="h-full border-t-4 border-t-blue-500 dark:border-t-blue-600 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-xl flex justify-between items-center">
                      <span>{service.title}</span>
                      <span className="text-sm font-normal text-blue-600 dark:text-blue-400">{service.price}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">{service.description}</p>
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

