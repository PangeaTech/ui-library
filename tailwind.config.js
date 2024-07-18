/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  theme: {
    /*    // Test and apply default classes first
  fontSize: {
      xs: '12pt',
      sm: '14pt',
      base: '16pt',
      md: '18pt',
      lg: '20pt',
      xl: '24pt',
      '2xl': '30pt',
      '3xl': '36pt',
      '4xl': '48pt',
      '5xl': '60pt',
      '6xl': '72pt',
    },
    lineHeight: {
      xs: '12pt',
      sm: '14pt',
      base: '16pt',
      md: '18pt',
      lg: '20pt',
      xl: '24pt',
      '2xl': '30pt',
      '3xl': '36pt',
      '4xl': '40pt',
      '5xl': '60pt',
      '6xl': '60pt',
    }, */
    extend: {
      colors: {
        pangea: {
          blue: {
            100: '#2A318A',
            50: '#2D35DC',
            15: '#8388F4',
            5: '#DFE0FF'
          },
          green: {
            100: '#0D9146',
            50: '#38C073',
            15: '#66E39C',
            5: '#7ABF8F'
          },
          pink: {
            100: '#EE0072',
            50: '#E95DA0',
            15: '#F490C0',
            5: '#FFD7EA'
          },
          purple: {
            100: '#5A00EE',
            50: '#A579EE',
            15: '#B899EC',
            5: '#E6D7FF'
          },
          gold: {
            100: '#E5AF0A',
            50: '#FEC20B',
            15: '#F7DC8D',
            5: '#F9EED5'
          },
          black: {
            100: '#262626',
            50: '#908E8D',
            15: '#DAD7D6',
            5: '#F4F4F4'
          }
        }
      }
    }
  },
  important: 'body',
  plugins: []
};
