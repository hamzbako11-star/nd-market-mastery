import { Theme } from '../types';
import { WHY_CHOOSE_US } from '../data';
import * as LucideIcons from 'lucide-react';

interface WhyChooseUsProps {
  theme: Theme;
}

export default function WhyChooseUs({ theme }: WhyChooseUsProps) {
  
  // Dynamic Icon Renderer
  const renderIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (!IconComponent) return null;
    return <IconComponent size={20} className="text-blue-500" />;
  };

  return (
    <section
      id="why-choose-us"
      className={`py-24 border-t transition-colors duration-300 ${
        theme === 'dark' ? 'bg-neutral-950 border-neutral-900' : 'bg-neutral-50/50 border-neutral-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-500 text-xs font-black tracking-widest uppercase">
            WHY ACCELERATE WITH US?
          </span>
          <h2 className={`text-3xl sm:text-4xl font-sans font-black tracking-tight uppercase mt-2 ${
            theme === 'dark' ? 'text-white' : 'text-neutral-950'
          }`}>
            ND MARKET MASTERY EDGE
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Feature Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((feat, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border flex flex-col gap-4 hover:translate-y-[-2px] transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-neutral-950 border-neutral-850 hover:border-neutral-800 hover:shadow-xl hover:shadow-neutral-950/40'
                  : 'bg-white border-neutral-200 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-100/40'
              }`}
            >
              {/* Icon Frame */}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                theme === 'dark' ? 'bg-neutral-900 border border-neutral-800' : 'bg-neutral-50 border border-neutral-100'
              }`}>
                {renderIcon(feat.iconName)}
              </div>

              {/* Text content */}
              <div>
                <h3 className={`text-sm font-black uppercase tracking-wider mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-900'
                }`}>
                  {feat.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
