import ServiceDetail from "@/components/services/service-detail"
import { services } from "@/lib/services-data"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id.toString(),
  }))
}

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = services.find((s) => s.id.toString() === params.id)

  if (!service) {
    notFound()
  }

  return <ServiceDetail service={service} />
}

