import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

type StoryItemsProps = {
  avatar: string,
  username: string
}

export default function StoryItem(props: StoryItemsProps ) {

  const { avatar, username } = props

  return (
    <View style={styles.container} >
      <Image 
      style={ styles.image }
      source={{uri: avatar}}
      />
      <Text style={ styles.text }> {username} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { width: 80, height: 80, marginRight: 7, alignItems: 'center' },
  image: {
    width:  70,
    height: 70,
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 20
  },
  text: {
    fontWeight: 'bold',
    fontSize: 10,
    height: 15
  }
})