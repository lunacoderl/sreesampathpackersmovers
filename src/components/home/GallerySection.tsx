import React, { useState } from 'react'
import { Image as ImageIcon, Maximize2 } from 'lucide-react'
import { galleryData } from '../../data/gallery'
import { Lightbox } from '../ui/Lightbox'

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'vehicles', label: 'Fleet Vehicles' },
    { id: 'packing', label: 'Multi-Layer Packing' },
    { id: 'loading', label: 'Truck Loading' },
    { id: 'household', label: 'Household Moves' },
    { id: 'commercial', label: 'Commercial & Office' }
  ]

  const filteredItems =
    activeCategory === 'all'
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <ImageIcon className="w-4 h-4 text-orange-600" />
            <span>Field Operations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2C59] tracking-tight leading-tight mb-4">
            Real Moves. Real Work.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Take a look at our daily operations—our branded vehicles, expert packing of delicate items, secure tie-downs, and disciplined loading teams across Visakhapatnam.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const count =
              cat.id === 'all'
                ? galleryData.length
                : galleryData.filter((g) => g.category === cat.id).length
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#0F2C59] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Uncropped Gallery Grid (columns masonry-style) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="break-inside-avoid bg-white rounded-2xl p-2.5 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group relative overflow-hidden"
            >
              {/* Uncropped Image */}
              <div className="relative overflow-hidden rounded-xl bg-slate-100 flex items-center justify-center">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                {/* Subtle hover overlay with view button */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-2.5">
                <p className="text-xs sm:text-sm font-bold text-slate-800 line-clamp-1">
                  {item.title}
                </p>
                <span className="text-[10px] font-semibold text-orange-600 uppercase tracking-wider">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Lightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onPrev={() =>
            setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1))
          }
          onNext={() =>
            setLightboxIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0))
          }
        />
      </div>
    </section>
  )
}
