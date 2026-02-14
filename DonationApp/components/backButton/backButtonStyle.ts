import { StyleSheet } from "react-native"
import GlobalFunc from "../../assets/global/GlobalFunc";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    borderRadius: 22,
    width: GlobalFunc.Scales.widthScale(44),
    height:  GlobalFunc.Scales.widthScale(44),
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default styles;