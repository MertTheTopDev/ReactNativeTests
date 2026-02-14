import { Dimensions, PixelRatio } from "react-native"; 

const { width, height } = Dimensions.get('window');

const phoneWidthSize = 375;
const phoneHeightSize = 812;

const hDynamic = (size:number): number => {
  return (phoneHeightSize / height) * size 
};

const wDynamic = (size: number): number => {
  return (phoneWidthSize / width) * size
}


export { hDynamic, wDynamic };