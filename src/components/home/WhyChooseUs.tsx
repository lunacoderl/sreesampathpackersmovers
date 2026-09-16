import React from 'react'
import { Truck, ShieldCheck, MapPin, CalendarCheck, Star, FileText, CheckCircle2 } from 'lucide-react'

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      num: '01',
      title: 'Multiple Vehicle Sizes',
      desc: 'From compact medium city trucks to large branded Boleros and extra-large heavy carriers, we match the exact vehicle to your volume.',
      icon: Truck,
      color: 'bg-orange-50 text-orange-600 border-orange-200'
    },
    {
      num: '02',
      title: 'Careful Handling',
      desc: 'Multi-layer wrapping with high-density bubble wrap, corrugated sheets, and stretch film designed around zero damage to furniture and appliances.',
      icon: ShieldCheck,
      color: 'bg-blue-50 text-blue-900 border-blue-200'
    },
    {
      num: '03',
      title: 'Local & Long Distance',
      desc: 'Same-day relocation within Visakhapatnam and dedicated interstate transportation across Andhra Pradesh, Telangana, and Pan-India.',
      icon: MapPin,
      color: 'bg-teal-50 text-teal-700 border-teal-200'
    },
    {
      num: '04',
      title: 'Organized Moving Process',
      desc: 'A structured 5-step workflow from initial quote and systematic packing to calculated loading, highway transit, and doorstep room placement.',
      icon: CalendarCheck,
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    },
    {
      num: '05',
      title: 'Customer Trusted (4.8★)',
      desc: 'Rated 4.8 stars on Google with 85+ verified reviews from home owners, professionals, and businesses who rely on our prompt service.',
      icon: Star,
      color: 'bg-amber-50 text-amber-600 border-amber-200'
    },
    {
      num: '06',
      title: 'Quote Before You Move',
      desc: '100% upfront, transparent pricing with no hidden charges. Discuss your inventory directly on WhatsApp or call for a clear estimate.',
      icon: FileText,
      color: 'bg-rose-50 text-rose-600 border-rose-200'
    }
  ]

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-4 h-4 text-orange-600" />
            <span>The Sree Sampath Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2C59] tracking-tight leading-tight mb-4">
            Why People Choose Sree Sampath
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Relocation doesn't have to be overwhelming. Here is why families and corporations trust us with their most valuable belongings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((r) => {
            const Icon = r.icon
            return (
              <div
                key={r.num}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${r.color} shadow-sm group-hover:scale-105 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-2xl font-black text-slate-200 group-hover:text-orange-300 transition-colors">
                      {r.num}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0F2C59] mb-3 group-hover:text-orange-600 transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {r.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
