import React, { useState } from 'react';
import {
  CalendarDays,
  CheckCircle2,
  Circle,
  Sparkles,
  Award,
  ArrowRight,
  Heart,
  TrendingUp,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { useFitness } from '../context/FitnessContext';
import { TWELVE_WEEK_PHASES } from '../data/phasesPlan';

export const TwelveWeekJourney = () => {
  const { profile, updateProfile, triggerCelebration } = useFitness();
  const [selectedPhaseIdx, setSelectedPhaseIdx] = useState(0);

  const currentPhase = TWELVE_WEEK_PHASES[selectedPhaseIdx];
  const activeWeek = profile.currentWeek || 3;

  const handleSetCurrentWeek = (wk) => {
    updateProfile({ currentWeek: wk });
    triggerCelebration();
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* Hero Banner */}
      <div className="rounded-3xl gradient-pastel-banner p-6 sm:p-8 border border-white/80 shadow-soft">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-pastel-pink/30 text-pastel-pink-deep text-xs font-semibold mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>12-Week Road to Empowerment</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-charcoal-900 tracking-tight">
              12-Week Fitness Journey
            </h1>
            <p className="text-sm text-charcoal-600 mt-1 max-w-2xl leading-relaxed">
              A phased, realistic blueprint for sustainable strength, posture alignment, and wholesome nutrition without extreme dieting.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-5 py-3 rounded-2xl border border-white shadow-xs self-start md:self-auto">
            <div className="w-10 h-10 rounded-xl bg-pastel-lavender-subtle flex items-center justify-center text-pastel-lavender-deep">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-charcoal-400 font-semibold uppercase tracking-wider">Current Milestone</p>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-extrabold text-charcoal-900">Week {activeWeek}</span>
                <span className="text-xs text-charcoal-500">of 12</span>
              </div>
            </div>
          </div>
        </div>

        {/* 12-Week Timeline Bar */}
        <div className="mt-8 pt-6 border-t border-pastel-pink/20">
          <div className="flex items-center justify-between text-xs font-semibold text-charcoal-600 mb-3">
            <span>Overall 12-Week Timeline</span>
            <span className="text-pastel-pink-deep">{Math.round((activeWeek / 12) * 100)}% Milestone Completed</span>
          </div>

          <div className="grid grid-cols-6 sm:grid-cols-12 gap-1.5 sm:gap-2">
            {Array.from({ length: 12 }, (_, i) => i + 1).map((weekNum) => {
              const isPassed = weekNum < activeWeek;
              const isCurrent = weekNum === activeWeek;

              return (
                <button
                  key={weekNum}
                  onClick={() => handleSetCurrentWeek(weekNum)}
                  title={`Week ${weekNum} - Click to set as active week`}
                  className={`py-3 px-1 rounded-2xl border flex flex-col items-center justify-center transition-all ${
                    isCurrent
                      ? 'bg-charcoal-900 text-white border-charcoal-900 shadow-md ring-2 ring-pastel-pink scale-105 font-bold'
                      : isPassed
                      ? 'bg-pastel-green-light border-pastel-green text-emerald-800'
                      : 'bg-white/70 border-gray-100 text-charcoal-400 hover:border-pastel-pink/40'
                  }`}
                >
                  <span className="text-[10px] uppercase font-semibold">Wk</span>
                  <span className="text-xs font-extrabold mt-0.5">{weekNum}</span>
                  <div className="mt-1">
                    {isPassed ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
                    ) : isCurrent ? (
                      <div className="w-2 h-2 rounded-full bg-pastel-pink animate-ping" />
                    ) : (
                      <Circle className="w-3.5 h-3.5 text-gray-300" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Phase Selector Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {TWELVE_WEEK_PHASES.map((phase, idx) => {
          const isSelected = selectedPhaseIdx === idx;
          const isCurrentPhase = phase.weeks.includes(activeWeek);

          return (
            <button
              key={phase.phaseNumber}
              onClick={() => setSelectedPhaseIdx(idx)}
              className={`p-5 rounded-3xl text-left border transition-all duration-300 relative overflow-hidden ${
                isSelected
                  ? 'bg-white shadow-soft-lg border-pastel-pink ring-2 ring-pastel-pink/30'
                  : 'glass-card hover:bg-white border-white hover:border-pastel-lavender/40'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-pastel-pink-subtle text-pastel-pink-deep">
                  {phase.weeksRange}
                </span>
                {isCurrentPhase && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    Active Phase
                  </span>
                )}
              </div>
              <h3 className="font-display font-bold text-lg text-charcoal-900">{phase.title}</h3>
              <p className="text-xs text-charcoal-500 mt-1 line-clamp-2">{phase.subtitle}</p>
            </button>
          );
        })}
      </div>

      {/* Selected Phase Deep Dive Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white shadow-soft space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-3 py-1 rounded-full bg-pastel-pink-subtle text-pastel-pink-deep text-xs font-bold uppercase tracking-wider">
                {currentPhase.weeksRange}
              </span>
              <span className="px-3 py-1 rounded-full bg-pastel-lavender-subtle text-pastel-lavender-deep text-xs font-bold">
                {currentPhase.badge}
              </span>
            </div>
            <h2 className="font-display text-2xl font-extrabold text-charcoal-900 mt-2">
              {currentPhase.title}
            </h2>
            <p className="text-sm text-charcoal-600 mt-1">{currentPhase.subtitle}</p>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-r from-pastel-pink-light/70 to-pastel-yellow-light/70 border border-white/80 max-w-sm">
            <p className="text-xs text-charcoal-700 italic leading-relaxed">
              "{currentPhase.quote}"
            </p>
          </div>
        </div>

        {/* Phase Objectives */}
        <div>
          <h3 className="font-display font-bold text-base text-charcoal-900 mb-3 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>Core Phase Objectives</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentPhase.objectives.map((obj, i) => (
              <div key={i} className="p-3.5 rounded-2xl bg-white/80 border border-gray-100 flex items-start gap-3 shadow-2xs">
                <div className="w-6 h-6 rounded-full bg-pastel-green-light flex items-center justify-center text-emerald-700 font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </div>
                <p className="text-xs text-charcoal-700 leading-relaxed font-medium">{obj}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Milestones Breakdown */}
        <div>
          <h3 className="font-display font-bold text-base text-charcoal-900 mb-3 flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-pastel-lavender-deep" />
            <span>Weekly Breakdown</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {currentPhase.milestones.map((m) => {
              const isCompleted = m.week < activeWeek;
              const isCurrent = m.week === activeWeek;

              return (
                <div
                  key={m.week}
                  onClick={() => handleSetCurrentWeek(m.week)}
                  className={`cursor-pointer p-4 rounded-2xl border transition-all text-left ${
                    isCurrent
                      ? 'bg-charcoal-900 text-white border-charcoal-900 shadow-sm'
                      : isCompleted
                      ? 'bg-pastel-green-light/40 border-pastel-green text-charcoal-800'
                      : 'bg-white/80 border-gray-100 hover:border-pastel-pink/40 text-charcoal-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${isCurrent ? 'text-pastel-pink' : 'text-pastel-pink-deep'}`}>
                      Week {m.week}
                    </span>
                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                    ) : isCurrent ? (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-pastel-pink text-white">
                        Active
                      </span>
                    ) : (
                      <Circle className="w-4 h-4 text-gray-300" />
                    )}
                  </div>
                  <h4 className={`text-xs font-bold ${isCurrent ? 'text-white' : 'text-charcoal-900'}`}>{m.title}</h4>
                  <p className={`text-[11px] mt-1 leading-relaxed ${isCurrent ? 'text-gray-300' : 'text-charcoal-500'}`}>{m.focus}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Phase Coaching Tips */}
        <div className="p-4 rounded-2xl bg-pastel-lavender-light/50 border border-pastel-lavender/30">
          <div className="flex items-center gap-2 mb-2 font-bold text-xs text-charcoal-800">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>Coach's Guidance for this Phase:</span>
          </div>
          <ul className="space-y-1.5 list-disc list-inside text-xs text-charcoal-600">
            {currentPhase.tips.map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
