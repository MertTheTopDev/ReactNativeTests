export const getFontFamily = (weight, baseFont = 'Inter') => {
  switch (weight) {
    case 'normal':
    case '400':
      return `${baseFont}-Regular`;
    case 'medium':
    case '500':
      return `${baseFont}-Medium`;
    case 'bold':
    case '700':
      return `${baseFont}-Bold`;
    case 'semibold':
    case '800':
      return `${baseFont}-ExtraBold`;
    case 'black':
    case '900':
      return `${baseFont}-Black`;
    default:
      return `${baseFont}-Regular`;
  }
};
