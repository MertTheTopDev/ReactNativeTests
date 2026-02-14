import { View, FlatList } from 'react-native';
import React from 'react';
import { faker } from '@faker-js/faker';
import StoryItem from '../storyItem/StoryItem';

interface Story {
  id: string;
  avatar: string;
  username: string;
}

const stories = Array<number>(40)
  .fill(0)
  .map<Story>(
    () =>
      ({
        id: faker.string.uuid(),
        avatar: faker.image.urlPicsumPhotos(),
        username: faker.internet.username(),
      } as Story),
  );

const StoryList = () => {
  return (
    <View>
      <FlatList
      style={{ flex: 1 }}
        data={stories}
        ListHeaderComponent={<StoryListHeader />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <StoryItem {...item} />}
      />
    </View>
  );
};

export default StoryList;

const StoryListHeader = () => {
  return (
    <View
      style={{
        width: 80,
        height: 80,
        marginRight: 7,
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'blue',
      }}
    ></View>
  );
};

/* 
interface Resource {
  url: string;
  id: string;
}



const images = Array<number>(1000)
  .fill(0)
  .map<Resource>(
    () =>
      ({
        id: faker.string.uuid(),
        url: faker.image.urlPicsumPhotos(),
      } as Resource),
  );


   <FlatList 
      data={images} 
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <Image style={{ height: 200, width: 200, margin: 10 }}  source={{ uri: item.url }} />
      )}
      />

*/
