export const colorThemes = {
  default: {
    primary: '#1976d2', // Default primary color
    secondary: '#dc004e' // Default secondary color
  },
  customTheme1: {
    primary: '#ff5722', // Custom primary color
    secondary: '#673ab7' // Custom secondary color
  }
  // Add more themes as needed
};

export type ThemeName = keyof typeof colorThemes;
