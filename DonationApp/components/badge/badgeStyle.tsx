import { StyleSheet } from "react-native";
import GlobalFunc from "../../assets/global/GlobalFunc";

const styles = StyleSheet.create({
  badge: {
    backgroundColor: GlobalFunc.color.green,
    height: GlobalFunc.Scales.heightScale(22),
    justifyContent: 'center',
    borderRadius: GlobalFunc.Scales.widthScale(50)
  },
  title: {
    fontFamily: GlobalFunc.fonts.setWeight('600'),
    fontSize: GlobalFunc.Scales.fontScale(10),
    lineHeight: GlobalFunc.Scales.fontScale(12),
    color: GlobalFunc.color.white,
    textAlign: 'center'
  },
});

export default styles;