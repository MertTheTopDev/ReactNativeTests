import { StyleSheet } from "react-native";
import GlobalFunc from "../../assets/global/GlobalFunc";

const styles = StyleSheet.create({
  button: {
    backgroundColor: GlobalFunc.color.blue,
    height: GlobalFunc.Scales.heightScale(55),
    justifyContent: 'center',
    borderRadius: GlobalFunc.Scales.widthScale(50)
  },
  title: {
    fontFamily: GlobalFunc.fonts.setWeight('500'),
    fontSize: GlobalFunc.Scales.fontScale(16),
    lineHeight: GlobalFunc.Scales.fontScale(19),
    color: GlobalFunc.color.white,
    textAlign: 'center'
  },
  disable: {
    opacity: 0.7
  }
});

export default styles;