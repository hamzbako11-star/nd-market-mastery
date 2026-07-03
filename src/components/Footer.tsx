import { Theme } from '../types';
import { Send, MessageCircle, Instagram, Facebook, ArrowUp } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  theme: Theme;
}

export default function Footer({ theme }: FooterProps) {
  
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-landing-footer"
      className={`border-t transition-colors duration-300 ${
        theme === 'dark' ? 'bg-neutral-950 border-neutral-900 text-neutral-400' : 'bg-neutral-950 border-neutral-900 text-neutral-300'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Segment: Logo brand and Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-neutral-900">
          
          {/* Logo Brand Descriptor (Col 5) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center">
              <Logo theme="dark" />
            </div>
            
            <p className="text-xs leading-relaxed max-w-sm text-neutral-400 font-sans">
              Accelerate your trading career using institutional price action mechanics. Ditch basic retail lagging indicators. Master liquidity structures, premium pricing, and strategic risk distribution.
            </p>
          </div>

          {/* Quick Navigation Links (Col 4) */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-2 font-mono">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-sans">
              <a href="#about" className="hover:text-blue-500 transition-colors">About Us</a>
              <a href="#services" className="hover:text-blue-500 transition-colors">Course Tiers</a>
              <a href="#syllabus" className="hover:text-blue-500 transition-colors">Syllabus Playbook</a>
              <a href="#roadmap" className="hover:text-blue-500 transition-colors">Roadmap Timeline</a>
              <a href="#results" className="hover:text-blue-500 transition-colors">Student Results</a>
              <a href="#gallery" className="hover:text-blue-500 transition-colors">Trading Gallery</a>
              <a href="#faq" className="hover:text-blue-500 transition-colors">FAQ</a>
              <a href="#contact" className="hover:text-blue-500 transition-colors">Contact Support</a>
            </div>
          </div>

          {/* Connect & Back-to-top segment (Col 3) */}
          <div className="md:col-span-3 flex flex-col gap-4 items-start md:items-end">
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-2 font-mono">
              Join Community
            </h4>
            
            <div className="flex gap-2">
              <a
                id="footer-telegram-link"
                href="https://t.me/NdSuperMarketMastery"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-900 border border-neutral-850 hover:text-blue-400 hover:bg-neutral-800 text-neutral-300 transition-all"
              >
                <Send size={14} />
              </a>
              <a
                id="footer-whatsapp-link"
                href="https://wa.me/447000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-900 border border-neutral-850 hover:text-emerald-400 hover:bg-neutral-800 text-neutral-300 transition-all"
              >
                <MessageCircle size={14} />
              </a>
              <a
                id="footer-instagram-link"
                href="https://instagram.com/ndmarketmastery"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-900 border border-neutral-850 hover:text-pink-400 hover:bg-neutral-800 text-neutral-300 transition-all"
              >
                <Instagram size={14} />
              </a>
            </div>

            <button
              id="footer-back-to-top-btn"
              onClick={handleScrollToTop}
              className="mt-4 flex items-center gap-1.5 py-1.5 px-3.5 rounded-lg bg-neutral-900 border border-neutral-850 hover:border-neutral-700 text-[10px] font-bold text-white transition-all self-start md:self-end"
            >
              Back to Top <ArrowUp size={12} />
            </button>
          </div>

        </div>

        {/* Middle Segment: Regulatory Forex Risk Disclaimer (Crucial for luxury financial apps) */}
        <div className="py-8 border-b border-neutral-900">
          <span className="text-[9px] font-black uppercase tracking-widest text-red-500 block mb-2 font-mono">
            IMPORTANT REGULATORY RISK WARNING DISCLAIMER
          </span>
          <p className="text-[10px] leading-relaxed text-neutral-500 font-sans">
            Trading foreign exchange (Forex) and Contracts for Difference (CFDs) on margin carries a high level of risk, and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade foreign exchange you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose. All materials, chart examples, setups, markup analysis, and video lectures provided by ND Super Market Mastery are for educational, training, and theoretical simulation purposes only, and do not constitute financial advice, signals, or solicitation to trade actual capital.
          </p>
        </div>

        {/* Bottom Segment: Credits, Legal policies and copyrights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-neutral-500 font-mono">
          <div>
            © {new Date().getFullYear()} ND Super Market Mastery. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#about" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#about" className="hover:text-neutral-300 transition-colors">Risk Disclaimer</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
