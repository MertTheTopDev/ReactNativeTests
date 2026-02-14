import React from 'react';
import { Text, View } from 'react-native';

interface MyComponentProps {
  text: string;
  surname: string;
}

export const MyComponent = (props: MyComponentProps) => {

  const { text, surname } = props

  return (
    <View>
      <Text style={{ fontSize: 22, fontWeight: '900' }}>
        {text} {surname}
      </Text>
    </View>
  );
};
