import React, { useState } from 'react';
import { Theme } from '../types';
import { Send, Phone, Mail, MapPin, Instagram, MessageCircle, Send as TelegramIcon, Facebook, Youtube, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactProps {
  theme: Theme;
}

export default function Contact({ theme }: ContactProps) {
  // Contact Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'course',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Newsletter states
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please input your trade description or question';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    return errors;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: 'course', message: '' });
    }, 1500);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterError('');
    if (!newsletterEmail.trim()) {
      setNewsletterError('Email is required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(newsletterEmail)) {
      setNewsletterError('Please enter a valid email address');
      return;
    }

    setNewsletterSuccess(true);
    setNewsletterEmail('');
  };

  const socialLinks = [
    { name: 'WhatsApp', href: 'https://wa.me/447000000000', icon: <MessageCircle size={18} />, color: 'text-emerald-500 hover:bg-emerald-500/10' },
    { name: 'Telegram', href: 'https://t.me/ndmarketmastery', icon: <TelegramIcon size={18} />, color: 'text-blue-400 hover:bg-blue-400/10' },
    { name: 'Instagram', href: 'https://instagram.com/ndmarketmastery', icon: <Instagram size={18} />, color: 'text-pink-500 hover:bg-pink-500/10' },
    { name: 'TikTok', href: 'https://tiktok.com/@ndmarketmastery', icon: <span className="font-extrabold text-xs">TT</span>, color: 'text-neutral-200 hover:bg-neutral-800' },
    { name: 'Facebook', href: 'https://facebook.com/ndmarketmastery', icon: <Facebook size={18} />, color: 'text-blue-600 hover:bg-blue-600/10' },
  ];

  return (
    <section
      id="contact"
      className={`py-24 border-t transition-colors duration-300 ${
        theme === 'dark' ? 'bg-neutral-950 border-neutral-900' : 'bg-neutral-50/50 border-neutral-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-500 text-xs font-black tracking-widest uppercase">
            GET IN TOUCH & ACCELERATE
          </span>
          <h2 className={`text-3xl sm:text-4xl font-sans font-black tracking-tight uppercase mt-2 ${
            theme === 'dark' ? 'text-white' : 'text-neutral-950'
          }`}>
            CONNECT WITH EXPERT MENTORS
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info & Newsletters (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Contact hotlinks block */}
            <div className={`p-6 rounded-2xl border ${
              theme === 'dark' ? 'bg-neutral-900/60 border-neutral-850 shadow-xl' : 'bg-white border-neutral-250'
            }`}>
              <h3 className={`text-sm font-black uppercase tracking-wider mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-neutral-950'
              }`}>
                OFFICIAL CHANNEL INQUIRIES
              </h3>

              <div className="space-y-4 font-sans">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider block">Location</span>
                    <span className={`text-xs ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-800'}`}>
                      London, United Kingdom • Institutional Hub
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider block">Email Support</span>
                    <a href="mailto:support@ndmarketmastery.com" className="text-xs text-blue-400 hover:underline">
                      support@ndmarketmastery.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider block">Direct Telegram Hotline</span>
                    <span className={`text-xs ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-800'}`}>
                      @ndmarketmastery_support
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels icon matrices */}
              <div className="mt-8 pt-6 border-t border-neutral-850/30">
                <span className="text-[10px] font-bold font-mono text-neutral-400 tracking-wider uppercase block mb-3">
                  Connect on Socials:
                </span>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((sc, idx) => (
                    <a
                      key={idx}
                      href={sc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2.5 rounded-xl border border-neutral-850 bg-neutral-950 flex items-center justify-center transition-all hover:scale-105 ${sc.color}`}
                      title={sc.name}
                    >
                      {sc.icon}
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* Newsletter Subscription Block */}
            <div className={`p-6 rounded-2xl border ${
              theme === 'dark' ? 'bg-neutral-900/60 border-neutral-850 shadow-xl' : 'bg-white border-neutral-250'
            }`}>
              <h3 className={`text-sm font-black uppercase tracking-wider mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-neutral-950'
              }`}>
                WEEKLY PRICE ACTION INTEL
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed mb-5 font-sans">
                Join 5,000+ traders receiving our exclusive Sunday markup reviews, pre-market liquidity forecasts, and psychological checklists.
              </p>

              {newsletterSuccess ? (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3">
                  <ShieldCheck size={18} className="text-emerald-400 shrink-0" />
                  <span className="text-xs font-sans font-bold text-emerald-400">
                    Welcome to the Inner Circle! Check your inbox soon.
                  </span>
                </div>
              ) : (
                <form id="newsletter-subscription-form" onSubmit={handleNewsletterSubmit} className="flex gap-2 font-sans">
                  <div className="flex-1">
                    <input
                      id="newsletter-email-input"
                      type="email"
                      placeholder="Enter your email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className={`w-full text-xs p-3 rounded-xl border outline-none font-sans ${
                        theme === 'dark'
                          ? 'bg-neutral-950 border-neutral-800 text-white focus:border-blue-500'
                          : 'bg-neutral-100 border-neutral-300 text-neutral-950 focus:border-blue-500'
                      }`}
                    />
                    {newsletterError && <p className="text-[10px] text-red-500 mt-1">{newsletterError}</p>}
                  </div>
                  <button
                    id="newsletter-submit-btn"
                    type="submit"
                    className="py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-500 text-white shrink-0 shadow-lg shadow-blue-500/10 transition-all"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Right Column: Contact form with validates (Col 7) */}
          <div className="lg:col-span-7">
            <div className={`p-6 md:p-8 rounded-2xl border ${
              theme === 'dark' ? 'bg-neutral-900/60 border-neutral-850 shadow-xl' : 'bg-white border-neutral-250'
            }`}>
              
              <h3 className={`text-sm font-black uppercase tracking-wider mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-neutral-950'
              }`}>
                SUBMIT ADMISSION REQUEST
              </h3>

              {isSubmitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 text-center flex flex-col items-center justify-center bg-emerald-500/5 border border-emerald-500/25 rounded-xl"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                    <ShieldCheck size={28} />
                  </div>
                  <h4 className="text-base font-black text-emerald-400 uppercase tracking-wide mb-1.5">
                    RECEPTION SECURED!
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans max-w-sm">
                    Thank you! Your inquiry has been routed to our admission mentors. We will review your profile and reach out via email within 12 hours.
                  </p>
                  <button
                    id="submit-success-reset-btn"
                    onClick={() => setIsSubmitSuccess(false)}
                    className="mt-5 py-2 px-5 rounded-lg text-xs font-bold bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form id="contact-validation-form" onSubmit={handleFormSubmit} className="space-y-5 font-sans">
                  
                  {/* Name Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name-input" className="text-[10px] font-bold font-mono text-neutral-400 uppercase tracking-widest">
                      Full Name
                    </label>
                    <input
                      id="contact-name-input"
                      type="text"
                      name="name"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full p-3.5 text-xs rounded-xl border outline-none ${
                        theme === 'dark'
                          ? 'bg-neutral-950 border-neutral-800 text-white focus:border-blue-500'
                          : 'bg-white border-neutral-250 text-neutral-950 focus:border-blue-500 shadow-sm'
                      }`}
                    />
                    {formErrors.name && <p className="text-[10px] text-red-500 font-mono mt-0.5">{formErrors.name}</p>}
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email-input" className="text-[10px] font-bold font-mono text-neutral-400 uppercase tracking-widest">
                      Email Address
                    </label>
                    <input
                      id="contact-email-input"
                      type="email"
                      name="email"
                      placeholder="e.g. jdoe@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full p-3.5 text-xs rounded-xl border outline-none ${
                        theme === 'dark'
                          ? 'bg-neutral-950 border-neutral-800 text-white focus:border-blue-500'
                          : 'bg-white border-neutral-250 text-neutral-950 focus:border-blue-500 shadow-sm'
                      }`}
                    />
                    {formErrors.email && <p className="text-[10px] text-red-500 font-mono mt-0.5">{formErrors.email}</p>}
                  </div>

                  {/* Subject selector */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-subject-select" className="text-[10px] font-bold font-mono text-neutral-400 uppercase tracking-widest">
                      Select Interest Module
                    </label>
                    <select
                      id="contact-subject-select"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full p-3.5 text-xs rounded-xl border outline-none cursor-pointer appearance-none ${
                        theme === 'dark'
                          ? 'bg-neutral-950 border-neutral-800 text-white focus:border-blue-500'
                          : 'bg-white border-neutral-250 text-neutral-950 focus:border-blue-500 shadow-sm'
                      }`}
                    >
                      <option value="course">Premium Forex Course ($50)</option>
                      <option value="mentorship">One-on-One Mentorship ($75)</option>
                      <option value="vip">VIP Discord Community ($30/mo)</option>
                      <option value="partnership">Prop Firm Assessment / Partnership</option>
                    </select>
                  </div>

                  {/* Message details text-area */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message-input" className="text-[10px] font-bold font-mono text-neutral-400 uppercase tracking-widest">
                      Your Trading Experience & Background
                    </label>
                    <textarea
                      id="contact-message-input"
                      name="message"
                      rows={4}
                      placeholder="Describe your current trading background, how many accounts you have traded, or what you struggle with (e.g., discipline, analysis)..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full p-3.5 text-xs rounded-xl border outline-none ${
                        theme === 'dark'
                          ? 'bg-neutral-950 border-neutral-800 text-white focus:border-blue-500'
                          : 'bg-white border-neutral-250 text-neutral-950 focus:border-blue-500 shadow-sm'
                      }`}
                    />
                    {formErrors.message && <p className="text-[10px] text-red-500 font-mono mt-0.5">{formErrors.message}</p>}
                  </div>

                  {/* Submit Trigger */}
                  <button
                    id="contact-submit-trigger"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl text-xs font-bold tracking-wider uppercase bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white shadow-lg shadow-blue-500/10 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                  >
                    <Send size={14} />
                    {isSubmitting ? 'Routing Secured Data...' : 'Submit Admission Request'}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
