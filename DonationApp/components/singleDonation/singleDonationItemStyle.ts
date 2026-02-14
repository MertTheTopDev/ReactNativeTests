import { StyleSheet } from "react-native"
import GlobalFunc from "../../assets/global/GlobalFunc"

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    zIndex: 1,
    top: GlobalFunc.Scales.heightScale(13),
    left: GlobalFunc.Scales.widthScale(10)
  },
  image: {
    width: GlobalFunc.Scales.widthScale(140),
    height: GlobalFunc.Scales.heightScale(170),
    borderRadius: 12
  },
  infoCard: {
    marginTop: GlobalFunc.Scales.heightScale(10)
  }
})

export default styles