import { useState } from 'react';
import { Theme } from '../types';
import { ROADMAP_PHASES } from '../data';
import { Check, CheckCircle2, Award, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface RoadmapProps {
  theme: Theme;
}

export default function Roadmap({ theme }: RoadmapProps) {
  const [activePhase, setActivePhase] = useState<number>(1);
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);

  const handleToggleTopic = (topic: string) => {
    if (completedTopics.includes(topic)) {
      setCompletedTopics(completedTopics.filter(t => t !== topic));
    } else {
      setCompletedTopics([...completedTopics, topic]);
    }
  };

  // Calculate percentage of complete topics for active phase
  const activePhaseData = ROADMAP_PHASES.find(p => p.phase === activePhase);
  const totalTopics = activePhaseData?.topics.length || 0;
  const completedInActive = activePhaseData?.topics.filter(t => completedTopics.includes(t)).length || 0;
  const completionPercent = totalTopics ? Math.round((completedInActive / totalTopics) * 100) : 0;

  return (
    <section
      id="roadmap"
      className={`py-24 border-t transition-colors duration-300 ${
        theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-neutral-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-500 text-xs font-black tracking-widest uppercase">
            LEARNING STAGES & ROADMAP
          </span>
          <h2 className={`text-3xl sm:text-4xl font-sans font-black tracking-tight uppercase mt-2 ${
            theme === 'dark' ? 'text-white' : 'text-neutral-950'
          }`}>
            THE MASTERY JOURNEY TIMELINE
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          <p className="text-xs text-neutral-400 mt-4 leading-relaxed max-w-xl mx-auto font-sans">
            Our 10-Phase chronological training plan. Select any phase in the timeline below to examine sub-modules, and tick them off to simulate your educational progress.
          </p>
        </div>

        {/* Timeline Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Vertical Timeline Steps (1 to 10) */}
          <div className="lg:col-span-5 flex flex-col gap-3 max-h-[580px] overflow-y-auto pr-2 custom-scrollbar">
            {ROADMAP_PHASES.map((ph) => {
              const isActive = ph.phase === activePhase;
              // Check if all topics in this phase are ticked off
              const isPhaseDone = ph.topics.every(t => completedTopics.includes(t));

              return (
                <button
                  key={ph.phase}
                  id={`roadmap-phase-btn-${ph.phase}`}
                  onClick={() => setActivePhase(ph.phase)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                    isActive
                      ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-950/20'
                      : theme === 'dark'
                        ? 'bg-neutral-950 border-neutral-850 text-neutral-400 hover:text-white hover:border-neutral-800'
                        : 'bg-neutral-50 border-neutral-250 text-neutral-600 hover:text-neutral-950 hover:border-neutral-350'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : isPhaseDone
                          ? 'bg-emerald-500/10 text-emerald-400'
                          : theme === 'dark' ? 'bg-neutral-900 text-neutral-300' : 'bg-neutral-200 text-neutral-700'
                    }`}>
                      {ph.phase}
                    </div>
                    <div>
                      <h3 className={`text-xs font-black uppercase tracking-wider ${
                        isActive ? 'text-white' : theme === 'dark' ? 'text-neutral-200' : 'text-neutral-900'
                      }`}>
                        {ph.title}
                      </h3>
                      <p className={`text-[10px] truncate max-w-[210px] ${isActive ? 'text-blue-100' : 'text-neutral-500'}`}>
                        {ph.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {isPhaseDone && (
                      <span className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center text-[10px]">
                        ✓
                      </span>
                    )}
                    <ChevronDown size={14} className={`text-neutral-500 transition-transform ${isActive ? 'rotate-[-90deg] text-white' : ''}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Expanded Topics Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className={`p-6 md:p-8 rounded-2xl border ${
                  theme === 'dark' ? 'bg-neutral-950 border-neutral-850' : 'bg-neutral-50 border-neutral-200'
                } shadow-xl`}
              >
                
                {/* Phase Title Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800/20 mb-6">
                  <div>
                    <span className="px-2.5 py-1 rounded bg-blue-600/10 text-blue-500 text-[10px] font-mono font-bold uppercase tracking-wider">
                      PHASE {activePhaseData?.phase} OF 10
                    </span>
                    <h3 className={`text-lg font-black uppercase tracking-tight mt-1.5 ${
                      theme === 'dark' ? 'text-white' : 'text-neutral-950'
                    }`}>
                      {activePhaseData?.title}
                    </h3>
                  </div>

                  {/* Dynamic Progress indicator */}
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest font-sans">
                        Phase Complete
                      </div>
                      <div className={`text-xs font-mono font-bold ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>
                        {completionPercent}%
                      </div>
                    </div>
                    {/* Ring progress bar or simple numeric visual */}
                    <div className="w-12 h-12 rounded-full border border-neutral-800/20 flex items-center justify-center relative overflow-hidden bg-neutral-900/40">
                      <span className="text-xs font-black font-mono text-blue-500">
                        {completedInActive}/{totalTopics}
                      </span>
                    </div>
                  </div>
                </div>

                <p className={`text-xs leading-relaxed mb-6 font-sans ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                }`}>
                  {activePhaseData?.description}
                </p>

                {/* Topics interactive checklist */}
                <div className="space-y-3 mb-8">
                  <span className="text-[10px] font-bold font-mono text-neutral-400 tracking-wider uppercase block">
                    Interactive Modules Progress checklist:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activePhaseData?.topics.map((topic, i) => {
                      const isDone = completedTopics.includes(topic);
                      return (
                        <div
                          key={i}
                          id={`roadmap-topic-checklist-${i}`}
                          onClick={() => handleToggleTopic(topic)}
                          className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center gap-3 ${
                            isDone
                              ? 'bg-emerald-500/5 border-emerald-500/25 text-emerald-300'
                              : theme === 'dark'
                                ? 'bg-neutral-900/50 border-neutral-850 text-neutral-400 hover:border-neutral-800 hover:text-white'
                                : 'bg-white border-neutral-250 text-neutral-600 hover:border-neutral-350 hover:text-neutral-950'
                          }`}
                        >
                          <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all shrink-0 ${
                            isDone
                              ? 'bg-emerald-500 border-emerald-400 text-neutral-950'
                              : 'border-neutral-700 bg-neutral-900/20'
                          }`}>
                            {isDone && <Check size={12} className="stroke-[3]" />}
                          </div>
                          <span className="text-xs font-sans font-medium">{topic}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Phase Completion Reward / Next step */}
                {completionPercent === 100 ? (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 animate-bounce">
                    <Award size={20} className="text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-xs font-black text-emerald-400 uppercase tracking-wide block">
                        Phase Complete!
                      </span>
                      <p className="text-[10px] text-neutral-400">
                        Brilliant! Move on to Phase {activePhase < 10 ? activePhase + 1 : '10'} to unlock next modules.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shrink-0" />
                    <span className="text-[10px] text-neutral-400 leading-relaxed font-sans">
                      Complete all modules in this phase to achieve certification progress. All strategies strictly comply with FTMO/Topstep assessments.
                    </span>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
