export interface ServiceOption {
  id: number
  name: string
  description: string
  price: number
}

export interface Service {
  id: number
  title: string
  description: string
  category: "infrastructure" | "agriculture" | "combined"
  features: string[]
  image: string
  options: ServiceOption[]
  relatedServices: number[]
}

export interface CartItem {
  id: string
  serviceId: number
  name: string
  option: ServiceOption
  quantity: number
  price: number
  image: string
}

