import type { ServiceItem } from '../types'

export const servicesData: ServiceItem[] = [
  {
    id: 'household-shifting',
    slug: 'household-shifting',
    title: 'Household Shifting',
    tagline: 'Safe & Hassle-Free Home Relocation',
    shortDescription: 'Complete residential relocation with custom multi-layer packing for furniture, appliances, kitchenware, and personal valuables.',
    fullDescription: 'At Sree Sampath Packers & Movers, we understand that your household goods are memories, investments, and daily comforts. Our dedicated home shifting team handles everything from disassembling heavy beds and wardrobes to packing delicate crockery with multi-layer bubble wrap, ensuring zero damage from pickup to final room arrangement.',
    image: '/service/service-01.webp',
    inclusions: [
      { title: 'Furniture Disassembly & Assembly', desc: 'Expert dismantling of cots, dining tables, sofa sets, and reassembly at your new home.' },
      { title: 'Appliance Cushioning', desc: 'Custom padding and moisture-proof stretch wrap for refrigerators, washing machines, and smart TVs.' },
      { title: 'Kitchen & Crockery Care', desc: 'Individual packing of breakables, glassware, and porcelain using high-density foam and corrugated sheets.' },
      { title: 'Systematic Box Labeling', desc: 'Room-by-room labeled boxes making unpacking effortless and organized.' },
      { title: 'Floor & Wall Protection', desc: 'Safe movement through tight staircases, elevators, and doorways without scuffs or scratches.' }
    ],
    process: [
      { step: '01', title: 'Survey & Custom Quote', desc: 'Pre-move inspection in person or via WhatsApp to estimate volume and assign the perfect vehicle.' },
      { step: '02', title: 'Quality Packing', desc: 'Uniformed staff arrive on schedule with bubble wrap, corrugated sheets, stretch film, and strong cartons.' },
      { step: '03', title: 'Calculated Loading', desc: 'Heaviest items anchored at the base with soft goods on top to eliminate movement during transit.' },
      { step: '04', title: 'Direct Transportation', desc: 'Safe transit via dedicated Sree Sampath carrier with experienced highway drivers.' },
      { step: '05', title: 'Unloading & Placement', desc: 'Careful unloading and placement of furniture directly into your preferred rooms.' }
    ],
    suitableVehicleId: 'large',
    faqs: [
      { q: 'How early should I book household shifting?', a: 'We recommend booking 2 to 4 days in advance, though same-day or next-day emergency moves in Visakhapatnam can also be accommodated.' },
      { q: 'Do you pack electronics and fragile crockery?', a: 'Yes. Electronics and fragile items receive 3-to-4 layer protective packing including bubble wrap, thermocol corners, and heavy corrugated cartons.' },
      { q: 'Are there hidden charges in the quote?', a: 'No. Sree Sampath provides transparent upfront quotes covering labor, materials, vehicle transportation, and unloading.' }
    ]
  },
  {
    id: 'office-relocation',
    slug: 'office-relocation',
    title: 'Office Relocation',
    tagline: 'Smooth Transitions for Your Business',
    shortDescription: 'Minimal-downtime commercial and corporate moves for workstations, servers, IT hardware, files, and executive suites.',
    fullDescription: 'Relocating a workplace demands strict punctuality, asset security, and organized re-installation so your team gets back to work without losing billable hours. Sree Sampath Packers & Movers executes seamless office relocations across Visakhapatnam and pan-India with weekend and after-hours execution available.',
    image: '/service/service-02.webp',
    inclusions: [
      { title: 'IT & Server Protection', desc: 'Anti-static packing for desktop towers, dual-monitor setups, network racks, and delicate servers.' },
      { title: 'Modular Furniture De-rigging', desc: 'Systematic breakdown of cubicles, conference tables, executive desks, and ergonomic chairs.' },
      { title: 'Confidential Records & Files', desc: 'Numbered and sealed archive crates ensuring zero loss of company documents.' },
      { title: 'Weekend & Overnight Shifting', desc: 'Scheduled execution outside business hours to prevent interruption to regular operations.' },
      { title: 'Asset Tagging & Inventory', desc: 'Detailed item tracking so every department manager receives their exact equipment.' }
    ],
    process: [
      { step: '01', title: 'Relocation Blueprint', desc: 'Reviewing floor plans at both pickup and destination to schedule departmental migration.' },
      { step: '02', title: 'Color-Coded Packing', desc: 'Departmental color coding and individual workstation bags for cables, docks, and keyboards.' },
      { step: '03', title: 'Secured Loading', desc: 'Heavy file cabinets and IT crates loaded in shock-absorbent configurations.' },
      { step: '04', title: 'Timely Transit', desc: 'Direct transport under supervision with continuous driver coordination.' },
      { step: '05', title: 'Desk-by-Desk Reassembly', desc: 'Prompt reassembly and desk placement matching your destination floor plan.' }
    ],
    processNote: 'Tailored for tech startups, legal firms, branches, and corporate offices.',
    suitableVehicleId: 'large',
    faqs: [
      { q: 'Can you shift our office over the weekend?', a: 'Yes, we frequently carry out corporate shifts on Saturday night and Sunday so your office is fully operational by Monday morning.' },
      { q: 'How do you handle computers and server racks?', a: 'All computing hardware is wrapped with anti-static bubble wrap, placed in padded IT crates, and transported with extra cushioning.' }
    ]
  },
  {
    id: 'packing-unpacking',
    slug: 'packing-unpacking',
    title: 'Packing & Unpacking',
    tagline: 'Professional Packing for Complete Safety',
    shortDescription: 'Industrial-grade packaging using 5-ply corrugated cartons, heavy-duty bubble wrap, stretch film, and edge guards.',
    fullDescription: 'The difference between a safe move and damaged goods is the quality of packing. Our skilled packers are trained in certified multi-layer wrapping techniques. We bring all essential materials—heavy-duty tapes, stretch wrap, bubble rolls, thermocol, and specialized wardrobe boxes.',
    image: '/service/service-03.webp',
    inclusions: [
      { title: '5-Layer Bubble Cushioning', desc: 'High-density air bubbles that shield fragile glass, television screens, and mirrors.' },
      { title: 'Moisture-Resistant Stretch Film', desc: 'Tightly binds upholstery, couches, and mattresses preventing dust, rain, and stain ingress.' },
      { title: 'Custom Wooden Crating', desc: 'Available for premium artwork, marble tops, antique sculptures, and chandeliers.' },
      { title: 'Heavy Duty 5-Ply Cartons', desc: 'Crush-resistant boxes designed specifically for heavy books, kitchenware, and tools.' },
      { title: 'Unpacking & Debris Removal', desc: 'Complete unpacking at your destination and removal of all used packing material.' }
    ],
    process: [
      { step: '01', title: 'Material Preparation', desc: 'Bringing factory-fresh packaging rolls, boxes, sealing tapes, and cushioning mats.' },
      { step: '02', title: 'Sorting & Segregation', desc: 'Separating fragile chinaware, electronics, clothing, and bulky furniture.' },
      { step: '03', title: 'Multi-Tier Wrapping', desc: 'Precision wrapping with corner guards, protective film, and security tape.' },
      { step: '04', title: 'Clear Box Indexing', desc: 'Every carton labeled with room category and fragility indicator.' },
      { step: '05', title: 'Unpacking Assistance', desc: 'Unpacking of major items at destination so you can settle in immediately.' }
    ],
    suitableVehicleId: 'medium',
    faqs: [
      { q: 'Do you provide the packing materials or do I need to buy them?', a: 'We supply 100% of the materials including boxes, tapes, bubble rolls, stretch wrap, and padding. You do not need to buy anything.' },
      { q: 'Can I hire you only for packing services?', a: 'Yes! We offer standalone packing services if you already have transport arrangements, or standalone unpacking services.' }
    ]
  },
  {
    id: 'local-shifting',
    slug: 'local-shifting',
    title: 'Local Shifting',
    tagline: 'Reliable Moving Within Visakhapatnam',
    shortDescription: 'Rapid, same-day moving services across all areas of Visakhapatnam—from MVP Colony and Gajuwaka to Madhurawada and Pendurthi.',
    fullDescription: 'Moving across town within the City of Destiny? Sree Sampath Packers & Movers is your neighborhood specialist. With local drivers who know every street, flyover, and colony in Visakhapatnam, we guarantee fast, punctual, and safe same-day relocation at competitive local rates.',
    image: '/service/service-04.webp',
    inclusions: [
      { title: 'Same-Day Shifting Guarantee', desc: 'Pack in the morning and settle comfortably into your new home before sunset.' },
      { title: 'Complete Local Coverage', desc: 'Active across MVP Colony, Seethammadhara, Gajuwaka, Madhurawada, Rushikonda, Kurmannapalem & surrounding areas.' },
      { title: 'Apartment Lift & Staircase Handling', desc: 'Trained to navigate high-rise apartment elevators and narrow multi-floor stairwells safely.' },
      { title: 'Flexible Sized Trucks', desc: 'Medium and large vehicles suited for both compact residential lanes and broad avenues.' },
      { title: 'Direct Team Supervision', desc: 'Dedicated supervisor on site to coordinate smooth transit from start to finish.' }
    ],
    process: [
      { step: '01', title: 'Quick Local Quote', desc: 'Direct WhatsApp or phone estimate with immediate date reservation.' },
      { step: '02', title: 'Morning Arrival', desc: 'Our team arrives early with our vehicle and complete packing supplies.' },
      { step: '03', title: 'Fast & Secure Packing', desc: 'Speedy yet careful wrapping of furniture and appliances.' },
      { step: '04', title: 'Swift Transit', desc: 'Direct city transit avoiding peak traffic bottlenecks.' },
      { step: '05', title: 'Unloading by Evening', desc: 'Safe delivery and placement into your new Visakhapatnam residence.' }
    ],
    suitableVehicleId: 'medium',
    faqs: [
      { q: 'How long does a local move take in Visakhapatnam?', a: 'Most 1 BHK or 2 BHK local moves take between 4 to 7 hours from initial packing to final unloading.' },
      { q: 'Do you charge extra for upper floors without lifts?', a: 'We have modest, transparent labor charges for stairs when no elevator is available, clearly communicated in your initial quote.' }
    ]
  },
  {
    id: 'domestic-relocation',
    slug: 'domestic-relocation',
    title: 'Domestic Relocation',
    tagline: 'Your Belongings, To Any City in India',
    shortDescription: 'Interstate and nationwide household relocation from Visakhapatnam to Hyderabad, Bangalore, Chennai, Mumbai, Delhi, and beyond.',
    fullDescription: 'Interstate relocation over hundreds or thousands of kilometers requires heavy-duty transport vehicles, robust packing that withstands highway vibrations, and experienced long-haul drivers. Sree Sampath Packers & Movers operates dedicated routes connecting Visakhapatnam to every major metropolitan hub and tier-2 city across India.',
    image: '/service/service-05.webp',
    inclusions: [
      { title: 'Nationwide Route Network', desc: 'Regular transfers to Telangana, Karnataka, Tamil Nadu, Maharashtra, Odisha, West Bengal, and North India.' },
      { title: 'Dedicated or Shared Fleet Options', desc: 'Choose a dedicated full-truck carrier for maximum speed or shared container for budget efficiency.' },
      { title: 'All-Weather Highway Protection', desc: 'Heavy waterproof tarpaulins and enclosed containers to protect against rain, dust, and transit heat.' },
      { title: 'Interstate Regulatory Compliance', desc: 'Complete GST e-way bills, documentation, and toll clearance handled smoothly by our team.' },
      { title: 'Continuous Status Updates', desc: 'Regular communication on vehicle location and realistic delivery arrival schedules.' }
    ],
    process: [
      { step: '01', title: 'Pre-Move Highway Planning', desc: 'Assessing volume, travel distance, and preparing required toll and transit paperwork.' },
      { step: '02', title: 'Export-Grade Packaging', desc: 'Heavy 5-layer packing engineered specifically for interstate road conditions.' },
      { step: '03', title: 'Secure Highway Loading', desc: 'Strategic vehicle weight distribution to ensure stable highway maneuvering.' },
      { step: '04', title: 'Interstate Transit', desc: 'Direct haulage by seasoned two-driver highway crews for safe continuous progress.' },
      { step: '05', title: 'Doorstep Delivery & Check', desc: 'Unloading at destination, item tally check against inventory, and placement.' }
    ],
    suitableVehicleId: 'extra-large',
    faqs: [
      { q: 'How many days does an interstate move take?', a: 'Transit to Hyderabad or Chennai typically takes 2-3 days; Bangalore 3-4 days; Mumbai or Pune 4-5 days; and Delhi/North India 5-7 days.' },
      { q: 'Do you provide transit insurance?', a: 'Yes, comprehensive transit insurance options are available for long-distance domestic relocations for complete peace of mind.' }
    ]
  },
  {
    id: 'commercial-goods-transportation',
    slug: 'commercial-goods-transportation',
    title: 'Commercial Goods Transportation',
    tagline: 'Safe & Timely Delivery for Your Business',
    shortDescription: 'B2B logistics, palletized cargo, manufacturing parts, retail distribution, and bulk commercial freight transport.',
    fullDescription: 'Businesses count on predictable delivery schedules and uncompromised cargo integrity. Sree Sampath Packers & Movers partners with traders, manufacturers, wholesalers, and retail distributors in Andhra Pradesh to provide dependable scheduled and on-demand goods transport with our robust fleet.',
    image: '/service/service-06.webp',
    inclusions: [
      { title: 'Heavy Payload Capacity', desc: 'Vehicles capable of carrying heavy industrial consignments, pallets, raw materials, and machinery.' },
      { title: 'Commercial Invoicing & GST Bills', desc: 'Compliant business paperwork, proper e-way bills, and verified consignment notes (LRs).' },
      { title: 'Point-to-Point Full Truckload (FTL)', desc: 'Dedicated vehicles direct from your warehouse or factory to your client destination.' },
      { title: 'Forklift & Crane Friendly', desc: 'Spacious flat and drop-side cargo beds facilitating easy mechanical loading.' },
      { title: 'Contract & Spot Moving', desc: 'Available for one-off urgent consignments or recurring weekly/monthly logistics routes.' }
    ],
    process: [
      { step: '01', title: 'Consignment Specification', desc: 'Documenting cargo weight, volume, dimensions, and schedule requirements.' },
      { step: '02', title: 'Vehicle Dispatch', desc: 'Positioning the exact vehicle size needed at your warehouse or pickup dock.' },
      { step: '03', title: 'Fast & Secure Lashings', desc: 'Heavy-duty cargo straps, wooden dunnage, and weather tarpaulins applied.' },
      { step: '04', title: 'Direct Highway Transit', desc: 'Direct point-to-point delivery without depot detours or unnecessary handling.' },
      { step: '05', title: 'Proof of Delivery (POD)', desc: 'Physical and digital sign-off from your receiving party for immediate confirmation.' }
    ],
    suitableVehicleId: 'extra-large',
    faqs: [
      { q: 'Do you issue formal GST invoices and LRs (Lorry Receipts)?', a: 'Yes, we provide official GST-compliant tax invoices, e-way bills, and consignment notes for all commercial shipments.' },
      { q: 'Can you transport heavy equipment or machine tools?', a: 'Yes, our heavy cargo carriers are equipped to handle industrial machinery, components, and palletized commercial goods.' }
    ]
  }
]
