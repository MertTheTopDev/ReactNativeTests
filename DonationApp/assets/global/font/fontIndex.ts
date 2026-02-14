import { weightMap } from "./fontFamilies";

const baseFont = 'Inter18pt';

export const fonts = { 
  setWeight: (weight: string = '400') => `${baseFont}-${weightMap[weight] ?? 'Regular'}`,
  regular: `${baseFont}-Regular`,
  bold: `${baseFont}-Bold`,
  semiBold: `${baseFont}-SemiBold`,
  medium: `${baseFont}-Medium`,
};
