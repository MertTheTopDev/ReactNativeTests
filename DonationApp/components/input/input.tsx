import React from 'react';
import { KeyboardTypeOptions, Text, TextInput, View } from 'react-native';

//--- files
import styles from './inputStyle';


interface InputProps {
  isSecure?: boolean
  label: string;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  onChangeText: Function
}

const Input = (props: InputProps) => {
  const { label, placeholder, keyboardType, onChangeText, isSecure } = props;

  return (
    <View >
      <Text style={styles.label}>{label}</Text>
      <TextInput
        secureTextEntry={isSecure ? isSecure : false }
        style={styles.input}
        keyboardType={keyboardType ? keyboardType : 'default'}
        placeholder={placeholder}
        onChangeText={(val: string) => onChangeText(val)}
      />
    </View>
  );
};

export default Input;
