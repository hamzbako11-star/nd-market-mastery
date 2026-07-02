import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles, Send, MessageCircle } from 'lucide-react';
import { Theme } from '../types';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Syllabus', href: '#syllabus' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Results', href: '#results' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? theme === 'dark'
            ? 'bg-neutral-950/80 border-b border-neutral-900 backdrop-blur-md shadow-lg shadow-neutral-950/10'
            : 'bg-white/80 border-b border-neutral-200 backdrop-blur-md shadow-md shadow-neutral-100/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-lg tracking-tighter shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-all">
                ND
              </div>
              <div className="flex flex-col">
                <span className={`text-sm font-black tracking-widest ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-950'
                }`}>
                  MARKET MASTERY
                </span>
                <span className="text-[9px] text-blue-500 font-bold tracking-widest uppercase">
                  FOREX EDUCATION & MENTORSHIP
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-semibold tracking-wider uppercase transition-colors hover:text-blue-500 ${
                  theme === 'dark' ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick CTAs and Toggles */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Telegram Shortcut */}
            <a
              id="header-telegram-shortcut"
              href="https://t.me/ndmarketmastery"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-xl transition-all ${
                theme === 'dark' 
                  ? 'bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-blue-400 hover:bg-neutral-850' 
                  : 'bg-neutral-100 border border-neutral-200 text-neutral-600 hover:text-blue-600 hover:bg-neutral-50'
              }`}
              title="Join Telegram Channel"
            >
              <Send size={16} />
            </a>

            {/* Theme Toggle Button */}
            <button
              id="header-theme-toggle"
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl border transition-all ${
                theme === 'dark'
                  ? 'bg-neutral-900 border-neutral-850 text-yellow-400 hover:bg-neutral-800'
                  : 'bg-neutral-100 border-neutral-200 text-neutral-700 hover:bg-neutral-200'
              }`}
              aria-label="Toggle Theme Mode"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Action VIP button */}
            <a
              id="header-vip-enroll-btn"
              href="#services"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-wider uppercase py-2.5 px-5 rounded-xl transition-all hover:scale-[1.02] shadow-md shadow-blue-500/10 flex items-center gap-1.5"
            >
              <Sparkles size={14} /> VIP Access
            </a>
          </div>

          {/* Controls for Mobile View */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Theme Switcher */}
            <button
              id="mobile-theme-toggle"
              onClick={toggleTheme}
              className={`p-2 rounded-lg border transition-all ${
                theme === 'dark'
                  ? 'bg-neutral-900 border-neutral-800 text-yellow-400'
                  : 'bg-neutral-100 border-neutral-200 text-neutral-700'
              }`}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Mobile Hamburguer trigger */}
            <button
              id="mobile-drawer-trigger"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg border transition-all ${
                theme === 'dark'
                  ? 'bg-neutral-900 border-neutral-800 text-neutral-300'
                  : 'bg-neutral-100 border-neutral-200 text-neutral-700'
              }`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Slide-out Mobile Drawer */}
      {isOpen && (
        <div className={`lg:hidden border-t ${
          theme === 'dark' ? 'bg-neutral-950 border-neutral-900' : 'bg-white border-neutral-200'
        } shadow-xl animate-in fade-in slide-in-from-top-4 duration-200`}>
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-colors ${
                  theme === 'dark'
                    ? 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-4 border-t border-neutral-800/20 grid grid-cols-2 gap-2">
              <a
                id="mobile-telegram-channel-btn"
                href="https://t.me/ndmarketmastery"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-xs font-bold transition-all ${
                  theme === 'dark' ? 'bg-neutral-900 text-neutral-300 border border-neutral-800' : 'bg-neutral-100 text-neutral-600 border border-neutral-200'
                }`}
              >
                <Send size={14} className="text-blue-400" /> Telegram
              </a>
              <a
                id="mobile-whatsapp-contact-btn"
                href="https://wa.me/447000000000"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-xs font-bold transition-all ${
                  theme === 'dark' ? 'bg-neutral-900 text-neutral-300 border border-neutral-800' : 'bg-neutral-100 text-neutral-600 border border-neutral-200'
                }`}
              >
                <MessageCircle size={14} className="text-emerald-500" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
