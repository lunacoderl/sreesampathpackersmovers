import React from 'react'
import { MessageSquare, ArrowRight, Truck, Phone } from 'lucide-react'
import { companyDetails } from '../../data/company'

export const Hero: React.FC = () => {
  const scrollToQuote = () => {
    const elem = document.getElementById('quote')
    if (elem) elem.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToFleet = () => {
    const elem = document.getElementById('vehicle-fleet')
    if (elem) elem.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative min-h-[650px] sm:min-h-[750px] lg:min-h-[850px] w-full bg-cover bg-center bg-no-repeat flex flex-col justify-between pt-8 sm:pt-14 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      {/* Top Value Headline Banner Container */}
      <div className="max-w-4xl mx-auto w-full text-center relative z-10">
        <div className=" rounded-3xl p-6 sm:p-10 border border-white/90 shadow-2xl">
          {/* Trust pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs sm:text-sm font-bold mb-4 shadow-sm">
            <Truck className="w-4 h-4 text-orange-600" />
            <span>Visakhapatnam's Dedicated Fleet • Moving Any Size Pan-India</span>
          </div>

          {/* Main H1 */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#0F2C59] tracking-tight leading-[1.15] mb-4">
            Moving Without the Stress.{' '}
            <span className="block text-orange-600 mt-1">We Handle the Journey.</span>
          </h1>

          {/* Supporting copy */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-700 font-semibold leading-relaxed mb-6 sm:mb-8">
            {companyDetails.primaryMessage}
            <span className="block text-sm sm:text-base text-slate-600 font-normal mt-1">
              {companyDetails.subMessage}
            </span>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={scrollToQuote}
              className="w-full sm:w-auto px-7 py-3.5 sm:py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm sm:text-base rounded-2xl shadow-xl shadow-orange-600/30 hover:shadow-orange-600/40 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={`https://wa.me/${companyDetails.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base rounded-2xl shadow-xl shadow-emerald-600/25 hover:shadow-emerald-600/35 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={scrollToFleet}
              className="w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-[#0F2C59] hover:bg-blue-950 text-white font-bold text-sm sm:text-base rounded-2xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
            >
              <Truck className="w-5 h-5 text-orange-400" />
              <span>Explore Vehicle Fleet</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Floating Information Badges (Resting naturally on the foreground) */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 pt-8">
        {/* Left fleet badge */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-lg border border-white/80 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold text-lg shadow-md">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">
              Fleet Capacity Ready
            </p>
            <p className="text-xs sm:text-sm font-extrabold text-[#0F2C59]">
              Medium • Large • Extra Large
            </p>
          </div>
        </div>

        {/* Right direct call badge */}
        <div className="bg-[#0F2C59]/95 text-white backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-lg border border-blue-900/60 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-blue-200 font-semibold uppercase tracking-wider">Instant Call Support</p>
            <a
              href={`tel:${companyDetails.phone1}`}
              className="text-xs sm:text-sm font-extrabold text-white hover:text-orange-400 transition-colors"
            >
              {companyDetails.phone1Display}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
