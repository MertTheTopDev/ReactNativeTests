import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";

const style =  StyleSheet.create ({
  title: {
    color: '#022150',
    fontFamily: getFontFamily("bold"),
    fontSize: 16,
    padding: 10
  }, 
  titleNotFocused: {
    color: '#79869F',
    fontFamily: getFontFamily("normal")
  }

})

export default style