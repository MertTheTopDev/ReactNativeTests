import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";

const globalStyle = StyleSheet.create ({
  header: { 
    marginLeft: 27, 
    marginRight: 17,
    marginTop: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between' },

    messageIcon: {
      padding: 14, 
      backgroundColor: '#F9FAFB',
      borderRadius: 100 },

      messageNumberContainer: {
        backgroundColor: '#F35BAC',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        width: 10,
        height: 10,
        borderRadius: 10,
        position: 'absolute',
        right: 10,
        top: 10

      }, 
      messageNumber: {
        color: '#FFFFFF',
        fontSize: 8,
        fontFamily: getFontFamily('black')
      },
      userStoryContainer: {
        marginTop: 20,
        marginHorizontal: 20
      },
      userPostContainer: {
        marginHorizontal: 20
      }
});

export default globalStyle;