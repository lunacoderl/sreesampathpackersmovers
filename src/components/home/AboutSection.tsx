import React from 'react'
import { ShieldCheck, Users, Truck, MapPin, Award } from 'lucide-react'

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4 text-orange-600" />
            <span>Trusted Relocation Specialists</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2C59] tracking-tight leading-tight mb-4">
            Reliable Team. Dedicated Fleet.{' '}
            <span className="text-orange-600 block sm:inline">Stress-Free Moves.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Based in Visakhapatnam, Sree Sampath Packers & Movers is built on one simple principle: treat every customer's belongings with the same care and respect as our own. From local apartments to long-haul commercial freights across India, we deliver complete peace of mind.
          </p>
        </div>

        {/* Panoramic Full-Width Natural Image (Uncropped, pure natural colors, no overlay) */}
        <div className="mb-12 rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
          <img
            src="/about-bg.png"
            alt="Sree Sampath Packers & Movers hub, operations team, and vehicle fleet in Visakhapatnam"
            className="w-full h-auto max-h-[650px] object-contain sm:object-cover mx-auto"
            loading="lazy"
          />
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-orange-200 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-900 text-white flex items-center justify-center mb-4 shadow-md">
              <Truck className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Dedicated Vehicle Fleet</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We own and operate our dedicated moving vehicles—Medium, Large, and Extra Large—ensuring prompt dispatch and strict maintenance standards.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-orange-200 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-orange-600 text-white flex items-center justify-center mb-4 shadow-md">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Zero Compromise on Packing</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Multi-tier bubble wrapping, heavy corrugated cartons, and moisture-proof stretch film ensure fragile chinaware, TVs, and wooden furniture arrive immaculate.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-orange-200 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center mb-4 shadow-md">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Uniformed In-House Crew</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our polite, experienced loaders and drivers are full-time employees trained in heavy lifting, tight staircases, and delicate glassware handling.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-orange-200 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4 shadow-md">
              <MapPin className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Visakhapatnam & Pan-India</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Deep local roots across Visakhapatnam neighborhoods paired with strong interstate highway corridors to Hyderabad, Chennai, Bangalore, and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
