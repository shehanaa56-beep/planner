import React from 'react';

export const FitLifeLogo = ({ size = 'normal', showSubtitle = true }) => {
  return (
    <div className="flex items-center gap-2.5">
      {/* Heart + Yoga Silhouette + Green Leaf Icon */}
      <div className="relative w-11 h-11 shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 60 60" fill="none" className="w-full h-full drop-shadow-xs">
          {/* Subtle Heart Outline Background */}
          <path
            d="M30 50C30 50 10 37 10 21C10 13.5 15.5 8 23 8C26 8 28.5 9.5 30 12C31.5 9.5 34 8 37 8C44.5 8 50 13.5 50 21C50 37 30 50 30 50Z"
            fill="url(#heartGrad)"
            opacity="0.18"
          />
          <path
            d="M30 49C30 49 11 36.5 11 21C11 14 16 9 23 9C25.8 9 28.2 10.4 30 12.8C31.8 10.4 34.2 9 37 9C44 9 49 14 49 21C49 36.5 30 49 30 49Z"
            stroke="url(#heartStroke)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Green Leaf on lower-left */}
          <path
            d="M17 38C15 32 18 26 23 23C26 21 28 23 27 26C25 31 20 36 17 38Z"
            fill="url(#leafGrad)"
          />
          <path
            d="M19 33C21 30 24 27 26 25"
            stroke="#15803D"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Joyful Woman Yoga Silhouette in Pink */}
          {/* Head */}
          <circle cx="30" cy="18" r="4.2" fill="url(#pinkGrad)" />
          {/* Raised graceful arms */}
          <path
            d="M19 24C22 28 27 29 30 29C33 29 38 28 41 24"
            stroke="url(#pinkGrad)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          {/* Torso & hips */}
          <path
            d="M30 29C30 33 28 37 25 41M30 33C30 36 32 39 35 41"
            stroke="url(#pinkGrad)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="heartGrad" x1="10" y1="8" x2="50" y2="50" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF4D8D" />
              <stop offset="1" stopColor="#A855F7" />
            </linearGradient>
            <linearGradient id="heartStroke" x1="10" y1="8" x2="50" y2="50" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F472B6" />
              <stop offset="0.6" stopColor="#FF4D8D" />
              <stop offset="1" stopColor="#C084FC" />
            </linearGradient>
            <linearGradient id="pinkGrad" x1="19" y1="14" x2="41" y2="41" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF4D8D" />
              <stop offset="1" stopColor="#E11D48" />
            </linearGradient>
            <linearGradient id="leafGrad" x1="15" y1="23" x2="27" y2="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4ADE80" />
              <stop offset="1" stopColor="#22C55E" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <span
          className="font-brand font-bold text-[28px] sm:text-[32px] text-[#FF4D8D] leading-none tracking-normal drop-shadow-2xs select-none"
          style={{ fontFamily: "'Dancing Script', 'Caveat', cursive" }}
        >
          FitLife
        </span>
        {showSubtitle && (
          <span className="text-[10px] sm:text-[10.5px] font-semibold text-[#9C335B] tracking-wide mt-0.5 select-none">
            Stronger • Healthier • Happier
          </span>
        )}
      </div>
    </div>
  );
};
