import { useState } from 'react';
import { Theme } from '../types';
import { TESTIMONIALS } from '../data';
import { ChevronLeft, ChevronRight, MessageSquare, Quote, Trophy, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface StudentResultsProps {
  theme: Theme;
}

export default function StudentResults({ theme }: StudentResultsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currTest = TESTIMONIALS[activeIndex];

  return (
    <section
      id="results"
      className={`py-24 border-t transition-colors duration-300 ${
        theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-neutral-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-500 text-xs font-black tracking-widest uppercase">
            STUDENT SUCCESS EVIDENCE
          </span>
          <h2 className={`text-3xl sm:text-4xl font-sans font-black tracking-tight uppercase mt-2 ${
            theme === 'dark' ? 'text-white' : 'text-neutral-950'
          }`}>
            REAL TRADER VERIFIED RESULTS
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Global Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
          <div className={`p-6 rounded-2xl border text-center relative overflow-hidden ${
            theme === 'dark' ? 'bg-neutral-950/40 border-neutral-850' : 'bg-neutral-50 border-neutral-200'
          }`}>
            <span className="text-4xl sm:text-5xl font-sans font-black tracking-tight text-blue-500 block mb-1">
              1,000+
            </span>
            <span className={`text-[10px] font-bold font-mono tracking-widest uppercase block ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              Global Students Trained
            </span>
          </div>

          <div className={`p-6 rounded-2xl border text-center relative overflow-hidden ${
            theme === 'dark' ? 'bg-neutral-950/40 border-neutral-850' : 'bg-neutral-50 border-neutral-200'
          }`}>
            <span className="text-4xl sm:text-5xl font-sans font-black tracking-tight text-emerald-500 block mb-1">
              95%
            </span>
            <span className={`text-[10px] font-bold font-mono tracking-widest uppercase block ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              Satisfaction Rate
            </span>
          </div>

          <div className={`p-6 rounded-2xl border text-center relative overflow-hidden ${
            theme === 'dark' ? 'bg-neutral-950/40 border-neutral-850' : 'bg-neutral-50 border-neutral-200'
          }`}>
            <span className="text-4xl sm:text-5xl font-sans font-black tracking-tight text-blue-400 block mb-1">
              5,000+
            </span>
            <span className={`text-[10px] font-bold font-mono tracking-widest uppercase block ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              Mentorship Hours Logged
            </span>
          </div>
        </div>

        {/* Carousel Testimonial Panel */}
        <div className="max-w-4xl mx-auto relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currTest.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className={`rounded-2xl border p-6 md:p-10 relative overflow-hidden shadow-xl ${
                theme === 'dark' ? 'bg-neutral-950 border-neutral-850' : 'bg-neutral-50 border-neutral-250'
              }`}
            >
              {/* Giant Watermark Icon */}
              <Quote className="absolute right-6 top-6 text-neutral-800/10 w-24 h-24 pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
                
                {/* Profile Circle & Meta (Col 4) */}
                <div className="md:col-span-4 flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-500 opacity-25 blur" />
                    <img
                      src={currTest.avatar}
                      alt={currTest.name}
                      referrerPolicy="no-referrer"
                      className="w-20 h-20 rounded-full object-cover relative z-10 border-2 border-neutral-900"
                    />
                    {/* Floating medal */}
                    <div className="absolute bottom-0 right-0 z-20 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center border border-neutral-900">
                      <Trophy size={11} />
                    </div>
                  </div>

                  <h4 className={`text-base font-black ${theme === 'dark' ? 'text-white' : 'text-neutral-950'}`}>
                    {currTest.name}
                  </h4>
                  <p className="text-[10px] text-neutral-500 font-mono mt-0.5">{currTest.country}</p>
                  <span className="text-[9px] text-blue-500 font-bold uppercase tracking-widest mt-2 px-2 py-0.5 rounded bg-blue-950/30 border border-blue-900/40">
                    Graduated {currTest.date}
                  </span>
                </div>

                {/* Testimonial Core Stats & text (Col 8) */}
                <div className="md:col-span-8 flex flex-col">
                  
                  {/* Performance stats highlights */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-neutral-850/45">
                    <div>
                      <span className="text-xs text-neutral-500 font-bold uppercase tracking-widest block mb-0.5">Verified Profit</span>
                      <span className="text-xl font-bold font-mono text-emerald-400">{currTest.profit}</span>
                    </div>
                    <div>
                      <span className="text-xs text-neutral-500 font-bold uppercase tracking-widest block mb-0.5">Win Rate Edge</span>
                      <span className="text-xl font-bold font-mono text-blue-400">{currTest.winrate}</span>
                    </div>
                  </div>

                  {/* Before / After comparison */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                    <div className="p-3 rounded-xl bg-red-950/15 border border-red-500/20 text-red-400">
                      <span className="text-[9px] font-black uppercase tracking-widest block mb-0.5">Before ND Mastery</span>
                      <p className="text-xs font-sans font-medium">{currTest.before}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-950/15 border border-emerald-500/20 text-emerald-400">
                      <span className="text-[9px] font-black uppercase tracking-widest block mb-0.5">After ND Mastery</span>
                      <p className="text-xs font-sans font-medium">{currTest.after}</p>
                    </div>
                  </div>

                  {/* Review Quote text */}
                  <p className={`text-xs sm:text-sm leading-relaxed italic ${
                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                  }`}>
                    "{currTest.text}"
                  </p>

                </div>

              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              id="testimonial-prev-btn"
              onClick={handlePrev}
              className={`p-3 rounded-xl border transition-all ${
                theme === 'dark'
                  ? 'bg-neutral-950 border-neutral-850 text-neutral-400 hover:text-white hover:bg-neutral-900'
                  : 'bg-white border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
              }`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              id="testimonial-next-btn"
              onClick={handleNext}
              className={`p-3 rounded-xl border transition-all ${
                theme === 'dark'
                  ? 'bg-neutral-950 border-neutral-850 text-neutral-400 hover:text-white hover:bg-neutral-900'
                  : 'bg-white border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
              }`}
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
