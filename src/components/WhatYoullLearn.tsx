import { useState } from 'react';
import { Theme } from '../types';
import { SYLLABUS_CONCEPTS } from '../data';
import { Search, ChevronDown, BookOpen, Layers, Zap, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface WhatYoullLearnProps {
  theme: Theme;
}

export default function WhatYoullLearn({ theme }: WhatYoullLearnProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Fundamentals' | 'Structure' | 'Advanced' | 'Management'>('All');
  const [activeConceptId, setActiveConceptId] = useState<string | null>(null);

  const categories: ('All' | 'Fundamentals' | 'Structure' | 'Advanced' | 'Management')[] = [
    'All',
    'Fundamentals',
    'Structure',
    'Advanced',
    'Management'
  ];

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Fundamentals': return <BookOpen size={13} />;
      case 'Structure': return <Layers size={13} />;
      case 'Advanced': return <Zap size={13} />;
      case 'Management': return <ShieldCheck size={13} />;
      default: return null;
    }
  };

  const filteredConcepts = SYLLABUS_CONCEPTS.filter((c) => {
    if (selectedCategory === 'All') return true;
    return c.category === selectedCategory;
  });

  return (
    <section
      id="syllabus"
      className={`py-24 border-t transition-colors duration-300 ${
        theme === 'dark' ? 'bg-neutral-950 border-neutral-900' : 'bg-neutral-50/50 border-neutral-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-500 text-xs font-black tracking-widest uppercase">
            COMPREHENSIVE CURRICULUM PLAYBOOK
          </span>
          <h2 className={`text-3xl sm:text-4xl font-sans font-black tracking-tight uppercase mt-2 ${
            theme === 'dark' ? 'text-white' : 'text-neutral-950'
          }`}>
            WHAT YOU WILL MASTER
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          <p className="text-xs text-neutral-400 mt-4 leading-relaxed max-w-xl mx-auto font-sans">
            Explore the 16 core pillars of our institutional mechanical strategy. Select a category below and tap any card to reveal deeper structural context.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`category-tab-${cat.toLowerCase()}`}
              onClick={() => {
                setSelectedCategory(cat);
                setActiveConceptId(null);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold font-sans transition-all flex items-center gap-1.5 ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg'
                  : theme === 'dark'
                    ? 'bg-neutral-900 border border-neutral-850 text-neutral-400 hover:text-white'
                    : 'bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-950'
              }`}
            >
              {getCategoryIcon(cat)}
              {cat}
            </button>
          ))}
        </div>

        {/* Concepts Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          <AnimatePresence mode="popLayout">
            {filteredConcepts.map((concept, idx) => {
              const isActive = activeConceptId === concept.id;
              
              return (
                <motion.div
                  key={concept.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`border rounded-xl p-5 cursor-pointer transition-all ${
                    isActive
                      ? theme === 'dark'
                        ? 'bg-neutral-900 border-blue-500 shadow-xl shadow-blue-950/20 col-span-1 sm:col-span-2 lg:col-span-2'
                        : 'bg-white border-blue-500 shadow-xl col-span-1 sm:col-span-2 lg:col-span-2'
                      : theme === 'dark'
                        ? 'bg-neutral-950 border-neutral-850 hover:border-neutral-800'
                        : 'bg-white border-neutral-200 hover:border-neutral-300'
                  }`}
                  onClick={() => setActiveConceptId(isActive ? null : concept.id)}
                >
                  <div className="flex items-start justify-between mb-3.5">
                    <span className={`px-2 py-0.5 rounded text-[8px] font-mono tracking-wider font-extrabold uppercase ${
                      concept.category === 'Advanced'
                        ? 'bg-red-500/15 text-red-400'
                        : concept.category === 'Structure'
                          ? 'bg-blue-500/15 text-blue-400'
                          : concept.category === 'Management'
                            ? 'bg-emerald-500/15 text-emerald-400'
                            : 'bg-neutral-500/15 text-neutral-400'
                    }`}>
                      {concept.category}
                    </span>
                    <span className="text-xs text-neutral-500 font-mono">#{String(idx + 1).padStart(2, '0')}</span>
                  </div>

                  <h3 className={`text-sm font-black uppercase tracking-tight mb-2 flex items-center justify-between ${
                    theme === 'dark' ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {concept.title}
                    <ChevronDown
                      size={14}
                      className={`text-neutral-500 transition-transform duration-300 ${isActive ? 'rotate-180 text-blue-500' : ''}`}
                    />
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                    {concept.description}
                  </p>

                  {/* Expandable Extra Details */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`mt-4 pt-4 border-t ${
                        theme === 'dark' ? 'border-neutral-800' : 'border-neutral-100'
                      }`}
                    >
                      <h4 className="text-[10px] font-bold font-mono text-blue-500 uppercase tracking-widest mb-1">
                        Professional Deep Dive:
                      </h4>
                      <p className={`text-xs leading-relaxed ${
                        theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
                      }`}>
                        {concept.details}
                      </p>
                    </motion.div>
                  )}

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
