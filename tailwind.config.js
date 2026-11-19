/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00C9FF',
        primaryDark: '#0E9FF5',
        secondary: '#FFD600',
        secondaryDark: '#E6BD00',
        accentPurple: '#9D5CF2',
        accentViolet: '#6A0DAD',
        bgPrimary: '#050A18',
        bgSecondary: '#0A0F1F',
        bgTertiary: '#121A2D',
        textPrimary: '#F0F6FF',
        textSecondary: '#9FB0D0',
        textMuted: '#6B7A95',
        surface: '#0F1728',
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      borderRadius: {
        '4xs': '0.25rem',
        '3xs': '0.35rem',
        xs: '0.5rem',
        sm: '0.75rem',
        md: '1rem',
        lg: '1.5rem',
      },
      maxWidth: {
        container: '1320px',
        content: '1180px',
        card: '420px',
      },
      gridTemplateColumns: {
        projects: 'repeat(auto-fill, minmax(320px, 1fr))',
        about: 'repeat(auto-fit, minmax(300px, 1fr))',
        skills: 'repeat(auto-fit, minmax(260px, 1fr))',
      },
      keyframes: {
        float: {
          '0%, 100%': 'translateY(0)',
          '50%': 'translateY(-12px)',
        },
        shimmer: {
          '0%': 'background-position: 200% 0',
          '100%': 'background-position: -200% 0',
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
