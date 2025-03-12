import type { Service } from "./types"

export const services: Service[] = [
  {
    id: 1,
    title: "TV Mounting",
    description:
      "Professional TV mounting services to securely attach your television to the wall with clean cable management.",
    category: "infrastructure",
    features: [
      "Professionally mounting TVs on the wall",
      "Neatly concealing cables",
      "Bracket installation included",
      "Compatible with all TV sizes and types",
    ],
    image: "/images/services/tv-mounting.jpg",
    options: [
      {
        id: 1,
        name: "Standard Mounting",
        description: "Basic TV mounting on drywall or wood studs",
        price: 75,
      },
      {
        id: 2,
        name: "Premium Mounting",
        description: "TV mounting with complete cable concealment",
        price: 125,
      },
      {
        id: 3,
        name: "Multi-TV Package",
        description: "Mounting of 2-3 TVs with cable management",
        price: 199,
      },
    ],
    relatedServices: [2, 3, 6],
  },
  {
    id: 2,
    title: "Satellite Dish Installation",
    description:
      "Complete satellite dish installation services including positioning for optimal signal reception and connection to your devices.",
    category: "infrastructure",
    features: [
      "Installing and adjusting satellite receivers",
      "Wiring and connecting to TV/network",
      "Signal optimization",
      "Weather-resistant installation",
    ],
    image: "/images/services/satellite-dish.jpg",
    options: [
      {
        id: 1,
        name: "Basic Installation",
        description: "Standard satellite dish mounting and basic setup",
        price: 100,
      },
      {
        id: 2,
        name: "Premium Installation",
        description: "Advanced installation with multi-room wiring",
        price: 175,
      },
      {
        id: 3,
        name: "Dish Relocation",
        description: "Moving existing satellite dish to new location",
        price: 125,
      },
    ],
    relatedServices: [1, 5, 6],
  },
  {
    id: 3,
    title: "Air Conditioning Installation",
    description:
      "Professional installation of various air conditioning units with proper electrical connections and optimal positioning.",
    category: "infrastructure",
    features: [
      "Installing split-unit and mobile air conditioners",
      "Setting up electrical connections and piping",
      "Pressure testing and system charging",
      "Performance testing and optimization",
    ],
    image: "/images/services/air-conditioning.jpg",
    options: [
      {
        id: 1,
        name: "Window Unit Installation",
        description: "Installation of window AC units",
        price: 125,
      },
      {
        id: 2,
        name: "Split System Installation",
        description: "Complete split system AC installation",
        price: 350,
      },
      {
        id: 3,
        name: "Multi-Zone System",
        description: "Installation of multi-zone AC systems",
        price: 599,
      },
    ],
    relatedServices: [4, 5, 6],
  },
  {
    id: 4,
    title: "Ceiling Fan Installation",
    description:
      "Expert ceiling fan installation with secure mounting and proper electrical wiring for safe operation.",
    category: "infrastructure",
    features: [
      "Mounting and wiring ceiling fans",
      "Ensuring safe and secure ceiling attachment",
      "Remote control setup",
      "Balance adjustment for quiet operation",
    ],
    image: "/images/services/ceiling-fan.jpg",
    options: [
      {
        id: 1,
        name: "Standard Installation",
        description: "Basic ceiling fan installation",
        price: 75,
      },
      {
        id: 2,
        name: "Replacement Service",
        description: "Removal of old fan and installation of new one",
        price: 95,
      },
      {
        id: 3,
        name: "High Ceiling Installation",
        description: "Installation for ceilings higher than 12 feet",
        price: 125,
      },
    ],
    relatedServices: [3, 5, 6],
  },
  {
    id: 5,
    title: "Electrical Work",
    description:
      "Comprehensive electrical services including installation of outlets, switches, lighting fixtures, and wiring.",
    category: "infrastructure",
    features: [
      "Installing outlets, switches, and lighting",
      "Laying and replacing electrical wiring",
      "Circuit testing and safety checks",
      "Electrical panel upgrades",
    ],
    image: "/images/services/electrical-work.jpg",
    options: [
      {
        id: 1,
        name: "Basic Electrical Work",
        description: "Simple outlet or switch installation",
        price: 60,
      },
      {
        id: 2,
        name: "Lighting Installation",
        description: "Installation of light fixtures",
        price: 85,
      },
      {
        id: 3,
        name: "Wiring Project",
        description: "Comprehensive wiring for rooms or additions",
        price: 150,
      },
    ],
    relatedServices: [1, 3, 4],
  },
  {
    id: 6,
    title: "Smart Home Installation",
    description:
      "Complete smart home setup services including device installation, network configuration, and app setup.",
    category: "infrastructure",
    features: [
      "Setting up and configuring smart thermostats, lighting, and security cameras",
      "Connecting devices to the Wi-Fi network and configuring apps",
      "Voice assistant integration",
      "Automation setup and scheduling",
    ],
    image: "/images/services/smart-home.jpg",
    options: [
      {
        id: 1,
        name: "Basic Smart Device Setup",
        description: "Installation of 1-3 smart home devices",
        price: 90,
      },
      {
        id: 2,
        name: "Whole Home Package",
        description: "Complete smart home setup with multiple devices",
        price: 250,
      },
      {
        id: 3,
        name: "Security System Integration",
        description: "Smart security camera and sensor installation",
        price: 199,
      },
    ],
    relatedServices: [1, 2, 5],
  },
]

