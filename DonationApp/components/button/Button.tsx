import React from 'react';
import { Pressable, Text } from 'react-native';
//--- files
import styles from './buttonStyle';

interface ButtonProps {
  title: string;
  isDisable: boolean;
  onPress: Function
}

const Button = (props: ButtonProps) => {
  const { title, isDisable, onPress } = props;

  return (
    <Pressable
      style={[styles.button, isDisable && styles.disable]}
      disabled={isDisable}
      onPress={() => {
        console.log(`${title} button is pressed`);
        onPress()
      }}
    >
      <Text style={styles.title}> {title} </Text>
    </Pressable>
  );
};

export default Button;
