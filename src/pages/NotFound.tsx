import React from 'react'
import { Link } from 'react-router-dom'
import { Truck } from 'lucide-react'
import { SeoHead } from '../components/common/SeoHead'

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
      <SeoHead
        title="404 - Page Not Found | Sree Sampath Packers & Movers"
        description="The page you are looking for does not exist. Return to Sree Sampath Packers & Movers homepage."
        canonicalPath="/404"
        noIndex={true}
      />
      <div className="w-20 h-20 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
        <Truck className="w-10 h-10" />
      </div>
      <h1 className="text-4xl font-extrabold text-[#0F2C59] mb-3">404 - Page Not Found</h1>
      <p className="text-slate-600 mb-8 max-w-md">
        The requested URL was not found on our server. If you were looking for packing and moving services in Visakhapatnam, please visit our homepage.
      </p>
      <Link
        to="/"
        className="px-8 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-orange-600/30"
      >
        Back to Home
      </Link>
    </div>
  )
}
