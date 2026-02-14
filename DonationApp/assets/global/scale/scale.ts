import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

// Figma Ref
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

// Width scale
export const widthScale = (size: number): number => {
  return (width / guidelineBaseWidth) * size;
};

// Height scale
export const heightScale = (size: number): number => {
  return (height / guidelineBaseHeight) * size;
};


export const moderateScale = (
  size: number,
  factor: number = 0.5
): number => {
  return size + (widthScale(size) - size) * factor;
};

export const fontScale = (size: number): number => {
  const newSize = moderateScale(size, 0.3);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// Spacing için shortcut
export const spacing = (size: number): number => widthScale(size);

// Export edilen global obje
export const Scales = {
  widthScale,
  heightScale,
  moderateScale,
  fontScale,
  spacing
};