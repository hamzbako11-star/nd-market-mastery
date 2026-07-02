import { useState } from 'react';
import { Theme } from '../types';
import { SERVICES } from '../data';
import { Check, Sparkles, AlertCircle, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesProps {
  theme: Theme;
}

export default function Services({ theme }: ServicesProps) {
  // Let's implement a pricing toggle: "One-Time Access" vs "Subscription/Package Savings"
  const [billingPeriod, setBillingPeriod] = useState<'individual' | 'package'>('individual');

  const handleEnroll = (serviceName: string) => {
    // Navigate to contact or checkout form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Pre-populate contact course field if needed
      const selectElem = document.getElementById('contact-subject-select') as HTMLSelectElement;
      if (selectElem) {
        if (serviceName.includes('Course')) {
          selectElem.value = 'course';
        } else if (serviceName.includes('Mentorship')) {
          selectElem.value = 'mentorship';
        } else {
          selectElem.value = 'vip';
        }
      }
    }
  };

  // Adjust prices based on toggle
  const getPrice = (basePrice: number, serviceId: string) => {
    if (billingPeriod === 'package') {
      if (serviceId === 'course') {
        // Bundle with VIP Community (1 Month)
        return { value: 65, label: 'Course + 1Mo VIP' };
      }
      if (serviceId === 'mentorship') {
        // Bundle 3 sessions
        return { value: 180, label: '3-Session Pack' };
      }
      if (serviceId === 'community') {
        // Quarterly savings
        return { value: 75, label: '3 Months VIP' };
      }
    }
    return { value: basePrice, label: serviceId === 'community' ? 'Monthly VIP' : 'One-Time' };
  };

  return (
    <section
      id="services"
      className={`py-24 border-t transition-colors duration-300 ${
        theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-neutral-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-500 text-xs font-black tracking-widest uppercase">
            STRUCTURED SERVICES & PRICING
          </span>
          <h2 className={`text-3xl sm:text-4xl font-sans font-black tracking-tight uppercase mt-2 ${
            theme === 'dark' ? 'text-white' : 'text-neutral-950'
          }`}>
            OUR EDUCATION TIER MODULES
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          <p className="text-xs text-neutral-400 mt-4 leading-relaxed max-w-xl mx-auto font-sans">
            Choose the perfect pathway for your trading career. Accelerate with a structured course, receive direct private feedback, or trade live inside our elite lounge.
          </p>
        </div>

        {/* Pricing Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className={`p-1.5 rounded-2xl border flex items-center gap-1 ${
            theme === 'dark' ? 'bg-neutral-950 border-neutral-800' : 'bg-neutral-100 border-neutral-200'
          }`}>
            <button
              id="billing-toggle-individual"
              onClick={() => setBillingPeriod('individual')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold font-sans transition-all flex items-center gap-1.5 ${
                billingPeriod === 'individual'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-neutral-500 hover:text-neutral-400'
              }`}
            >
              Standard Rates
            </button>
            <button
              id="billing-toggle-package"
              onClick={() => setBillingPeriod('package')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold font-sans transition-all flex items-center gap-1.5 ${
                billingPeriod === 'package'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-neutral-500 hover:text-neutral-400'
              }`}
            >
              Mastery Bundles
              <span className="px-1.5 py-0.5 rounded text-[8px] bg-emerald-500 text-neutral-950 font-black tracking-widest uppercase animate-pulse">
                SAVE
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {SERVICES.map((srv) => {
            const pricing = getPrice(srv.price, srv.id);
            return (
              <div
                key={srv.id}
                className={`relative rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] ${
                  srv.isPopular
                    ? theme === 'dark'
                      ? 'bg-neutral-950 border-blue-600 shadow-2xl shadow-blue-950/25'
                      : 'bg-white border-blue-600 shadow-xl shadow-blue-100/35'
                    : theme === 'dark'
                      ? 'bg-neutral-950/50 border-neutral-850 hover:border-neutral-800'
                      : 'bg-neutral-50 border-neutral-250 hover:border-neutral-300'
                }`}
              >
                {/* Popularity Badge */}
                {srv.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-[9px] font-black tracking-widest uppercase py-1 px-4 rounded-full shadow flex items-center gap-1">
                    <Sparkles size={10} /> RECOMMENDED MENTORSHIP
                  </div>
                )}

                <div>
                  {/* Name and description */}
                  <h3 className={`text-lg font-black uppercase tracking-tight mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {srv.name}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed mb-6 font-sans">
                    {srv.description}
                  </p>

                  {/* Pricing figures */}
                  <div className="flex items-baseline gap-1.5 mb-6">
                    <span className={`text-4xl font-sans font-black tracking-tight ${
                      theme === 'dark' ? 'text-white' : 'text-neutral-950'
                    }`}>
                      ${pricing.value}
                    </span>
                    <span className="text-[10px] text-neutral-500 font-mono font-bold uppercase tracking-wider">
                      / {pricing.label}
                    </span>
                  </div>

                  {/* Syllabus / Features check list */}
                  <div className={`border-t pt-6 mb-8 ${theme === 'dark' ? 'border-neutral-900' : 'border-neutral-200'}`}>
                    <span className="text-[10px] font-bold font-mono text-neutral-400 tracking-wider uppercase block mb-3">
                      Core Modules Include:
                    </span>
                    <ul className="space-y-3.5">
                      {srv.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-sans">
                          <div className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={10} className="stroke-[3]" />
                          </div>
                          <span className={theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Enrollment Action Button */}
                <button
                  id={`enroll-btn-${srv.id}`}
                  onClick={() => handleEnroll(srv.name)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 hover:scale-[1.01] ${
                    srv.isPopular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                      : theme === 'dark'
                        ? 'bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 hover:text-white'
                        : 'bg-white hover:bg-neutral-100 border border-neutral-300 text-neutral-800'
                  }`}
                >
                  <ShoppingCart size={13} /> {srv.buttonText}
                </button>

              </div>
            );
          })}
        </div>

        {/* Dynamic Pricing Inquiries Disclaimer */}
        <div className="mt-12 flex items-start gap-3 bg-neutral-950/40 p-4 border border-neutral-850 rounded-xl max-w-xl mx-auto">
          <AlertCircle size={16} className="text-blue-500 shrink-0 mt-0.5" />
          <p className="text-[11px] leading-relaxed text-neutral-500 font-sans">
            <strong>Custom Corporate Plans or Multi-Seat Licenses?</strong> Our modules align exactly with global prop firm guidelines (FTMO, Topstep, MyForexFunds). If your trading team requires custom bulk assessments, contact us directly via email or the support form below.
          </p>
        </div>

      </div>
    </section>
  );
}
