import { StyleSheet  } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";

const style = StyleSheet.create ({
  storyContainer: {
    marginRight: 20,
  },
  firstName: {
    fontFamily: getFontFamily("regular"),
    fontSize: 14,
    color: '#022150',
    marginTop: 8,
    textAlign: 'center'
  }
})

export default style