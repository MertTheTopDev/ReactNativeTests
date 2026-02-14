import { StyleSheet } from "react-native";

const style = StyleSheet.create ({ 
  profileTabContentContainer: {
    backgroundColor: '#FFFFFF',

  },
  profileTabContent: {
    paddingHorizontal: 21,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  image: {
    width: 150,
    height: 90,
    marginTop: 20,
    borderRadius: 6
  }
})

export default style