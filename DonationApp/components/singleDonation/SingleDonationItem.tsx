import React from 'react';
import { Image, Pressable, View } from 'react-native';
import Badge from '../badge/Badge';
import Header from '../header/Header';
import styles from './singleDonationItemStyle';
interface SingleDonationItemProps {
  uri: string;
  badgeTitle: string;
  donationTitle: string;
  price: number;
  onPress: Function
}

const SingleDonationItem = (props: SingleDonationItemProps) => {
  const { uri, badgeTitle, donationTitle, price, onPress } = props;

  return (
   <Pressable onPress={() => { onPress() }} >
     <View>
      {/* Card Content */}
      <View>
        <View style={styles.badge}>
          <Badge title={badgeTitle} />
        </View>
        <Image style={styles.image} source={{ uri: uri }} />
      </View>
      {/* Info Card */}
      <View style={styles.infoCard} >
        <Header title={donationTitle} type={3} numberOfLines={1} />
        <Header title={'$' + price.toFixed()} type={3} numberOfLines={1} />
      </View>
    </View>
   </Pressable>
  );
};

export default SingleDonationItem;
