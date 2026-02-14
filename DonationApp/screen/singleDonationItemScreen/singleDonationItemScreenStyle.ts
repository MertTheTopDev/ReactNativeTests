import { StyleSheet  } from "react-native"
import GlobalFunc from "../../assets/global/GlobalFunc";

const styles = StyleSheet.create({
  image: {
    marginTop: 12,
    marginBottom: 24,
    width: '100%',
    height: 240,
    borderRadius: 5
  },
  badge: {
    marginBottom: 16
  },
  description: {
    marginTop:16,
    marginHorizontal: 7,
    fontFamily: GlobalFunc.fonts.setWeight('400'),
    lineHeight: 29
  }
})

export default styles;