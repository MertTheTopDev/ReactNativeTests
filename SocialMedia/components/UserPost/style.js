import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";

const style = StyleSheet.create({
  userPostContainer: {
    marginTop: 35,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#EFF2F6'
  },
  user: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between'},
  userContainer: { 
    flexDirection: 'row' 
  },
  userTextContainer: {
    justifyContent: 'center', 
    marginLeft: 10
  }, 

  userName: {
    color: '#000',
    textAlign: 'left',
    fontFamily: getFontFamily("bold"),
    fontSize: 16
  },
  location: {
    color: '#79869F',
    textAlign: 'left',
    fontFamily: getFontFamily("400"),
    fontSize: 12,
    marginTop: 5
  },
  postImage: {
    alignItems: 'center',
    height: 300,  
    marginTop: 20,
    overflow: 'hidden'
  },
  userPostStats: {flexDirection: 'row', marginLeft: 15}
});

export default style