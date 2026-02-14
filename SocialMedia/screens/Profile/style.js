import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';

const style = StyleSheet.create({
  scrollContent: {
    paddingTop: 12,
    paddingBottom: 24,
  },
  profileImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profileImageContent: {
    borderWidth: 1,
    borderColor: '#0150EC',
    borderRadius: 110,
    padding: 4,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 310,
  },

  userName: {
    marginTop: 20,
    textAlign: 'center',
    fontFamily: getFontFamily('bold'),
    fontSize: 20,
  },

  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 30,

    borderBottomWidth: 1,
    borderColor: '#E9EFF1',
  },
  statAmount: {
    fontFamily: getFontFamily('black'),
    fontSize: 20,
    color: '#022150',
    textAlign: 'center',
  },
  statType: {
    fontFamily: getFontFamily('regular'),
    fontSize: 15,
    color: '#79859F',
    textAlign: 'center',
  },
  statBorder: {
    borderRightWidth: 1,
    borderColor: '#E9EFF1',
  },
  tabsContainer: {
    marginTop: 12,
    minHeight: 360,
  },
});

export default style;
