import ServicesHeader from "@/components/services/services-header"
import ServicesList from "@/components/services/services-list"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <ServicesHeader />
      <ServicesList />
    </main>
  )
}

