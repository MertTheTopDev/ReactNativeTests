import React from 'react';
import style from './style';
import { ScrollView } from 'react-native';
import { Image, View } from 'react-native';

const ProfileTabContent = () => {
  return (
    <ScrollView style={style.profileTabContentContainer}>
      <View style={style.profileTabContent}>
        <Image
          resizeMode={'cover'}
          style={style.image}
          source={require('../../assets/images/default_profile.png')}
        />

        <Image
          resizeMode={'cover'}
          style={style.image}
          source={require('../../assets/images/default_profile.png')}
        />

        <Image
          resizeMode={'cover'}
          style={style.image}
          source={require('../../assets/images/default_profile.png')}
        />

        <Image
          resizeMode={'cover'}
          style={style.image}
          source={require('../../assets/images/default_profile.png')}
        />

        <Image
          resizeMode={'cover'}
          style={style.image}
          source={require('../../assets/images/default_profile.png')}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabContent;
