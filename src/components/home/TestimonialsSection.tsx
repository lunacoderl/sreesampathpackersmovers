import React from 'react'
import { Star, ShieldCheck, MessageSquare } from 'lucide-react'
import { testimonialsData } from '../../data/testimonials'
import { companyDetails } from '../../data/company'

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>Verified Customer Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2C59] tracking-tight leading-tight mb-4">
            4.8★ Rated by Customers
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-2xl font-black text-slate-900">{companyDetails.googleRating}</span>
            <span className="text-slate-400">|</span>
            <span className="text-base font-semibold text-slate-600">{companyDetails.reviewCount} Google Reviews</span>
          </div>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Real feedback from families, apartment residents, and businesses who entrusted their move to Sree Sampath Packers & Movers.
          </p>
        </div>

        {/* Uncropped Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden p-2 sm:p-3 flex flex-col justify-between"
            >
              {/* Uncropped Designed Testimonial Graphic */}
              <div className="flex items-center justify-center">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} - Review for Sree Sampath Packers & Movers`}
                  className="w-full h-auto object-contain rounded-2xl shadow-sm"
                  loading="lazy"
                />
              </div>

              {/* Card Sub-Note */}
              <div className="px-4 py-3 border-t border-slate-100 mt-2 flex items-center justify-between text-xs text-slate-500">
                <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified Customer
                </span>
                <span className="text-slate-400">{testimonial.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google CTA bottom */}
        <div className="mt-12 text-center">
          <a
            href={`https://wa.me/${companyDetails.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat With Us to Experience Our 5-Star Service</span>
          </a>
        </div>
      </div>
    </section>
  )
}
