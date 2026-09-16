import React, { useState } from 'react'
import { Truck, CheckCircle, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react'
import { vehicleFleet } from '../../data/vehicles'
import type { Vehicle } from '../../types'

interface VehicleFleetSectionProps {
  onSelectVehicle?: (vehicleId: string) => void
}

export const VehicleFleetSection: React.FC<VehicleFleetSectionProps> = ({ onSelectVehicle }) => {
  const [activeVehicleId, setActiveVehicleId] = useState<string>('large')

  const activeVehicle: Vehicle =
    vehicleFleet.find((v) => v.id === activeVehicleId) || vehicleFleet[0]

  const handleSelectSize = (vehicle: Vehicle) => {
    setActiveVehicleId(vehicle.id)
    if (onSelectVehicle) {
      onSelectVehicle(vehicle.name)
    }
    const quoteElem = document.getElementById('quote')
    if (quoteElem) {
      quoteElem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="vehicle-fleet" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <Truck className="w-4 h-4 text-orange-600" />
            <span>Our Signature Fleet Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2C59] tracking-tight leading-tight mb-4">
            One Move. Any Size.{' '}
            <span className="text-orange-600 block sm:inline">We've Got the Vehicle.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Every move is different. A small household shift needs a different vehicle than a complete home relocation or a large commercial load. Sree Sampath Packers & Movers offers transportation options in different sizes to handle everything from compact moves to extremely large loads.
          </p>
        </div>

        {/* Interactive Vehicle Size Selector Tabs */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="inline-flex p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200 shadow-inner w-full max-w-2xl">
            {vehicleFleet.map((vehicle) => {
              const isActive = vehicle.id === activeVehicleId
              return (
                <button
                  key={vehicle.id}
                  onClick={() => setActiveVehicleId(vehicle.id)}
                  className={`flex-1 py-3 sm:py-3.5 px-3 sm:px-6 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex flex-col sm:flex-row items-center justify-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-white text-orange-600 shadow-md transform scale-[1.02]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <Truck className={`w-4 h-4 ${isActive ? 'text-orange-600' : 'text-slate-400'}`} />
                  <span className="truncate">
                    {vehicle.id === 'medium' && 'Medium'}
                    {vehicle.id === 'large' && 'Large (Branded)'}
                    {vehicle.id === 'extra-large' && 'Extra Large'}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Active Vehicle Showcase Card */}
        <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Col: Uncropped Full Vehicle Visual */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div className="w-full bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-md relative overflow-hidden group">
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900 text-white text-xs font-bold shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    {activeVehicle.badge}
                  </span>
                </div>

                {/* Uncropped Full Image */}
                <div className="relative min-h-[260px] sm:min-h-[360px] md:min-h-[400px] flex items-center justify-center py-2">
                  <img
                    key={activeVehicle.id}
                    src={activeVehicle.image}
                    alt={activeVehicle.name}
                    className="w-full h-auto max-h-[460px] object-contain rounded-xl transition-all duration-500 transform group-hover:scale-[1.02] shadow-sm"
                  />
                </div>

                {/* Micro note under image */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">Actual Fleet Vehicle</span>
                  <span>Sree Sampath Logistics</span>
                </div>
              </div>
            </div>

            {/* Right Col: Specifications & Features Panel */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-extrabold text-orange-600 uppercase tracking-widest block mb-1">
                  Fleet Capacity Profile
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F2C59] tracking-tight">
                  {activeVehicle.name}
                </h3>
                <p className="text-sm font-semibold text-slate-700 mt-1">
                  {activeVehicle.tagline}
                </p>
              </div>

              {/* Ideal Load Indicator */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Capacity Rating:
                </p>
                <p className="text-base font-extrabold text-blue-950 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-orange-500 fill-orange-500 shrink-0" />
                  <span>{activeVehicle.capacity}</span>
                </p>
              </div>

              {/* Ideal For List */}
              <div>
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-3">
                  Recommended For:
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  {activeVehicle.idealFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights List */}
              <div>
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-3">
                  Vehicle & Crew Highlights:
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  {activeVehicle.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Select Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => handleSelectSize(activeVehicle)}
                  className="w-full py-3.5 px-6 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-600/25 hover:shadow-orange-600/35 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <span>Choose This Vehicle Size & Get Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Vehicle Section CTA */}
        <div className="mt-12 text-center bg-blue-50/80 rounded-2xl p-6 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-blue-900">
              Not sure which vehicle fits your belongings?
            </p>
            <p className="text-base sm:text-lg font-extrabold text-[#0F2C59]">
              Tell us what you're moving — our moving coordinators will recommend the exact capacity.
            </p>
          </div>
          <button
            onClick={() => {
              const quoteElem = document.getElementById('quote')
              if (quoteElem) quoteElem.scrollIntoView({ behavior: 'smooth' })
            }}
            className="shrink-0 px-6 py-3 bg-[#0F2C59] hover:bg-blue-950 text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            <span>Tell Us What You're Moving</span>
            <ArrowRight className="w-4 h-4 text-orange-400" />
          </button>
        </div>
      </div>
    </section>
  )
}
