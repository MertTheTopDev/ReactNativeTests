import { StyleSheet } from "react-native";
import GlobalFunc from "../../assets/global/GlobalFunc";

const styles = StyleSheet.create({
  header: {
    marginTop: GlobalFunc.Scales.heightScale(20),
    marginHorizontal: GlobalFunc.Scales.widthScale(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerIntroText: {
    fontFamily: GlobalFunc.fonts.setWeight('400'),
    fontSize: GlobalFunc.Scales.fontScale(16),
    lineHeight: GlobalFunc.Scales.fontScale(19),
    color: '#636776'
  },
  headerIntoUsername: {
    marginTop: GlobalFunc.Scales.heightScale(5),
  },
  styleHeaderIntoImage: {
    width: GlobalFunc.Scales.widthScale(50),
    height: GlobalFunc.Scales.heightScale(50),
    borderRadius: 100
  },

  searchBox: {
    marginHorizontal: GlobalFunc.Scales.widthScale(24),
    marginTop: GlobalFunc.Scales.heightScale(20)
  },

  hightlightedImageContainer: {
    marginHorizontal: GlobalFunc.Scales.widthScale(24),
    marginTop: GlobalFunc.Scales.heightScale(20)
  },
  hightlightedImage: {
    width: '100%',
    height: GlobalFunc.Scales.heightScale(160),
    borderRadius: 20
  },

  categoriesContainer: {
    paddingLeft: GlobalFunc.Scales.widthScale(24),
    marginTop: GlobalFunc.Scales.heightScale(10)
  },
  categoriesItemContainer: {
    marginRight: GlobalFunc.Scales.widthScale(10),
    marginTop: GlobalFunc.Scales.heightScale(10)
  },

  donationItemContainer: {
    marginHorizontal: GlobalFunc.Scales.widthScale(24),
    marginTop: GlobalFunc.Scales.heightScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  singleDonationItem: {
    maxWidth: '45%',
    marginBottom: GlobalFunc.Scales.heightScale(23),
  }
});

export default styles;