import { StyleSheet } from "react-native";
import GlobalFunc from "../../assets/global/GlobalFunc";

const styles = StyleSheet.create({
  title1: {
    fontFamily: GlobalFunc.fonts.setWeight('600'),
    fontSize: GlobalFunc.Scales.fontScale(24),
    lineHeight: GlobalFunc.Scales.fontScale(29)
  },
  title2: {
    fontFamily: GlobalFunc.fonts.setWeight('600'),
    fontSize: GlobalFunc.Scales.fontScale(18),
    lineHeight: GlobalFunc.Scales.fontScale(22)
  }, 
  title3: {
    fontFamily: GlobalFunc.fonts.setWeight('600'),
    fontSize: GlobalFunc.Scales.fontScale(16),
    lineHeight: GlobalFunc.Scales.fontScale(19)
  }
});

export default styles;