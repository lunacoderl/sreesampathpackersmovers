import React, { useState } from 'react'
import { Phone, MessageSquare, MapPin, Truck, AlertCircle, CheckCircle2 } from 'lucide-react'
import { companyDetails } from '../../data/company'
import { buildWhatsAppQuoteUrl } from '../../utils/whatsapp'
import type { QuoteFormData } from '../../utils/whatsapp'

interface QuoteSectionProps {
  selectedVehicle?: string
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ selectedVehicle }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    movingFrom: '',
    movingTo: '',
    moveType: 'Household Shifting',
    preferredDate: '',
    vehicleSize: selectedVehicle || 'Large Transport Carrier',
    message: ''
  })

  const [validationError, setValidationError] = useState<string | null>(null)
  const [submittedStatus, setSubmittedStatus] = useState<boolean>(false)

  // Update vehicle size if prop changes
  React.useEffect(() => {
    if (selectedVehicle) {
      setFormData((prev) => ({ ...prev, vehicleSize: selectedVehicle }))
    }
  }, [selectedVehicle])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (validationError) setValidationError(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim()) {
      setValidationError('Please enter your full name.')
      return
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      setValidationError('Please enter a valid 10-digit mobile number.')
      return
    }

    setValidationError(null)
    setSubmittedStatus(true)

    // Construct WhatsApp message URL and launch
    const url = buildWhatsAppQuoteUrl(formData)
    window.open(url, '_blank')
  }

  return (
    <section id="quote" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-4 h-4 text-orange-600" />
            <span>Instant Quote & Booking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2C59] tracking-tight leading-tight mb-4">
            Ready for a Smoother Move?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Tell us what you're moving. We'll help you figure out the right service and vehicle with a fast, transparent quote.
          </p>
        </div>

        {/* Full Uncropped Widescreen Contact Visual (Natural colors, zero color tint/overlay) */}
        <div className="mb-12 rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
          <img
            src="/contact-bg.png"
            alt="Sree Sampath Packers & Movers customer service and operations support"
            className="w-full h-auto max-h-[600px] object-contain sm:object-cover mx-auto"
            loading="lazy"
          />
        </div>

        {/* Quote Form & Instant Call Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Form (8 cols) */}
          <div className="lg:col-span-8 bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-md">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
              <div>
                <h3 className="text-2xl font-black text-[#0F2C59]">
                  Request a Free Quote
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Sends formatted enquiry directly to our dispatch WhatsApp
                </p>
              </div>
              <span className="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                Instant Response
              </span>
            </div>

            {validationError && (
              <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            {submittedStatus && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  Your enquiry is formatted and opened in WhatsApp! If it didn't open, click below or call us directly.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Kumar"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-sm text-slate-900 outline-none transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9866266199"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-sm text-slate-900 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Moving From */}
                <div>
                  <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
                    Moving From (Pickup City / Area) *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="movingFrom"
                      value={formData.movingFrom}
                      onChange={handleChange}
                      placeholder="e.g. MVP Colony, Visakhapatnam"
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-sm text-slate-900 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Moving To */}
                <div>
                  <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
                    Moving To (Destination City / Area) *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="movingTo"
                      value={formData.movingTo}
                      onChange={handleChange}
                      placeholder="e.g. Gachibowli, Hyderabad"
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-sm text-slate-900 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Move Type */}
                <div>
                  <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
                    Move Type
                  </label>
                  <select
                    name="moveType"
                    value={formData.moveType}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-sm text-slate-900 outline-none transition-all cursor-pointer"
                  >
                    <option value="Household Shifting">Household Shifting</option>
                    <option value="Office Relocation">Office Relocation</option>
                    <option value="Local Shifting">Local Shifting (Vizag)</option>
                    <option value="Domestic Relocation">Domestic (All India)</option>
                    <option value="Packing & Unpacking">Packing & Unpacking Only</option>
                    <option value="Commercial Transportation">Commercial Freight</option>
                  </select>
                </div>

                {/* Preferred Vehicle */}
                <div>
                  <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
                    Vehicle Preference
                  </label>
                  <select
                    name="vehicleSize"
                    value={formData.vehicleSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-sm text-slate-900 outline-none transition-all cursor-pointer"
                  >
                    <option value="Medium Transport Vehicle">Medium (1 BHK / Compact)</option>
                    <option value="Large Transport Carrier">Large (2-3 BHK / Branded)</option>
                    <option value="Extra Large Heavy Cargo Carrier">Extra Large (3+ BHK / Bulk)</option>
                    <option value="Not Sure / Recommend For Me">Not Sure (Recommend For Me)</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-sm text-slate-900 outline-none transition-all cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Message / Inventory Details */}
              <div>
                <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
                  Inventory Notes / Items to Move
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="e.g. 1 fridge, 1 double cot, washing machine, 10 cartons, sofa 3-seater..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-sm text-slate-900 outline-none transition-all"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 py-4 px-6 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-base shadow-lg shadow-orange-600/25 hover:shadow-orange-600/35 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Request Quote via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Direct Call & Hub Details (4 cols) */}
          <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
            <div className="bg-[#0F2C59] text-white rounded-3xl p-6 sm:p-8 shadow-xl">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-2">
                Fastest Response
              </span>
              <h4 className="text-2xl font-black mb-3">Prefer Calling Directly?</h4>
              <p className="text-sm text-blue-200 leading-relaxed mb-6">
                Our moving managers in Visakhapatnam are ready to assist you right now with pricing, vehicle options, and date availability.
              </p>

              <div className="space-y-4">
                <a
                  href={`tel:${companyDetails.phone1}`}
                  className="w-full py-3.5 px-4 rounded-xl bg-white text-[#0F2C59] hover:bg-slate-100 font-extrabold text-base flex items-center justify-center gap-3 transition-colors shadow-md"
                >
                  <Phone className="w-5 h-5 text-orange-600" />
                  <span>{companyDetails.phone1Display}</span>
                </a>

                <a
                  href={`tel:${companyDetails.phone2}`}
                  className="w-full py-3.5 px-4 rounded-xl bg-blue-900/80 hover:bg-blue-900 text-white font-bold text-base flex items-center justify-center gap-3 transition-colors border border-blue-700"
                >
                  <Phone className="w-5 h-5 text-orange-400" />
                  <span>{companyDetails.phone2Display}</span>
                </a>
              </div>
            </div>

            {/* Hub info card */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200">
              <h5 className="text-base font-bold text-[#0F2C59] mb-3 flex items-center gap-2">
                <Truck className="w-5 h-5 text-orange-600" />
                <span>Operational Headquarters</span>
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong>Sree Sampath Packers & Movers</strong>
                <br />
                Visakhapatnam, Andhra Pradesh, India
              </p>
              <div className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-500">
                <p>• Daily local moves across Visakhapatnam</p>
                <p>• Regular interstate trips to Hyderabad, Chennai & Bangalore</p>
                <p>• Pan-India carrier network</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
