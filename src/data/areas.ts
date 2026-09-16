import type { ServiceArea } from '../types'

export const serviceAreasData: ServiceArea[] = [
  {
    id: 'visakhapatnam',
    title: 'Visakhapatnam',
    subtitle: 'Local Express Shifting',
    badge: 'Same-Day City Service',
    description: 'Rapid door-to-door local moving across all Visakhapatnam residential and commercial neighborhoods with swift transit and experienced crews.',
    coverage: [
      'Same-Day Household & Office Moving',
      'Apartment & Villa Safe Navigation',
      'Medium & Large Trucks for Narrow or Broad Streets',
      'Full Packing, Loading & Unloading Crews'
    ]
  },
  {
    id: 'andhra-pradesh',
    title: 'Andhra Pradesh',
    subtitle: 'Regional Shifting & Transport',
    badge: 'Direct State Corridors',
    description: 'Regular scheduled routes connecting Visakhapatnam to major commercial and residential centers across Andhra Pradesh.',
    coverage: [
      'Vijayawada, Guntur & Amaravati Corridor',
      'Rajahmundry, Kakinada & Godavari Region',
      'Tirupati, Nellore & Rayalaseema Routes',
      'Point-to-Point Dedicated Fleet Dispatch'
    ]
  },
  {
    id: 'pan-india',
    title: 'All India',
    subtitle: 'Interstate Long-Distance Relocation',
    badge: 'Nationwide Network',
    description: 'Interstate household relocation and commercial freight haulage to every major metro and state across India with all-weather carriers.',
    coverage: [
      'Hyderabad & Telangana Daily Routes',
      'Bangalore & Karnataka Tech Corridors',
      'Chennai & Tamil Nadu Highway Transport',
      'Mumbai, Pune, Delhi, Kolkata & Beyond'
    ]
  }
]
