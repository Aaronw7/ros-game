// tailwind.config.js
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-radial': 'radial-gradient(circle, hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
      }),
      fontFamily: {
        'barlow': ['"Barlow Semi Condensed"', 'sans-serif'],
      },
      colors: {
        scoreText: '#394bdb',
        lossText: '#db394b',
        darkText: '#3a475e',
        headerOutline: '#687387'
      },
      keyframes: {
        'scale-up': {
          '0%': { transform: 'scale(0)' },
          '90%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        'pulse-scale': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        'initial-scale': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(50%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(40%)', opacity: '0' },
          '100%': { transform: 'translateY(0%)', opacity: '1' },
        }
      },
      animation: {
        'scale-up': 'scale-up 1.5s ease-in-out forwards',
        'pulse-scale': 'pulse-scale 3s ease-in-out infinite',
        'initial-scale': 'initial-scale 0.5s ease-in-out forwards',
        'slide-in': 'slide-in 0.5s ease-in-out forwards',
        'slide-up': 'slide-up 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
