import type { Vehicle } from '../types'

export const vehicleFleet: Vehicle[] = [
  {
    id: 'medium',
    name: 'Medium Transport Vehicle',
    tagline: 'Best for compact moves & same-day city shifting',
    badge: 'Fast & Flexible City Moves',
    image: '/vehicals/572861cd-70a7-4637-ac91-c9aea845628a.jpg',
    capacity: '1 BHK / Bachelor Move / Compact Load',
    idealFor: [
      'Small household shifting & 1 BHK apartments',
      'Local city transportation across Visakhapatnam',
      'Limited-volume personal belongings & student moves',
      'Quick transit with easy access to narrow lanes'
    ],
    highlights: [
      'Weatherproof heavy tarpaulin tie-down protection',
      'Swift loading by experienced 2-3 member crew',
      'Fuel-efficient and rapid urban transit',
      'Budget-friendly price point for compact luggage'
    ],
    suitableForServices: ['local-shifting', 'household-shifting', 'packing-unpacking']
  },
  {
    id: 'large',
    name: 'Large Transport Carrier',
    tagline: 'Sree Sampath Branded Fleet for complete home & office moves',
    badge: 'Most Popular for Households',
    image: '/vehicals/a55b3cfd-5a51-4297-92fa-ab592a3d110b.jpg',
    capacity: '2 - 3 BHK Complete Household / Mid-size Office',
    idealFor: [
      'Full household shifting (furniture, refrigerators, cots, mattresses)',
      'Office relocation & workstation setups',
      'Heavy home appliances & delicate glass crockery boxes',
      'Direct inter-city and regional moves within Andhra Pradesh'
    ],
    highlights: [
      'Official Sree Sampath high-deck carrier with extra-long body',
      'Reinforced side railings with safety tie-down points',
      'Spacious cargo bed for stackable corrugated boxes',
      'Dedicated driver and 4-6 specialized packing & loading staff'
    ],
    suitableForServices: ['household-shifting', 'office-relocation', 'local-shifting', 'domestic-relocation']
  },
  {
    id: 'extra-large',
    name: 'Extra Large Heavy Cargo Carrier',
    tagline: 'For heavy, oversized loads & nationwide long-distance relocation',
    badge: 'Heavy Duty & Long Distance',
    image: '/vehicals/f9e3afa1-a419-4b63-97dd-a15161aae721.jpg',
    capacity: '3+ BHK Luxury Villas / Corporate / Heavy Commercial Freight',
    idealFor: [
      'Large luxury villa & multi-story household relocations',
      'Commercial goods, palletized cargo & industrial consignments',
      'Bulk transportation from Visakhapatnam to any city in India',
      'Oversized machinery, retail stock & corporate inventory'
    ],
    highlights: [
      'All-weather multi-tier heavy duty water-resistant enclosure',
      'High ground clearance and heavy payload suspension for highway transit',
      'GPS tracking & direct transit coordination across state borders',
      'Engineered for maximum stability on long-distance interstate highways'
    ],
    suitableForServices: ['domestic-relocation', 'commercial-goods-transportation', 'household-shifting']
  }
]
