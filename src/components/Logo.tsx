import React from 'react';

interface LogoProps {
  className?: string;
  theme?: 'dark' | 'light';
  showText?: boolean;
}

export default function Logo({ className = "h-11", theme = 'dark', showText = true }: LogoProps) {
  const isDark = theme === 'dark';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* High-Fidelity Majestic Blue Lion Head SVG */}
      <svg
        viewBox="0 0 100 100"
        className="h-full w-auto shrink-0 filter drop-shadow-[0_2px_8px_rgba(37,99,235,0.2)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer flowing mane (Dark blue base) */}
        <path
          d="M 50,8 C 55,8 63,12 68,16 C 72,13 77,11 82,13 C 80,18 78,23 76,27 C 82,27 88,29 91,33 C 87,36 82,38 78,39 C 83,43 88,48 89,54 C 84,54 79,52 75,50 C 78,56 79,62 76,68 C 72,66 68,62 65,58 C 66,66 63,73 58,78 C 54,75 51,71 50,67 C 49,71 46,75 42,78 C 37,73 34,66 35,58 C 32,62 28,66 24,68 C 21,62 22,56 25,50 C 21,52 16,54 11,54 C 12,48 17,43 22,39 C 18,38 13,36 9,33 C 12,29 18,27 24,27 C 22,23 20,18 18,13 C 23,11 28,13 32,16 C 37,12 45,8 50,8 Z"
          fill="#1E3A8A"
        />

        {/* Inner mane highlighting (Royal / Neon blue) */}
        <path
          d="M 50,15 C 53,15 59,18 63,22 C 65,20 69,18 73,19 C 71,23 70,27 68,30 C 73,30 78,32 80,35 C 76,37 72,38 69,39 C 73,42 76,46 77,51 C 73,51 69,49 66,47 C 68,52 69,57 66,62 C 63,60 60,57 58,54 C 59,60 56,66 52,70 C 48,66 45,60 46,54 C 44,57 41,60 38,62 C 35,57 36,52 38,47 C 35,49 31,51 27,51 C 28,46 31,42 35,39 C 32,38 28,37 24,35 C 26,32 31,30 36,30 C 34,27 33,23 31,19 C 35,18 39,20 41,22 C 45,18 47,15 50,15 Z"
          fill="#2563EB"
        />

        {/* Lion Face & Snout Architecture (White & lighter blue highlights for depth) */}
        <path
          d="M 50,22 L 56,36 L 62,38 L 58,45 L 59,53 L 50,62 L 41,53 L 42,45 L 38,38 L 44,36 Z"
          fill="#1E40AF"
        />
        
        {/* Symmetrical white face details for contrast */}
        <path
          d="M 50,26 L 54,36 L 58,37 L 55,42 L 50,45 L 45,42 L 42,37 L 46,36 Z"
          fill="#FFFFFF"
          opacity="0.9"
        />

        {/* Fierce Blue Eyes */}
        <polygon points="44,38 48,39 46,41" fill="#3B82F6" />
        <polygon points="56,38 52,39 54,41" fill="#3B82F6" />
        <polygon points="44,38 48,39 46,41" fill="#FFFFFF" opacity="0.8" />
        <polygon points="56,38 52,39 54,41" fill="#FFFFFF" opacity="0.8" />

        {/* Royal Blue Nose & Whiskers foundation */}
        <path
          d="M 48,45 L 52,45 L 50,49 Z"
          fill="#1E3A8A"
        />
        <path
          d="M 46,49 C 48,51 50,51 50,51 C 50,51 52,51 54,49 C 52,53 48,53 46,49 Z"
          fill="#2563EB"
        />

        {/* Dynamic bottom fangs / beard (White) */}
        <path
          d="M 47,53 L 50,57 L 53,53 L 50,51 Z"
          fill="#FFFFFF"
        />
      </svg>

      {/* Brand Text Block */}
      {showText && (
        <div className="flex flex-col leading-tight">
          {/* N.D MARKET */}
          <span className="text-[14px] sm:text-[16px] font-black tracking-widest text-[#2563EB] uppercase font-sans">
            N.D MARKET
          </span>
          {/* MASTERY (Italic with high-impact speed styling) */}
          <span 
            className={`text-xs font-black tracking-[0.22em] italic uppercase ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
            style={{
              fontStyle: 'italic',
              fontWeight: 950,
              textShadow: isDark ? '0 1px 2px rgba(0,0,0,0.4)' : 'none'
            }}
          >
            MASTERY
          </span>
        </div>
      )}
    </div>
  );
}
