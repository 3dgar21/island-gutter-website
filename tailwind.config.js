/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E50914', // Bright Red
        },
        secondary: {
          DEFAULT: '#0A0A0A', // Accent Black
        },
        foreground: '#0F172A', // Dark Navy for text
        background: '#F9FAFB', // Soft White Background
        muted: '#6B7280', // Muted Gray for subtext
      },
    },
  },
  plugins: [],
};
