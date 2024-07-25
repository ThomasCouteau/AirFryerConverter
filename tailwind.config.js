/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: { extend: {} },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          background: 'hsl(105, 36%, 98%)',
          foreground: 'hsl(105, 63%, 2%)',
          muted: 'hsl(285, 30%, 93%)',
          mutedForeground: 'hsl(285, 7%, 31%)',
          popover: 'hsl(105, 36%, 97%)',
          popoverForeground: 'hsl(105, 63%, 1%)',
          card: 'hsl(105, 36%, 97%)',
          cardForeground: 'hsl(105, 63%, 1%)',
          border: 'hsl(220, 13%, 91%)',
          input: 'hsl(220, 13%, 91%)',
          primary: 'hsl(105, 84%, 71%)',
          primaryForeground: 'hsl(105, 84%, 11%)',
          secondary: 'hsl(285, 84%, 71%)',
          secondaryForeground: 'hsl(285, 84%, 11%)',
          accent: 'hsl(285, 84%, 71%)',
          accentForeground: 'hsl(285, 84%, 11%)',
          destructive: 'hsl(8, 90%, 39%)',
          destructiveForeground: 'hsl(8, 90%, 99%)',
          ring: 'hsl(105, 84%, 71%)',
          radius: '0.5rem',
        },
      },
    ],
  },
};
