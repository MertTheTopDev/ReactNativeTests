import { FlatList, View} from 'react-native';
import React from 'react';
import { faker } from '@faker-js/faker';
import PostItem from '../PostItem/PostItem';

export interface PostListParam {
  id: string;
  avatar: string;
  userName: string;
  description: string;
  image: string;
  likes: number;
  comments: number;
}

const posts = Array<number>(10)
  .fill(0)
  .map<PostListParam>(
    () =>
      ({
        id: faker.string.uuid(),
        avatar: faker.image.urlPicsumPhotos(),
        userName: faker.internet.username(),
        description: faker.lorem.paragraph(),
        image: faker.image.urlPicsumPhotos(),
        likes: faker.number.int({ min: 10, max: 1000 }),
        comments: faker.number.int({ min: 10, max: 1000 }),
      } as PostListParam),
  );

const PostList = () => {
  return (
    <View style={{ flex: 1,alignItems:'center', flexDirection:'column' }}>
    <FlatList
      style={{ width: '90%' }}
      data={posts}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <PostItem {...item} />}
    />
  </View>
  );
};

export default PostList;

