import React from 'react';

export const FitLifeMotivationalBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-full sm:rounded-2xl bg-gradient-to-r from-[#DFF7EC] via-[#F2F9F5] to-[#FFEBF2] px-4 py-2.5 sm:py-3 border border-[#CFF2DE] flex items-center justify-between gap-3 shadow-2xs select-none">
      {/* Decorative leaf SVGs on bottom corners */}
      <div className="absolute -left-2 -bottom-2 w-8 h-8 pointer-events-none opacity-40 text-[#4ADE80]">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 38C15 32 18 26 23 23C26 21 28 23 27 26C25 31 20 36 17 38Z" />
        </svg>
      </div>

      <div className="flex items-center gap-2 min-w-0">
        {/* Green Heart Outline Icon */}
        <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[#10B981]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>

        {/* Cursive Handwriting Quote */}
        <p
          className="font-script text-sm sm:text-base font-bold text-[#1E4D38] leading-tight truncate"
          style={{ fontFamily: "'Caveat', 'Dancing Script', cursive" }}
        >
          Small steps every day lead to big changes!
        </p>
      </div>

      {/* Right Pink Pill Badge */}
      <div className="shrink-0 flex items-center gap-1 bg-gradient-to-r from-[#FFDDEB] to-[#FFCFE3] text-[#D8296B] font-bold text-[11px] sm:text-xs px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-pink-200/80 shadow-2xs">
        <span>You're doing great!</span>
        <span className="text-xs">💕</span>
      </div>
    </div>
  );
};
