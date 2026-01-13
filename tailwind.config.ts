import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#017EDE",
          dark: "#0064DA",
          light: "#02A5F7",
        },
        secondary: {
          DEFAULT: "#F59200",
          dark: "#FA7300",
          light: "#FEB600",
        },
        background: "#000000", // Changed to black for premium dark theme
        text: "#FFFFFF", // Changed to white
        // Additional premium colors
        accent: {
          DEFAULT: "#8B5CF6",
          light: "#A78BFA",
          dark: "#7C3AED",
        },
        surface: {
          100: "#111111",
          200: "#1A1A1A",
          300: "#262626",
          400: "#333333",
        },
      },
      boxShadow: {
        soft: "0 4px 20px rgba(11, 15, 23, 0.08)",
        "soft-lg": "0 8px 40px rgba(11, 15, 23, 0.12)",
        glow: "0 0 30px rgba(1, 126, 222, 0.15)",
        "glow-orange": "0 0 30px rgba(245, 146, 0, 0.15)",
        // Premium shadows
        "premium": "0 20px 60px rgba(0, 0, 0, 0.5)",
        "premium-glow": "0 0 80px rgba(1, 126, 222, 0.3)",
        "inner-glow": "inset 0 0 40px rgba(255, 255, 255, 0.05)",
        "neon": "0 0 40px rgba(1, 126, 222, 0.5), 0 0 80px rgba(245, 146, 0, 0.3)",
      },
      animation: {
        // Smooth animations
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'marquee-fast': 'marquee 20s linear infinite',
        'marquee-fast-reverse': 'marquee-reverse 20s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        'full': '9999px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #017EDE 0%, #02A5F7 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #F59200 0%, #FEB600 100%)',
        'gradient-dual': 'linear-gradient(90deg, #017EDE 0%, #F59200 100%)',
        'gradient-dark': 'linear-gradient(180deg, #000000 0%, #111111 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      // Typography scale
      fontSize: {
        'xxs': '0.625rem',
        '10xl': '10rem',
        '11xl': '12rem',
      },
      // Spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      // Z-index scale
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
};
export default config;