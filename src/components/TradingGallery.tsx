import { useState } from 'react';
import { Theme } from '../types';
import { GALLERY_ITEMS } from '../data';
import { Eye, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TradingGalleryProps {
  theme: Theme;
}

export default function TradingGallery({ theme }: TradingGalleryProps) {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Charts' | 'Setups' | 'Sessions' | 'Dashboard' | 'Lifestyle'>('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filters: ('All' | 'Charts' | 'Setups' | 'Sessions' | 'Dashboard' | 'Lifestyle')[] = [
    'All',
    'Charts',
    'Setups',
    'Sessions',
    'Dashboard',
    'Lifestyle'
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedFilter === 'All') return true;
    return item.category === selectedFilter;
  });

  return (
    <section
      id="gallery"
      className={`py-24 border-t transition-colors duration-300 ${
        theme === 'dark' ? 'bg-neutral-950 border-neutral-900' : 'bg-neutral-50/50 border-neutral-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-500 text-xs font-black tracking-widest uppercase">
            VISUAL WORKSPACE & SETUPS
          </span>
          <h2 className={`text-3xl sm:text-4xl font-sans font-black tracking-tight uppercase mt-2 ${
            theme === 'dark' ? 'text-white' : 'text-neutral-950'
          }`}>
            ND TRADING GALLERY GALLERY
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Gallery Filter controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              id={`gallery-filter-${f.toLowerCase()}`}
              onClick={() => setSelectedFilter(f)}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-sans transition-all ${
                selectedFilter === f
                  ? 'bg-blue-600 text-white shadow-lg'
                  : theme === 'dark'
                    ? 'bg-neutral-900 border border-neutral-850 text-neutral-400 hover:text-white'
                    : 'bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-950'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Modern Grid layout with card hover zooms */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`group rounded-2xl border overflow-hidden relative aspect-[3/2] cursor-pointer shadow-lg ${
                  theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-neutral-200'
                }`}
                onClick={() => setLightboxImage(item.imageUrl)}
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Vignette Hover Overlay */}
                <div className="absolute inset-0 bg-neutral-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 z-10">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <Eye size={16} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-white font-sans mt-2">
                    {item.title}
                  </span>
                  <span className="text-[10px] text-neutral-400 font-mono">
                    {item.category}
                  </span>
                </div>

                {/* Left floating category badge in normal view */}
                <div className="absolute top-3 left-3 bg-neutral-950/75 backdrop-blur-md px-2.5 py-0.5 rounded border border-neutral-800/80 text-[8px] font-mono font-black text-blue-400 uppercase tracking-widest z-10">
                  {item.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Fullscreen Lightbox Modal */}
        {lightboxImage && (
          <div
            id="gallery-lightbox-modal"
            className="fixed inset-0 z-[100] bg-neutral-950/95 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setLightboxImage(null)}
          >
            <div className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl border border-neutral-800">
              <img
                src={lightboxImage}
                alt="Expanded trading chart"
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[80vh] object-contain rounded-xl"
              />
              <button
                id="close-lightbox-btn"
                onClick={() => setLightboxImage(null)}
                className="absolute top-3 right-3 bg-neutral-900/80 hover:bg-neutral-850 p-2.5 rounded-full text-white border border-neutral-800"
              >
                ✕
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
