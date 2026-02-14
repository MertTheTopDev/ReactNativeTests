import React from 'react';
import { Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
// files
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import { View } from 'react-native';
import { ProfileTabsNavigation } from '../../navigation/MainNavigation';

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        style={globalStyle.flex}
        contentContainerStyle={style.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Image */}
        <View style={style.profileImageContainer}>
          <View style={style.profileImageContent}>
            <Image
              style={style.profileImage}
              source={require('../../assets/images/default_profile.png')}
            />
          </View>
        </View>

        {/* Name */}
        <Text style={style.userName}> Mert Turedu </Text>

        {/* Following Stats */}
        <View style={style.statContainer}>
          <View>
            <Text style={style.statAmount}> 52 </Text>
            <Text style={style.statType}> Following </Text>
          </View>

          <View style={style.statBorder} />

          <View>
            <Text style={style.statAmount}> 100 </Text>
            <Text style={style.statType}> Followers </Text>
          </View>

          <View style={style.statBorder} />

          <View>
            <Text style={style.statAmount}> 32 </Text>
            <Text style={style.statType}> Posts </Text>
          </View>
        </View>

        {/* Material Tabs */}
        <View style={style.tabsContainer}>
          <ProfileTabsNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
