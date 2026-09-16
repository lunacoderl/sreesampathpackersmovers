export interface Vehicle {
  id: string
  name: string
  tagline: string
  badge: string
  image: string
  capacity: string
  idealFor: string[]
  highlights: string[]
  suitableForServices: string[]
}

export interface ServiceItem {
  id: string
  slug: string
  title: string
  tagline: string
  shortDescription: string
  fullDescription: string
  image: string
  inclusions: { title: string; desc: string }[]
  process: { step: string; title: string; desc: string }[]
  processNote?: string
  suitableVehicleId: string
  faqs: { q: string; a: string }[]
}

export interface TestimonialItem {
  id: string
  name: string
  location: string
  rating: number
  review: string
  image: string
  highlight: string
}

export interface GalleryItem {
  id: string
  src: string
  title: string
  category: 'all' | 'vehicles' | 'packing' | 'loading' | 'household' | 'commercial'
}

export interface FAQItem {
  q: string
  a: string
  category?: string
}

export interface ServiceArea {
  id: string
  title: string
  subtitle: string
  coverage: string[]
  badge: string
  description: string
}
