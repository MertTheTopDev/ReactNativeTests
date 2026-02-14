import { StyleSheet } from "react-native";
import GlobalFunc from "../../assets/global/GlobalFunc";

const styles = StyleSheet.create({
  tab: {
    backgroundColor: GlobalFunc.color.blue,
    height: GlobalFunc.Scales.heightScale(50),
    justifyContent: 'center',
    borderRadius: GlobalFunc.Scales.widthScale(50)
  },
  title: {
    fontFamily: GlobalFunc.fonts.setWeight('500'),
    fontSize: GlobalFunc.Scales.fontScale(16),
    lineHeight: GlobalFunc.Scales.fontScale(17),
    color: GlobalFunc.color.white,
    textAlign: 'center'
  },
  isInactiveTab: {
    backgroundColor: GlobalFunc.color.grey
  }, 
  isInactiveTitle: {
    color: GlobalFunc.color.darkGrey
  }
});

export default styles;