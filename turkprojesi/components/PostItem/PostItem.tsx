import { View, Text, StyleSheet, Image, Button } from 'react-native';
import React from 'react';
import { PostListParam } from '../PostList/PostList';

const PostItem: React.FC<PostListParam> = (param: PostListParam) => {
  const { id, avatar, userName, description, image, likes, comments } = param;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Image style={styles.avatar} source={{ uri: avatar }} />
        </View>
        <View style={{ flex: 5 }}>
          <Text style={styles.username}>{userName}</Text>
        </View>
        <View style={[styles.basButton, { flex: 1 }]}>
          <Button title={'BAS'} />
        </View>
      </View>
      {/* Content */}
      <View style={{ flex: 4, alignItems: 'center' }}>
        <Text> {description} </Text>
        <Image 
        style={styles.image}
        source={{uri: image}}
        />
      </View>
      
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: '100%',
    marginVertical: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 5,
  },
  basButton: {
    width: 30,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  image: {
    width: '95%',
    height: 200,
    margin: 5
  }
});
