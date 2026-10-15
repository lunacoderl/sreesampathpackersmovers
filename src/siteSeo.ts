export interface SeoRoute {
  path: string
  title: string
  description: string
  h1: string
  priority: number
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
}

export const siteSeo = {
  baseUrl: 'https://www.sreesampathpackersmovers.online',
  businessName: 'Sree Sampath Packers & Movers',
  legalName: 'Sree Sampath Packers & Movers Visakhapatnam',
  telephone: '+91 98662 66199',
  telephoneAlt: '+91 94945 43838',
  email: 'info@sreesampathpackersmovers.online',
  address: {
    addressLocality: 'Visakhapatnam',
    addressRegion: 'Andhra Pradesh',
    addressCountry: 'IN'
  },
  geo: {
    latitude: '17.6868',
    longitude: '83.2185'
  },
  routes: [
    {
      path: '/',
      title: 'Sree Sampath Packers & Movers | Best Movers in Visakhapatnam & Pan-India',
      description: 'Sree Sampath Packers & Movers provides safe, reliable packing, moving, and transportation services in Visakhapatnam and pan-India. Multiple vehicle sizes for any move.',
      h1: 'Sree Sampath Packers & Movers Visakhapatnam',
      priority: 1.0,
      changefreq: 'weekly'
    },
    {
      path: '/services/household-shifting',
      title: 'Household Shifting Services in Visakhapatnam | Sree Sampath Packers & Movers',
      description: 'Safe & hassle-free household shifting in Visakhapatnam and across India. Multi-layer packaging, expert furniture assembly, and zero-damage transit.',
      h1: 'Household Shifting Services',
      priority: 0.9,
      changefreq: 'monthly'
    },
    {
      path: '/services/office-relocation',
      title: 'Office Relocation & Shifting in Visakhapatnam | Sree Sampath Packers & Movers',
      description: 'Minimal-downtime commercial and corporate office moves in Visakhapatnam. Server crates, modular workstation de-rigging, and weekend shifting.',
      h1: 'Office Relocation Services',
      priority: 0.9,
      changefreq: 'monthly'
    },
    {
      path: '/services/packing-unpacking',
      title: 'Professional Packing & Unpacking Services Visakhapatnam | Sree Sampath',
      description: 'Certified 5-layer packing with bubble wrap, corrugated sheets, moisture-resistant stretch film, and safe unpacking services at your destination.',
      h1: 'Packing & Unpacking Services',
      priority: 0.9,
      changefreq: 'monthly'
    },
    {
      path: '/services/local-shifting',
      title: 'Local Shifting Services in Visakhapatnam | Same-Day Moving Specialists',
      description: 'Rapid same-day home and commercial shifting across MVP Colony, Gajuwaka, Madhurawada, Seethammadhara, and all Visakhapatnam areas.',
      h1: 'Local Shifting in Visakhapatnam',
      priority: 0.9,
      changefreq: 'monthly'
    },
    {
      path: '/services/domestic-relocation',
      title: 'Domestic & Interstate Relocation from Visakhapatnam | Sree Sampath',
      description: 'Interstate household relocation from Visakhapatnam to Hyderabad, Bangalore, Chennai, Mumbai, Delhi, and pan-India destinations with transit insurance.',
      h1: 'Domestic Relocation Services',
      priority: 0.9,
      changefreq: 'monthly'
    },
    {
      path: '/services/commercial-goods-transportation',
      title: 'Commercial Goods Transportation Visakhapatnam | Sree Sampath Logistics',
      description: 'B2B freight, palletized cargo, manufacturing parts, and retail distribution transport across Andhra Pradesh and pan-India with verified GST bills.',
      h1: 'Commercial Goods Transportation',
      priority: 0.9,
      changefreq: 'monthly'
    }
  ] as SeoRoute[]
}
