import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { FloatingCTA } from './components/layout/FloatingCTA'
import { ScrollToTop } from './components/common/ScrollToTop'
import { Home } from './pages/Home'
import { ServiceDetailPage } from './components/services/ServiceDetailPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-orange-500 selection:text-white">
        {/* Main Navbar */}
        <Navbar />

        {/* Content Routes */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />

        {/* Floating Mobile Bar & Desktop Speed Dial */}
        <FloatingCTA />
      </div>
    </BrowserRouter>
  )
}
