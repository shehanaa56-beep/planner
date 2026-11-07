import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const FitLifeHeroBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-br from-[#FFE7F0] via-[#FFF0F6] to-[#FFECE5] p-5 sm:p-6 border border-white/90 shadow-soft">
      {/* Botanical Palm / Monstera Leaves Background SVGs */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-40">
        <svg width="180" height="150" viewBox="0 0 180 150" fill="none">
          <path
            d="M170 140C140 130 110 110 100 80C90 50 110 20 140 10C150 7 160 15 155 25C150 35 130 50 135 70C140 90 160 110 170 140Z"
            fill="#86EFAC"
          />
          <path
            d="M140 150C120 130 100 110 80 100C60 90 40 100 30 120C25 130 35 140 45 135C55 130 70 120 90 125C110 130 130 145 140 150Z"
            fill="#BBF7D0"
          />
        </svg>
      </div>

      <div className="relative z-10 flex items-center justify-between gap-4">
        {/* Left Column: Typography & Action */}
        <div className="flex-1 max-w-[210px] sm:max-w-xs">
          <h2
            className="font-script text-[26px] sm:text-[34px] font-bold text-[#4A1535] leading-[1.12] tracking-wide select-none"
            style={{ fontFamily: "'Caveat', 'Dancing Script', cursive" }}
          >
            Your Healthy <br />
            Journey Starts Here! <span className="inline-block text-[#FF4D8D]">💕</span>
          </h2>

          <p className="mt-1.5 text-xs sm:text-[13px] text-[#55435E] font-medium leading-relaxed">
            Be the best version of yourself
          </p>

          <button
            onClick={() => navigate('/workouts')}
            className="mt-3.5 inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#FF4D8D] to-[#F43F5E] text-white text-xs sm:text-sm font-bold shadow-md shadow-pink-500/25 hover:shadow-lg hover:scale-102 active:scale-95 transition-all"
          >
            <span>Let's Go</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Right Column: Athletic Woman with Shaker & Leaves */}
        <div className="relative shrink-0 flex items-center justify-center">
          {/* Decorative Sparkles & Heart Doodles */}
          <span className="absolute -top-1 left-2 text-[#FF4D8D] text-xs animate-bounce pointer-events-none select-none">
            ✨
          </span>
          <span className="absolute top-4 -right-1 text-[#FF4D8D] text-xs pointer-events-none select-none">
            ♡
          </span>

          {/* Tropical Leaf Accent on top left of figure */}
          <div className="absolute -left-3 -top-2 w-8 h-8 pointer-events-none text-[#4ADE80] opacity-80">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.6 4.5 8.4L12 14l5.5 6.4c2.7-1.8 4.5-4.9 4.5-8.4 0-5.5-4.5-10-10-10z" />
            </svg>
          </div>

          {/* Athletic Woman Cutout Container */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden flex items-end justify-center">
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-pink-200/40 via-transparent to-transparent rounded-2xl" />

            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&q=80"
              alt="Healthy Fitness Woman"
              className="w-full h-full object-cover object-top drop-shadow-md rounded-2xl transition-transform duration-500 hover:scale-105"
            />

            {/* Shaker Bottle Badge Overlay */}
            <div className="absolute bottom-1 right-1 bg-white/95 backdrop-blur-xs px-2 py-1 rounded-xl shadow-xs border border-pink-100 flex items-center gap-1">
              <span className="text-xs">🥤</span>
              <span className="text-[10px] font-bold text-[#FF4D8D]">Hydrate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
