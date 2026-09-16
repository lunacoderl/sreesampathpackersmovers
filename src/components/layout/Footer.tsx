import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, MessageSquare, MapPin, ShieldCheck, Truck, Star, ArrowUpRight } from 'lucide-react'
import { companyDetails } from '../../data/company'
import { servicesData } from '../../data/services'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0B1E3B] text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Fleet Trust */}
          <div className="space-y-4">
            <div className="bg-white p-3 rounded-2xl inline-block shadow-md">
              <img
                src="/logo.png"
                alt="Sree Sampath Packers & Movers"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong>The Right Vehicle. The Right Team. A Safer Move.</strong> From compact local shifting to large-volume household & commercial freight, we have the fleet and dedicated staff for your peace of mind.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-white tracking-wide">
                4.8 / 5.0 (85+ Google Reviews)
              </span>
            </div>
          </div>

          {/* Col 2: Services Links */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wide uppercase mb-4 flex items-center gap-2">
              <Truck className="w-4 h-4 text-orange-500" />
              <span>Our Services</span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="hover:text-orange-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{s.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-orange-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Vehicle Fleet Sizes */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wide uppercase mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Fleet Capacities</span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-semibold text-white block">Medium Transport Vehicle</span>
                <span className="text-xs text-slate-400">1 BHK, Student & Compact City Moves</span>
              </li>
              <li className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-semibold text-white block">Large Transport Carrier</span>
                <span className="text-xs text-slate-400">2-3 BHK Complete Home & Office Moves</span>
              </li>
              <li className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-semibold text-white block">Extra Large Heavy Carrier</span>
                <span className="text-xs text-slate-400">3+ BHK Villas, Commercial Freight & Interstate</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Locations */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wide uppercase mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {companyDetails.location}
                  <span className="block text-xs text-slate-400 mt-0.5">
                    Hub: Visakhapatnam • Operations: Pan-India
                  </span>
                </span>
              </div>
              <a
                href={`tel:${companyDetails.phone1}`}
                className="flex items-center gap-3 text-white hover:text-orange-400 transition-colors font-medium"
              >
                <Phone className="w-5 h-5 text-orange-400 shrink-0" />
                <span>{companyDetails.phone1Display}</span>
              </a>
              <a
                href={`tel:${companyDetails.phone2}`}
                className="flex items-center gap-3 text-white hover:text-orange-400 transition-colors font-medium"
              >
                <Phone className="w-5 h-5 text-orange-400 shrink-0" />
                <span>{companyDetails.phone2Display}</span>
              </a>
              <a
                href={`https://wa.me/${companyDetails.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>WhatsApp Instant Enquiries</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {companyDetails.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
