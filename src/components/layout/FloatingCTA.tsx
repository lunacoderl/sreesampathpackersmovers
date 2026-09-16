import React, { useState, useEffect } from 'react'
import { Phone, MessageSquare, ArrowUp, FileText } from 'lucide-react'
import { companyDetails } from '../../data/company'

export const FloatingCTA: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToQuote = () => {
    const quoteElem = document.getElementById('quote')
    if (quoteElem) {
      quoteElem.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/#quote'
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Mobile Fixed Bottom Bar (Visible on mobile only) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-8px_20px_rgba(0,0,0,0.1)] px-3 py-2">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          {/* Call Button */}
          <a
            href={`tel:${companyDetails.phone1}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-900 text-white active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4 text-orange-400 mb-0.5" />
            <span className="text-[11px] font-bold tracking-tight">CALL NOW</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${companyDetails.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white active:scale-95 transition-transform"
          >
            <MessageSquare className="w-4 h-4 text-white mb-0.5" />
            <span className="text-[11px] font-bold tracking-tight">WHATSAPP</span>
          </a>

          {/* Quote Button */}
          <button
            onClick={scrollToQuote}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-orange-600 text-white active:scale-95 transition-transform cursor-pointer"
          >
            <FileText className="w-4 h-4 text-white mb-0.5" />
            <span className="text-[11px] font-bold tracking-tight">GET QUOTE</span>
          </button>
        </div>
      </div>

      {/* Desktop Floating Speed Dial (Visible on desktop) */}
      <div className="hidden lg:flex fixed right-6 bottom-8 z-40 flex-col gap-3 items-end">
        {/* Back to top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-11 h-11 rounded-full bg-white text-slate-700 shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:text-orange-600 transition-all duration-200 cursor-pointer transform hover:scale-105"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* WhatsApp Fast Button */}
        <a
          href={`https://wa.me/${companyDetails.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-sm shadow-xl shadow-emerald-600/30 hover:bg-emerald-500 transition-all duration-200 transform hover:scale-105"
        >
          <MessageSquare className="w-5 h-5" />
          <span>Chat on WhatsApp</span>
        </a>

        {/* Call Fast Button */}
        <a
          href={`tel:${companyDetails.phone1}`}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0F2C59] text-white font-bold text-sm shadow-xl shadow-blue-900/30 hover:bg-blue-800 transition-all duration-200 transform hover:scale-105"
        >
          <Phone className="w-4 h-4 text-orange-400" />
          <span>{companyDetails.phone1Display}</span>
        </a>
      </div>
    </>
  )
}
