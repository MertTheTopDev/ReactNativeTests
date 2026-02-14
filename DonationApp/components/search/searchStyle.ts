import { StyleSheet } from "react-native";
import GlobalFunc from "../../assets/global/GlobalFunc";

const styles = StyleSheet.create({
  searchInput: {
    flex:1,
    marginLeft: GlobalFunc.Scales.widthScale(6),
    height: '100%',
    fontFamily:  GlobalFunc.fonts.setWeight('400'),
    fontSize: GlobalFunc.Scales.heightScale(14),
    lineHeight: GlobalFunc.Scales.heightScale(14),
    color: '#686c7a',
    alignItems: 'center'
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: GlobalFunc.Scales.widthScale(16),
    backgroundColor: GlobalFunc.color.grey,
    height: GlobalFunc.Scales.heightScale(50),
    borderRadius: GlobalFunc.Scales.widthScale(15)
  }
});

export default styles