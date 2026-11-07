import React from 'react';
import { Heart, Sparkles, ShieldCheck } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="mt-16 pb-24 lg:pb-12 pt-8 border-t border-pastel-pink/20 bg-white/40 text-charcoal-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-lg bg-pastel-pink flex items-center justify-center text-white">
                <Heart className="w-3.5 h-3.5 fill-white" />
              </div>
              <span className="font-display font-bold text-sm text-charcoal-800">FitLife Wellness</span>
            </div>
            <p className="text-charcoal-500 leading-relaxed">
              A holistic 12-week fitness and nutrition companion created to celebrate strength, balanced Kerala nutrition, and lifelong feminine wellness.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2 font-semibold text-charcoal-800">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Our Wellness Philosophy</span>
            </div>
            <p className="text-charcoal-500 leading-relaxed">
              We never promote extreme deficits or rapid weight loss. We believe in nourishing foods, steady progressive strength, restful recovery, and honoring your natural cycle.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2 font-semibold text-charcoal-800">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Friendly Medical Note</span>
            </div>
            <p className="text-charcoal-500 leading-relaxed">
              This planner is for lifestyle, habit tracking, and fitness inspiration. Always consult a certified healthcare professional for medical, hormone, or clinical advice.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-pastel-pink/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} FitLife. Your body is strong, worthy, and capable.</p>
          <div className="flex items-center gap-4 text-[11px] text-charcoal-400">
            <span>Pastel Harmony Edition</span>
            <span>•</span>
            <span>LocalStorage Synced</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
