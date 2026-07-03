import { Theme } from '../types';
import { ArrowRight, Sparkles, Shield, DollarSign, TrendingUp, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  theme: Theme;
}

export default function Hero({ theme }: HeroProps) {
  // Let's use our generated high-fidelity hero chart image
  const heroImage = '/src/assets/images/hero_trading_chart_1782950067661.jpg';

  // Currency tags that float around
  const floaters = [
    { text: 'EUR/USD', top: '15%', left: '8%', delay: 0 },
    { text: 'GBP/USD', top: '25%', right: '10%', delay: 1.5 },
    { text: 'XAU/USD', bottom: '20%', left: '12%', delay: 0.8 },
    { text: 'BTC/USD', bottom: '32%', right: '15%', delay: 2.2 },
  ];

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Layer with Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {theme === 'dark' ? (
          <>
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]" />
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-blue-950/25 rounded-full blur-[100px]" />
          </>
        ) : (
          <>
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-blue-100/30 rounded-full blur-[90px]" />
          </>
        )}
      </div>

      {/* Floating Currency Badges */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
        {floaters.map((f, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.35, 0.75, 0.35]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: f.delay,
              ease: 'easeInOut'
            }}
            style={{
              position: 'absolute',
              top: f.top,
              left: f.left,
              right: f.right,
              bottom: f.bottom
            }}
            className={`px-3 py-1.5 rounded-xl border text-[11px] font-mono font-bold tracking-wider shadow-md backdrop-blur-md ${
              theme === 'dark'
                ? 'bg-neutral-900/60 border-neutral-800 text-neutral-300 shadow-neutral-950/45'
                : 'bg-white/75 border-neutral-200 text-neutral-700 shadow-neutral-200/50'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block mr-1.5 animate-pulse" />
            {f.text}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Copy */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left">
            {/* Tagline */}
            <div className="mx-auto lg:mx-0 mb-4">
              <span className={`inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase border ${
                theme === 'dark'
                  ? 'bg-blue-950/35 border-blue-900/60 text-blue-400'
                  : 'bg-blue-50 border-blue-100 text-blue-600'
              }`}>
                <Sparkles size={11} className="animate-spin duration-3000" /> INSTITUTIONAL PRICE ACTION
              </span>
            </div>

            {/* Main Title */}
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-sans font-black tracking-tight leading-[1.08] uppercase mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-neutral-950'
            }`}>
              MASTER THE MARKETS.{' '}
              <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                TRADE WITH CONFIDENCE.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className={`text-sm sm:text-base md:text-lg leading-relaxed mb-8 font-sans ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              Learn professional price action trading, liquidity concepts, risk management, psychology, and institutional strategies from experienced mentors. Cut through retail noise and learn how the markets actually distribute.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                id="hero-start-learning-cta"
                href="#services"
                className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs tracking-wider uppercase py-4 px-8 rounded-xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 hover:translate-x-0.5"
              >
                Start Learning <ArrowRight size={14} />
              </a>
              <a
                id="hero-join-mentorship-cta"
                href="#contact"
                className={`w-full sm:w-auto text-center font-extrabold text-xs tracking-wider uppercase py-4 px-8 rounded-xl transition-all border flex items-center justify-center gap-2 ${
                  theme === 'dark'
                    ? 'bg-neutral-900 hover:bg-neutral-800 border-neutral-800 text-white'
                    : 'bg-white hover:bg-neutral-100 border-neutral-200 text-neutral-800'
                }`}
              >
                Join Mentorship
              </a>
            </div>

            {/* Fast Stats Trust Badges */}
            <div className={`grid grid-cols-3 gap-4 pt-6 border-t ${
              theme === 'dark' ? 'border-neutral-900' : 'border-neutral-200'
            }`}>
              <div className="text-center lg:text-left">
                <div className={`text-xl sm:text-2xl font-black font-sans ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-950'
                }`}>1000+</div>
                <div className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest mt-0.5">Global Students</div>
              </div>
              <div className="text-center lg:text-left border-x border-neutral-800/10 px-4">
                <div className={`text-xl sm:text-2xl font-black font-sans ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-950'
                }`}>95%</div>
                <div className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest mt-0.5">Success Rate</div>
              </div>
              <div className="text-center lg:text-left">
                <div className={`text-xl sm:text-2xl font-black font-sans ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-950'
                }`}>1-on-1</div>
                <div className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest mt-0.5">Live Auditing</div>
              </div>
            </div>

          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer neon border container */}
              <div className={`absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-blue-600 to-emerald-500 opacity-25 blur-lg ${
                theme === 'dark' ? 'opacity-20' : 'opacity-10'
              }`} />
              
              {/* Main Visual Card */}
              <div className={`relative rounded-2xl border overflow-hidden shadow-2xl ${
                theme === 'dark' ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200'
              }`}>
                {/* Image asset with custom styling */}
                <div className="relative aspect-video overflow-hidden group">
                  <img
                    src={heroImage}
                    alt="ND Super Market Mastery Elite Chart Dashboard"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  {/* Decorative Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Glowing tag inside image */}
                  <div className="absolute bottom-3 left-3 bg-neutral-950/75 backdrop-blur-md px-3 py-1 rounded-lg border border-neutral-800/80 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[9px] font-mono font-bold text-emerald-400 tracking-wider">LIVE LIQUIDITY SWEEP</span>
                  </div>
                </div>

                {/* Content block below visual */}
                <div className="p-5 font-sans">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
                      <TrendingUp size={16} />
                    </div>
                    <div>
                      <h4 className={`text-xs font-bold uppercase tracking-wider ${
                        theme === 'dark' ? 'text-white' : 'text-neutral-800'
                      }`}>
                        Smart Money Distribution
                      </h4>
                      <p className="text-[10px] text-neutral-500 font-mono">Mapped Liquidity Targets (HTF)</p>
                    </div>
                  </div>
                  <p className={`text-xs leading-relaxed ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>
                    Ditch complex indicators and delayed signals. We trade exclusively using structural mechanics, mapping out institutional dealers supply blocks, and entering after sweep confirmations.
                  </p>
                </div>
              </div>

              {/* Decorative Floater Info Tag */}
              <div className={`absolute -bottom-6 -right-6 p-4 rounded-xl border shadow-xl flex items-center gap-3 max-w-[210px] backdrop-blur-md hidden sm:flex ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-800 shadow-neutral-950' : 'bg-white border-neutral-200 shadow-neutral-100'
              }`}>
                <div className="w-9 h-9 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <Shield size={18} />
                </div>
                <div className="flex flex-col">
                  <span className={`text-[11px] font-bold ${theme === 'dark' ? 'text-white' : 'text-neutral-800'}`}>
                    FTMO Certified
                  </span>
                  <span className="text-[9px] text-neutral-500 font-mono">Prop Firm Validated Models</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
