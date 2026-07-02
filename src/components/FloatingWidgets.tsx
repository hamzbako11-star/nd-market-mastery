import { useState, useEffect } from 'react';
import { ArrowUp, Sparkles, MessageSquare } from 'lucide-react';
import { Theme } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingWidgetsProps {
  theme: Theme;
}

export default function FloatingWidgets({ theme }: FloatingWidgetsProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCTAClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="floating-interaction-widgets" className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 pointer-events-none">
      
      {/* Floating CTA Button: Join Mentorship WhatsApp/Telegram Link */}
      <AnimatePresence>
        <motion.button
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1 }}
          onClick={handleCTAClick}
          className="pointer-events-auto bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-5 rounded-full shadow-2xl flex items-center gap-2 text-xs font-black uppercase tracking-wider transition-all hover:scale-105 hover:-translate-y-0.5 active:scale-95 shadow-blue-500/25"
        >
          <Sparkles size={14} className="animate-pulse" />
          Join Mentorship
        </motion.button>
      </AnimatePresence>

      {/* Back-to-Top scroll trigger */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={handleScrollToTop}
            className={`pointer-events-auto p-3.5 rounded-full border shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center self-end ${
              theme === 'dark'
                ? 'bg-neutral-900 border-neutral-850 text-neutral-300 hover:text-white hover:bg-neutral-800 shadow-neutral-950/80'
                : 'bg-white border-neutral-200 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50 shadow-neutral-200'
            }`}
            title="Scroll to Top"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
