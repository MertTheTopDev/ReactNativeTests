import { StyleSheet } from "react-native"
import GlobalFunc from "../../assets/global/GlobalFunc";

const styles = StyleSheet.create({
  label: {
    fontFamily: GlobalFunc.fonts.setWeight('400'),
    fontSize: 12,
    lineHeight: 14.5,
    color: '#36455a',
  },
  input: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: 'rgba(167,167,167,0.5)'

  }
})


export default styles;