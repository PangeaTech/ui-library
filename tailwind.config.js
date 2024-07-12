/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pangea-blue-100': '#2A318A',
        'pangea-blue-50': '#2D35DC',
        'pangea-blue-15': '#8388F4',
        'pangea-blue-5': '#DFE0FF',
        'pangea-green-100': '#0D9146',
        'pangea-green-50': '#38C073',
        'pangea-green-15': '#66E39C',
        'pangea-green-5': '#7ABF8F',
        'turtlemoves-pink-100': '#EE0072',
        'turtlemoves-pink-50': '#E95DA0',
        'turtlemoves-pink-15': '#F490C0',
        'turtlemoves-pink-5': '#FFD7EA',
        'turtlemoves-purple-100': '#5A00EE',
        'turtlemoves-purple-50': '#A579EE',
        'turtlemoves-purple-15': '#B899EC',
        'turtlemoves-purple-5': '#E6D7FF',
        'pangea-gold-100': '#E5AF0A',
        'pangea-gold-50': '#FEC20B',
        'pangea-gold-15': '#F7DC8D',
        'pangea-gold-5': '#F9EED5',
        'pangea-black-100': '#262626',
        'pangea-black-50': '#908E8D',
        'pangea-black-15': '#DAD7D6',
        'pangea-black-5': '#F4F4F4'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      fontSize: {
        '7xl': ['72pt', '60pt'],
        '6xl': ['60pt', '60pt'],
        '5xl': ['48pt', '48pt'],
        '4xl': ['36pt', '40pt'],
        '3xl': ['30pt', '36pt'],
        '2xl': ['24pt', '32pt'],
        xl: ['20pt', '20pt'],
        large: ['18pt', '18pt'],
        regular: ['16pt', '16pt'],
        small: ['14pt', '14pt'],
        tiny: ['12pt', '12pt']
      }
    }
  },
  important: 'body',
  plugins: []
};
