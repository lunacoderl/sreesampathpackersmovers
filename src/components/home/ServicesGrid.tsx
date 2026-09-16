import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Truck } from 'lucide-react'
import { servicesData } from '../../data/services'

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <Truck className="w-4 h-4 text-orange-600" />
            <span>End-to-End Relocation Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2C59] tracking-tight leading-tight mb-4">
            Comprehensive Moving Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Every relocation requires specialized handling, tailored packing materials, and the correct vehicle size. Explore our full suite of moving services below.
          </p>
        </div>

        {/* 6 Services Grid (Uncropped full cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col overflow-hidden group"
            >
              {/* Uncropped Full Service Graphic */}
              <div className="bg-slate-50 p-2 sm:p-3 border-b border-slate-100 flex items-center justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto object-contain rounded-2xl transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>

              {/* Service Info Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F2C59] mb-2 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm font-semibold text-orange-600 mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Footer Action Link */}
                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0F2C59] group-hover:text-orange-600 transition-colors"
                  >
                    <span>View Service Details & Vehicles</span>
                    <ArrowRight className="w-4 h-4 text-orange-500 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
