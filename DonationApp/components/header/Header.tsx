import React from 'react';
import { View, Text } from 'react-native';
import styles from './headerStyle';

interface HeaderProps {
  title: string;
  type: number;
  numberOfLines?: number
}

const Header = (props: HeaderProps) => {
  const { title, type, numberOfLines } = props;

  const styleToApply = () => {
    switch (type) {
      case 1:
        return styles.title1;
      case 2:
        return styles.title2;
      case 3:
        return styles.title2;
      default:
        return styles.title1;
    }
  };

  return (
    <View>
      <Text style={styleToApply()} numberOfLines={numberOfLines ? numberOfLines : null} >{title}</Text>
    </View>
  );
};

export default Header;
