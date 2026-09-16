import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, MessageSquare, Menu, X, ChevronRight, Truck, ShieldCheck } from 'lucide-react'
import { companyDetails } from '../../data/company'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`
      return
    }
    const elem = document.getElementById(id)
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Top Notification / Trust Bar */}
      <div className="bg-[#0F2C59] text-white text-xs sm:text-sm py-2 px-4 border-b border-blue-900/50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-orange-600 text-white font-semibold text-xs tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5" /> 4.8★ Google Rated
            </span>
            <span className="hidden md:inline text-blue-200">
              Reliable Movers in Visakhapatnam & Pan-India
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href={`tel:${companyDetails.phone1}`}
              className="flex items-center gap-1 hover:text-orange-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>{companyDetails.phone1Display}</span>
            </a>
            <span className="text-blue-400/60 hidden sm:inline">|</span>
            <a
              href={`https://wa.me/${companyDetails.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5'
            : 'bg-white py-3 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with uncropped full visual */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Sree Sampath Packers & Movers"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <Link
              to="/"
              className={`hover:text-orange-600 transition-colors ${
                location.pathname === '/' ? 'text-orange-600' : ''
              }`}
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection('vehicle-fleet')}
              className="flex items-center gap-1.5 hover:text-orange-600 transition-colors cursor-pointer text-slate-800 font-bold"
            >
              <Truck className="w-4 h-4 text-orange-500" />
              <span>Vehicle Fleet</span>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="hover:text-orange-600 transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-orange-600 transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="hover:text-orange-600 transition-colors cursor-pointer"
            >
              Moving Process
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="hover:text-orange-600 transition-colors cursor-pointer"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="hover:text-orange-600 transition-colors cursor-pointer"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('areas')}
              className="hover:text-orange-600 transition-colors cursor-pointer"
            >
              Areas
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="hover:text-orange-600 transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${companyDetails.phone1}`}
              className="flex items-center gap-1.5 text-sm font-bold text-slate-800 hover:text-orange-600 px-3 py-2 rounded-xl transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-900 flex items-center justify-center">
                <Phone className="w-4 h-4 text-[#0F2C59]" />
              </div>
              <span>{companyDetails.phone1Display}</span>
            </a>
            <button
              onClick={() => scrollToSection('quote')}
              className="bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-orange-600/25 hover:shadow-orange-600/35 transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${companyDetails.phone1}`}
              className="p-2 rounded-xl bg-blue-50 text-[#0F2C59] hover:bg-blue-100 transition-colors"
              aria-label="Call Now"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white">
          <div className="p-4 flex items-center justify-between border-b border-slate-100">
            <img
              src="/logo.png"
              alt="Sree Sampath Packers & Movers"
              className="h-12 w-auto object-contain"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
            <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100 mb-4">
              <p className="text-xs font-bold text-blue-950 uppercase tracking-wider mb-1">
                One Move. Any Size.
              </p>
              <p className="text-xs text-blue-800">
                We have the right vehicle fleet for your move across Vizag and India.
              </p>
            </div>

            <nav className="flex flex-col space-y-3 text-base font-semibold text-slate-800">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 border-b border-slate-100"
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
              <button
                onClick={() => scrollToSection('vehicle-fleet')}
                className="flex items-center justify-between py-2 border-b border-slate-100 text-left text-orange-600 font-bold"
              >
                <span className="flex items-center gap-2">
                  <Truck className="w-5 h-5" /> Vehicle Fleet Showcase
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="flex items-center justify-between py-2 border-b border-slate-100 text-left"
              >
                <span>Services</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="flex items-center justify-between py-2 border-b border-slate-100 text-left"
              >
                <span>About Us</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="flex items-center justify-between py-2 border-b border-slate-100 text-left"
              >
                <span>Moving Process</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="flex items-center justify-between py-2 border-b border-slate-100 text-left"
              >
                <span>Customer Reviews (4.8★)</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="flex items-center justify-between py-2 border-b border-slate-100 text-left"
              >
                <span>Real Work Gallery</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollToSection('areas')}
                className="flex items-center justify-between py-2 border-b border-slate-100 text-left"
              >
                <span>Service Areas</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="flex items-center justify-between py-2 border-b border-slate-100 text-left"
              >
                <span>Frequently Asked Questions</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </nav>

            <div className="pt-6 space-y-3">
              <button
                onClick={() => scrollToSection('quote')}
                className="w-full py-3.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold shadow-lg shadow-orange-600/20 text-center"
              >
                Get Free Quote
              </button>
              <a
                href={`https://wa.me/${companyDetails.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={`tel:${companyDetails.phone1}`}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-orange-400" />
                <span>Call {companyDetails.phone1Display}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
