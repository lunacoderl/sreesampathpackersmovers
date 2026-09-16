import React from 'react'
import { Star, Truck, MapPin, ShieldCheck } from 'lucide-react'
import { companyDetails } from '../../data/company'

export const TrustRow: React.FC = () => {
  return (
    <div className="bg-slate-50 border-y border-slate-200/80 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {/* Rating */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xl font-extrabold text-slate-900">{companyDetails.googleRating}★</span>
                <span className="text-xs font-semibold text-slate-500">Google</span>
              </div>
              <p className="text-xs text-slate-600 font-medium">{companyDetails.reviewCount} Verified Reviews</p>
            </div>
          </div>

          {/* Vehicle Fleet */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-slate-900">Multiple Vehicles</p>
              <p className="text-xs text-slate-600 font-medium">Medium • Large • XL</p>
            </div>
          </div>

          {/* Coverage */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0F2C59] flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-[#0F2C59]" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-slate-900">Local & Nationwide</p>
              <p className="text-xs text-slate-600 font-medium">Vizag & Pan-India</p>
            </div>
          </div>

          {/* Careful Crew */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-slate-900">Careful Handling</p>
              <p className="text-xs text-slate-600 font-medium">Trained Packing Team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
