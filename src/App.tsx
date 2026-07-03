import { useState, useEffect } from 'react';
import { Theme } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import InteractiveChart from './components/InteractiveChart';
import WhatYoullLearn from './components/WhatYoullLearn';
import Roadmap from './components/Roadmap';
import WhyChooseUs from './components/WhyChooseUs';
import StudentResults from './components/StudentResults';
import TradingGallery from './components/TradingGallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import { Sparkles, TrendingUp, Trophy } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Sync theme to root element for any specific utility styling
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.backgroundColor = '#000000';
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#f5f5f5';
    }
  }, [theme]);

  const handleCTA = (subject: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const selectElem = document.getElementById('contact-subject-select') as HTMLSelectElement;
      if (selectElem) {
        selectElem.value = subject;
      }
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-350 overflow-x-hidden ${
      theme === 'dark' 
        ? 'bg-neutral-950 text-white selection:bg-blue-600/30 selection:text-blue-200' 
        : 'bg-neutral-50 text-neutral-950 selection:bg-blue-600/20 selection:text-blue-900'
    }`}>
      
      {/* 1. Header Sticky Navigation */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* 2. Hero Section */}
      <Hero theme={theme} />

      {/* 3. About ND Market Mastery */}
      <About theme={theme} />

      {/* 4. Our Services & Pricing */}
      <Services theme={theme} />

      {/* Embedded Chart Section (Premium Visual Showcase) */}
      <section className={`py-12 border-t ${
        theme === 'dark' ? 'bg-neutral-900/40 border-neutral-850' : 'bg-white border-neutral-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-blue-500 text-xs font-black tracking-widest uppercase">
              INTERACTIVE MARKET SIMULATION
            </span>
            <h2 className={`text-2xl sm:text-3xl font-sans font-black tracking-tight uppercase mt-1.5 ${
              theme === 'dark' ? 'text-white' : 'text-neutral-950'
            }`}>
              TEST YOUR INSTINCTS LIVE
            </h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />
            <p className="text-xs text-neutral-400 mt-3 font-sans">
              Interact with our proprietary ND Terminal below. Setup a trade layout and press simulation to experience mechanical order flow fill patterns.
            </p>
          </div>
          <InteractiveChart theme={theme} />
        </div>
      </section>

      {/* 5. What You'll Learn (16 Concepts filter grid) */}
      <WhatYoullLearn theme={theme} />

      {/* 6. Course Roadmap Timeline */}
      <Roadmap theme={theme} />

      {/* 7. Why Choose Us (8 values) */}
      <WhyChooseUs theme={theme} />

      {/* 8. Student Results Slider & Verified Statistics */}
      <StudentResults theme={theme} />

      {/* 9. Trading Gallery modern filtered grids */}
      <TradingGallery theme={theme} />

      {/* 10. Ultimate Conversion Call-To-Action Banner */}
      <section className={`py-20 border-t relative overflow-hidden ${
        theme === 'dark' ? 'bg-neutral-950 border-neutral-900' : 'bg-neutral-50/50 border-neutral-200'
      }`}>
        {/* Background glow flares */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`p-8 md:p-12 rounded-3xl border text-center relative overflow-hidden ${
            theme === 'dark'
              ? 'bg-neutral-900/60 border-neutral-800 shadow-2xl shadow-blue-950/5'
              : 'bg-white border-neutral-200 shadow-xl shadow-neutral-100'
          }`}>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-2xl" />
            
            <div className="mx-auto mb-4 w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
              <Trophy size={24} />
            </div>

            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-sans font-black tracking-tight uppercase leading-tight mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-neutral-950'
            }`}>
              READY TO BECOME A CONSISTENTLY<br />
              <span className="bg-gradient-to-r from-blue-500 to-emerald-400 bg-clip-text text-transparent">
                PROFITABLE TRADER?
              </span>
            </h2>

            <p className={`text-sm leading-relaxed mb-8 max-w-xl mx-auto ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              Join hundreds of retail traders learning professional price action strategies and securing proprietary funding certificates inside ND Market Mastery.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <button
                id="cta-enroll-now-btn"
                onClick={() => handleCTA('course')}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs tracking-wider uppercase py-4 px-8 rounded-xl transition-all shadow-lg shadow-blue-500/10 flex items-center justify-center gap-1.5 hover:scale-[1.02]"
              >
                Enroll Now
              </button>
              <button
                id="cta-book-mentorship-btn"
                onClick={() => handleCTA('mentorship')}
                className={`w-full sm:w-auto font-extrabold text-xs tracking-wider uppercase py-4 px-8 rounded-xl transition-all border flex items-center justify-center gap-1.5 hover:scale-[1.02] ${
                  theme === 'dark'
                    ? 'bg-neutral-950 hover:bg-neutral-800 border-neutral-800 text-white'
                    : 'bg-white hover:bg-neutral-100 border-neutral-200 text-neutral-800'
                }`}
              >
                Book Mentorship
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 11. FAQ Accordions */}
      <FAQ theme={theme} />

      {/* 12. Contact Form Admission & newsletter */}
      <Contact theme={theme} />

      {/* 13. Footer Risk disclaimer segment */}
      <Footer theme={theme} />

      {/* 14. Floating Accessibility Widgets */}
      <FloatingWidgets theme={theme} />

    </div>
  );
}
