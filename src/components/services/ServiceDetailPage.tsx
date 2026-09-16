import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle, Truck, Phone, MessageSquare, ArrowRight } from 'lucide-react'
import { servicesData } from '../../data/services'
import { vehicleFleet } from '../../data/vehicles'
import { companyDetails } from '../../data/company'

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()

  const service = servicesData.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
          <Truck className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-extrabold text-[#0F2C59] mb-2">Service Not Found</h1>
        <p className="text-slate-600 mb-6 max-w-md">
          Looking for a specific moving or packing service? Head back to our services directory.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-colors shadow-md"
        >
          Return to Home
        </Link>
      </div>
    )
  }

  const suitableVehicle = vehicleFleet.find((v) => v.id === service.suitableVehicleId) || vehicleFleet[1]

  const scrollToQuote = () => {
    navigate('/#quote')
    setTimeout(() => {
      const elem = document.getElementById('quote')
      if (elem) elem.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Breadcrumb & Navigation */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-500">
            <Link to="/" className="hover:text-orange-600 font-medium">Home</Link>
            <span>/</span>
            <Link to="/#services" className="hover:text-orange-600 font-medium">Services</Link>
            <span>/</span>
            <span className="text-slate-900 font-bold">{service.title}</span>
          </div>
          <Link
            to="/#services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Services</span>
          </Link>
        </div>
      </div>

      {/* Service Hero Banner */}
      <section className="bg-white py-12 sm:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
                <Truck className="w-3.5 h-3.5 text-orange-600" />
                <span>Professional Relocation</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2C59] tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="text-lg font-bold text-orange-600">
                {service.tagline}
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                {service.fullDescription}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={scrollToQuote}
                  className="px-7 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-orange-600/25 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Get Free Quote for this Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(`Hello Sree Sampath Packers & Movers, I would like to inquire about ${service.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Enquiries</span>
                </a>
              </div>
            </div>

            {/* Right: Uncropped Full Service Graphic */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="bg-slate-50 p-3 sm:p-4 rounded-3xl border border-slate-200/90 shadow-xl max-w-lg w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto object-contain rounded-2xl mx-auto shadow-sm"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inclusions: "What We Help With" */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="text-xs font-extrabold text-orange-600 uppercase tracking-widest block mb-1">
            Service Coverage
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2C59]">
            What We Help With
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Every item in your inventory is accounted for, protected, and carefully handled by our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.inclusions.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Step-by-Step Process */}
      <section className="py-14 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-extrabold text-blue-900 uppercase tracking-widest block mb-1">
              Workflow Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2C59]">
              Our Step-by-Step Process
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Structured from first phone call to final room arrangement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black text-orange-600 block mb-2">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suitable Vehicle Fleet Match */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0F2C59] to-blue-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 uppercase tracking-widest">
                <Truck className="w-4 h-4" /> Recommended Fleet Capacity
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Vehicle Match: {suitableVehicle.name}
              </h2>
              <p className="text-sm text-blue-200 leading-relaxed">
                {suitableVehicle.tagline}. Sree Sampath Packers & Movers offers vehicle options in different sizes—Medium, Large, and Extra Large—so your load travels securely without wasting cargo space or paying extra.
              </p>
              <div className="pt-2">
                <p className="text-xs font-bold text-orange-300 uppercase tracking-wider mb-2">
                  Key Advantages for {service.title}:
                </p>
                <ul className="space-y-1.5 text-sm text-blue-100">
                  {suitableVehicle.idealFor.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Vehicle Preview Graphic (Uncropped) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 max-w-md w-full">
                <img
                  src={suitableVehicle.image}
                  alt={suitableVehicle.name}
                  className="w-full h-auto max-h-[260px] object-contain rounded-xl mx-auto"
                />
                <div className="mt-3 text-center">
                  <span className="text-xs font-bold text-orange-300">{suitableVehicle.capacity}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service FAQ */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F2C59] mb-6 text-center">
            {service.title} FAQs
          </h2>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-sm sm:text-base font-bold text-[#0F2C59] mb-2">{faq.q}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Ready to Move CTA Banner */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F2C59] mb-3">
            Ready to Plan Your {service.title}?
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-8 text-sm sm:text-base">
            Get an instant, transparent quote with vehicle recommendation from our Visakhapatnam dispatch team.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={scrollToQuote}
              className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold text-base rounded-xl shadow-lg shadow-orange-600/25 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${companyDetails.phone1}`}
              className="px-7 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-base rounded-xl transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Call {companyDetails.phone1Display}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
