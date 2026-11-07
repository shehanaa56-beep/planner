import React from 'react';
import { Droplets, Plus, Minus, RotateCcw, Sparkles } from 'lucide-react';
import { useFitness } from '../../context/FitnessContext';

export const WaterTracker = () => {
  const { profile, waterIntakeMl, addWater, removeWater, resetWater } = useFitness();
  const target = profile.targetWaterMl || 2500;
  const percentage = Math.min(100, Math.round((waterIntakeMl / target) * 100));

  // Represent 10 glasses (250 ml each)
  const totalGlasses = Math.round(target / 250);
  const filledGlasses = Math.min(totalGlasses, Math.floor(waterIntakeMl / 250));

  return (
    <div className="glass-card rounded-3xl p-5 sm:p-6 border border-white shadow-soft relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 -mr-10 -mt-10 w-36 h-36 rounded-full bg-pastel-blue/20 blur-xl pointer-events-none" />

      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-pastel-blue-light border border-pastel-blue/40 flex items-center justify-center text-sky-500 shadow-xs">
            <Droplets className="w-5 h-5 fill-sky-400" />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-charcoal-900">Hydration Tracker</h3>
            <p className="text-xs text-charcoal-500">Target: {target} ml (approx {totalGlasses} glasses)</p>
          </div>
        </div>

        <div className="text-right">
          <span className="text-2xl font-display font-extrabold text-sky-600">{waterIntakeMl}</span>
          <span className="text-xs font-semibold text-charcoal-500"> / {target} ml</span>
        </div>
      </div>

      {/* Visual Progress Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-xs font-semibold text-charcoal-600 mb-1.5">
          <span>Daily Hydration Goal</span>
          <span className="text-sky-600">{percentage}% Reached</span>
        </div>
        <div className="w-full bg-pastel-blue-light/70 rounded-full h-3 p-0.5 border border-pastel-blue/30 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-sky-400 to-pastel-blue rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Visual Glasses Display */}
      <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 my-4">
        {Array.from({ length: totalGlasses }).map((_, i) => {
          const isFilled = i < filledGlasses;
          return (
            <button
              key={i}
              onClick={() => {
                if (isFilled) {
                  removeWater(250);
                } else {
                  addWater(250);
                }
              }}
              title={`Glass ${i + 1} (250ml) - Click to toggle`}
              className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl border transition-all duration-300 ${
                isFilled
                  ? 'bg-sky-50 border-sky-300 text-sky-500 shadow-2xs scale-105'
                  : 'bg-white/60 border-gray-100 text-gray-300 hover:border-sky-200 hover:text-sky-300'
              }`}
            >
              <Droplets className={`w-5 h-5 ${isFilled ? 'fill-sky-400 animate-pulse-slow' : ''}`} />
              <span className="text-[10px] font-semibold mt-1">250ml</span>
            </button>
          );
        })}
      </div>

      {/* Quick Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <button
            onClick={() => addWater(250)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pastel-blue-light text-charcoal-800 text-xs font-semibold hover:bg-pastel-blue/40 border border-pastel-blue/40 transition-colors shadow-2xs active:scale-95"
          >
            <Plus className="w-3.5 h-3.5 text-sky-600" />
            <span>+ 1 Glass (250 ml)</span>
          </button>

          <button
            onClick={() => addWater(500)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pastel-blue-light text-charcoal-800 text-xs font-semibold hover:bg-pastel-blue/40 border border-pastel-blue/40 transition-colors shadow-2xs active:scale-95"
          >
            <Plus className="w-3.5 h-3.5 text-sky-600" />
            <span>+ 1 Bottle (500 ml)</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => removeWater(250)}
            disabled={waterIntakeMl <= 0}
            className="p-1.5 rounded-xl bg-white border border-gray-200 text-charcoal-600 text-xs font-medium hover:bg-gray-50 transition-colors disabled:opacity-40"
            title="Minus 1 glass"
          >
            <Minus className="w-4 h-4" />
          </button>

          <button
            onClick={resetWater}
            className="p-1.5 rounded-xl bg-white border border-gray-200 text-charcoal-400 text-xs font-medium hover:text-charcoal-700 hover:bg-gray-50 transition-colors"
            title="Reset to 0"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
