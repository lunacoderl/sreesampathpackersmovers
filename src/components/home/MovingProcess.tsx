import React from 'react'
import { FileText, ClipboardList, Package, Truck, Home } from 'lucide-react'

export const MovingProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Free Quote & Vehicle Match',
      desc: 'Share your moving items on WhatsApp or phone. We recommend the exact vehicle size and provide a clear quote.',
      icon: FileText
    },
    {
      num: '02',
      title: 'Strategic Pre-Move Planning',
      desc: 'Confirming your preferred moving date, inventory count, packaging supplies, and elevator/lane access.',
      icon: ClipboardList
    },
    {
      num: '03',
      title: 'Multi-Layer Packing',
      desc: 'Our uniformed crew arrives with high-density bubble wrap, stretch film, corrugated sheets, and cartons.',
      icon: Package
    },
    {
      num: '04',
      title: 'Safe Vehicle Transit',
      desc: 'Careful loading, tight cargo tie-down, and direct highway transit by experienced drivers to destination.',
      icon: Truck
    },
    {
      num: '05',
      title: 'Delivery & Room Placement',
      desc: 'Safe unloading at your new home or office, placing furniture and heavy appliances exactly where you want them.',
      icon: Home
    }
  ]

  return (
    <section id="process" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <span>5-Step Seamless Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2C59] tracking-tight leading-tight mb-4">
            A Simpler Way to Move
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            No confusion, no sudden delays. We follow a disciplined, transparent moving process designed to protect your goods at every milestone.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-orange-400 via-blue-500 to-emerald-500 -translate-y-12 z-0 rounded-full opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.num}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group"
                >
                  <div>
                    {/* Step number badge & icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 border border-orange-200/60 flex items-center justify-center font-bold shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                        Step {step.num}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-[#0F2C59] mb-2 group-hover:text-orange-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
