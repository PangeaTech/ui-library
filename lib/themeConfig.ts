export const colorThemes = {
  default: {
    primary: '#1976d2',
    secondary: '#dc004e'
  },
  customTheme1: {
    primary: '#ff5722',
    secondary: '#673ab7'
  }
};

export const colorClasses = {
  'pangea-blue-100': 'pangea-blue-100',
  'bg-pangea-blue-100': 'bg-pangea-blue-100'
};

export type ColorClassName = keyof typeof colorClasses;

export type ThemeName = keyof typeof colorThemes;
