import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
//--- files
import styles from './singleDonationItemScreenStyle';
import globalStyle from '../../assets/global/globalStyle';
import BackButton from '../../components/backButton/BackButton';
import Badge from '../../components/badge/Badge';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';

const SingleDonationItemScreen = ({ navigation, route }) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );

  const categoryInformation = route.params.categoryInformation;

  return (
    <SafeAreaView
      style={[
        globalStyle.background,
        globalStyle.flex,
        { alignItems: 'center' },
      ]}
    >
      <ScrollView style={{ width: '90%' }} showsVerticalScrollIndicator={false}>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Image
          style={styles.image}
          source={{ uri: donationItemInformation.image }}
        />
        <View style={styles.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <Header title={donationItemInformation.name} type={1} />
        <Text style={styles.description} >
          {donationItemInformation.description}
        </Text>
      </ScrollView>
      <View style={{width:'90%'}} >
        <Button title={'Confirm'} isDisable={false} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItemScreen;
