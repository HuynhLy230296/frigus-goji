// eslint-disable-next-line import/no-extraneous-dependencies
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  // eslint-disable-next-line global-require
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'],
  },
  theme: {
    extend: {
      fontSize: {
        md: '16px',
      },
    },
  },
} satisfies Config;
