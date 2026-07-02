import { Theme } from '../types';
import { Target, Compass, Award, ShieldCheck } from 'lucide-react';

interface AboutProps {
  theme: Theme;
}

export default function About({ theme }: AboutProps) {
  const lifestyleImage = '/src/assets/images/trading_lifestyle_1782950094741.jpg';

  const pillars = [
    {
      icon: <Target className="text-blue-500" size={20} />,
      title: 'Our Mission',
      text: 'To strip away the retail retail noise and simplify price action delivery. We empower traders globally with structured risk models to build long-term, self-sufficient prop firm funding.'
    },
    {
      icon: <Compass className="text-emerald-500" size={20} />,
      title: 'Our Vision',
      text: 'To form the world\'s most disciplined community of certified, funded traders, operating with institutional precision and structural consistency across global markets.'
    }
  ];

  return (
    <section
      id="about"
      className={`py-24 border-t transition-colors duration-300 ${
        theme === 'dark' ? 'bg-neutral-950 border-neutral-900' : 'bg-neutral-50/50 border-neutral-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-500 text-xs font-black tracking-widest uppercase">
            ESTABLISHED FOREX MENTORSHIP
          </span>
          <h2 className={`text-3xl sm:text-4xl font-sans font-black tracking-tight uppercase mt-2 ${
            theme === 'dark' ? 'text-white' : 'text-neutral-950'
          }`}>
            ABOUT ND MARKET MASTERY
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* About Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visuals & Stats */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Outer soft glowing backdrop */}
              <div className={`absolute -inset-2 rounded-2xl bg-gradient-to-tr from-emerald-500 to-blue-600 opacity-20 blur-xl ${
                theme === 'dark' ? 'opacity-15' : 'opacity-5'
              }`} />

              {/* Luxury Frame Container */}
              <div className={`relative rounded-2xl border overflow-hidden shadow-2xl ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-200'
              }`}>
                <img
                  src={lifestyleImage}
                  alt="ND Market Mastery Executive Workspace"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover hover:scale-[1.03] transition-transform duration-700"
                />

                {/* Floating summary label */}
                <div className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-neutral-800 flex items-center gap-2">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  <span className="text-[10px] text-neutral-300 font-bold uppercase tracking-wide">Institutional Standards</span>
                </div>

                {/* Bottom stats callout */}
                <div className={`p-6 border-t ${theme === 'dark' ? 'border-neutral-800' : 'border-neutral-100'}`}>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="border-r border-neutral-800/10 last:border-0 pr-4">
                      <span className="text-2xl font-black text-blue-500">5,000+</span>
                      <p className="text-[9px] text-neutral-500 font-bold uppercase tracking-widest mt-0.5">Hours Mentored</p>
                    </div>
                    <div>
                      <span className="text-2xl font-black text-emerald-400">100%</span>
                      <p className="text-[9px] text-neutral-500 font-bold uppercase tracking-widest mt-0.5">Direct Transparency</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Copywriting & Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className={`text-xl sm:text-2xl font-black uppercase tracking-tight mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-neutral-900'
            }`}>
              CRAFTING CONSISTENTLY PROFITABLE MARKET ANALYSTS.
            </h3>
            
            <p className={`text-sm sm:text-base leading-relaxed mb-8 ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              ND Market Mastery is a premier forex education company dedicated to helping retail traders transition into consistent profitability. We deliver structured education, direct mentorship, and live market trade recaps. We do not sell get-rich-quick indicator schemes. We build deep structural competency.
            </p>

            {/* Mission & Vision Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-xl border flex flex-col gap-3 transition-all hover:translate-y-[-2px] ${
                    theme === 'dark'
                      ? 'bg-neutral-900/40 border-neutral-800 hover:border-neutral-700'
                      : 'bg-white border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    theme === 'dark' ? 'bg-neutral-850' : 'bg-neutral-100'
                  }`}>
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className={`text-xs font-black uppercase tracking-wider mb-1.5 ${
                      theme === 'dark' ? 'text-white' : 'text-neutral-900'
                    }`}>
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlight Footer Note */}
            <div className="mt-8 flex items-center gap-3 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
              <div className="w-1.5 h-12 bg-blue-600 rounded-full shrink-0" />
              <p className="text-xs text-blue-400 font-sans italic">
                "Our students don\'t rely on alerts. They study, log historical patterns, understand high-timeframe dealer structures, and take control of their own portfolios." — ND Mastery Head Coach
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
