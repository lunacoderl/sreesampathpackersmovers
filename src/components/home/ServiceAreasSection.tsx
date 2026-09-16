import React from 'react'
import { MapPin, Navigation, CheckCircle, ArrowRight } from 'lucide-react'
import { serviceAreasData } from '../../data/areas'

export const ServiceAreasSection: React.FC = () => {
  return (
    <section id="areas" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4 text-orange-600" />
            <span>Route & Coverage Corridors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2C59] tracking-tight leading-tight mb-4">
            Moving Across Visakhapatnam & Beyond
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether shifting a few blocks down the road in Visakhapatnam or relocating across state borders across India, our logistics network provides dedicated point-to-point transport.
          </p>
        </div>

        {/* 3 Tier Service Areas Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {serviceAreasData.map((area, index) => (
            <div
              key={area.id}
              className={`rounded-3xl p-6 sm:p-8 border transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between ${
                index === 0
                  ? 'bg-orange-50/50 border-orange-200/80 shadow-md'
                  : index === 1
                  ? 'bg-blue-50/50 border-blue-200/80 shadow-md'
                  : 'bg-teal-50/50 border-teal-200/80 shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-extrabold px-3 py-1 rounded-full tracking-wide ${
                      index === 0
                        ? 'bg-orange-600 text-white'
                        : index === 1
                        ? 'bg-blue-900 text-white'
                        : 'bg-teal-700 text-white'
                    }`}
                  >
                    {area.badge}
                  </span>
                  <Navigation className="w-5 h-5 text-slate-400" />
                </div>

                <h3 className="text-2xl font-black text-[#0F2C59] mb-1">
                  {area.title}
                </h3>
                <p className="text-sm font-bold text-orange-600 mb-4">
                  {area.subtitle}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {area.description}
                </p>

                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-3">
                  Key Coverage Highlights:
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  {area.coverage.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Route Strip */}
        <div className="bg-[#0F2C59] text-white rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-orange-600 text-white flex items-center justify-center shrink-0 shadow-lg">
              <Navigation className="w-7 h-7" />
            </div>
            <div>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                Direct Transit Coordination
              </p>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Moving between cities or need a custom route?
              </h4>
              <p className="text-xs sm:text-sm text-blue-200 mt-0.5">
                We coordinate dedicated vehicles directly from your doorstep to any destination in India.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              const quoteElem = document.getElementById('quote')
              if (quoteElem) quoteElem.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-full md:w-auto px-6 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm rounded-xl transition-all shadow-md shrink-0 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Check Route Availability</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
