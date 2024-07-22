export const colorClasses = {
  'pangea-blue-100': '#2A318A',
  'pangea-blue-50': '#2D35DC',
  'pangea-blue-15': '#8388F4',
  'pangea-blue-5': '#DFE0FF',
  'pangea-green-100': '#0D9146',
  'pangea-green-50': '#38C073',
  'pangea-green-15': '#66E39C',
  'pangea-green-5': '#7ABF8F',
  'pangea-pink-100': '#EE0072',
  'pangea-pink-50': '#E95DA0',
  'pangea-pink-15': '#F490C0',
  'pangea-pink-5': '#FFD7EA',
  'pangea-purple-100': '#5A00EE',
  'pangea-purple-50': '#A579EE',
  'pangea-purple-15': '#B899EC',
  'pangea-purple-5': '#E6D7FF',
  'pangea-gold-100': '#E5AF0A',
  'pangea-gold-50': '#FEC20B',
  'pangea-gold-15': '#F7DC8D',
  'pangea-gold-5': '#F9EED5',
  'pangea-black-100': '#262626',
  'pangea-black-50': '#908E8D',
  'pangea-black-15': '#DAD7D6',
  'pangea-black-5': '#F4F4F4'
};

export type ColorClassName = keyof typeof colorClasses;

export const typographyClasses = {
  'font-poppins': 'font-poppins',
  'text-7xl': 'text-7xl',
  'text-6xl': 'text-6xl',
  'text-5xl': 'text-5xl',
  'text-4xl': 'text-4xl',
  'text-3xl': 'text-3xl',
  'text-2xl': 'text-2xl',
  'text-xl': 'text-xl',
  'text-large': 'text-large',
  'text-regular': 'text-regular',
  'text-small': 'text-small',
  'text-tiny': 'text-tiny'
};

export type TypographyClassName = keyof typeof typographyClasses;
