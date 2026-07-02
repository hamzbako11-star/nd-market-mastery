import { useState } from 'react';
import { Theme } from '../types';
import { FAQ_ITEMS } from '../data';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQProps {
  theme: Theme;
}

export default function FAQ({ theme }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className={`py-24 border-t transition-colors duration-300 ${
        theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-neutral-200'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-500 text-xs font-black tracking-widest uppercase">
            COMMON INQUIRIES & DETAILS
          </span>
          <h2 className={`text-3xl sm:text-4xl font-sans font-black tracking-tight uppercase mt-2 ${
            theme === 'dark' ? 'text-white' : 'text-neutral-950'
          }`}>
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? theme === 'dark'
                      ? 'bg-neutral-950 border-blue-600 shadow-lg shadow-blue-950/10'
                      : 'bg-neutral-50 border-blue-600 shadow-md shadow-neutral-100/10'
                    : theme === 'dark'
                      ? 'bg-neutral-950/40 border-neutral-850 hover:border-neutral-800'
                      : 'bg-white border-neutral-200 hover:border-neutral-300'
                }`}
              >
                {/* Trigger Button */}
                <button
                  id={`faq-accordion-trigger-${idx}`}
                  onClick={() => handleToggle(idx)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-blue-500 shrink-0" />
                    <span className={`text-sm font-black uppercase tracking-tight ${
                      theme === 'dark' ? 'text-white' : 'text-neutral-950'
                    }`}>
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`text-neutral-500 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-blue-500' : ''
                    }`}
                  />
                </button>

                {/* Answer block */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className={`px-5 pb-6 md:px-6 md:pb-8 text-xs sm:text-sm leading-relaxed ${
                        theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
                      }`}>
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
