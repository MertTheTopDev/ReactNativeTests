import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const nav = useNavigation();

  return (
    <View style={ styles.container }>
      <Text>Home</Text>

      <Button title='nav to profile' onPress={ () => nav.navigate('profile') } />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems:'center',
    flex:1
  }

});