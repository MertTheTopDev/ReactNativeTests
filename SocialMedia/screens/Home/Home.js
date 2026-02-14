import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Text } from 'react-native';
import { TouchableOpacity, View } from 'react-native';
import { FlatList, Dimensions} from 'react-native';
import React,{ useState, useEffect } from 'react';

// Components Imps 
import style from "./style"
import UserStory from "../../components/UserStory/UserStory"
import UserPost from "../../components/UserPost/UserPost"
import Title from "../../components/Title/Title";
import globalStyle from '../../assets/styles/globalStyle';
import { Routes } from '../../navigation/Routes';

const Home = ({navigation}) => {
  const userStories = [
    {
      firstName: 'Mert',
      id: 1,
      profileImage: require('../../assets/images/default_profile.png')
    },
    {
      firstName: 'Mert2',
      id: 2,
      profileImage: require('../../assets/images/default_profile.png')
    },
    {
      firstName: 'Mert3',
      id: 3,
      profileImage: require('../../assets/images/default_profile.png')
    },
    {
      firstName: 'Mert4',
      id: 4,
      profileImage: require('../../assets/images/default_profile.png')
    },
    {
      firstName: 'Mert5',
      id: 5,
      profileImage: require('../../assets/images/default_profile.png')
    },
    {
      firstName: 'Mert6',
      id: 6,
      profileImage: require('../../assets/images/default_profile.png')
    }
  ];

  const userPosts = [
    {
      firstName: 'Mert1',
      lastName: 'Turedu',
      location: 'Turkiye',
      likes: 120,
      comments: 22,
      bookmarks: 55,
      image: require('../../assets/images/default_profile.png'),
      id: 1
    },
    {
      firstName: 'Mert2',
      lastName: 'Turedu2',
      location: 'Turkiye',
      likes: 1110,
      comments: 42,
      bookmarks: 25,
      image: require('../../assets/images/default_profile.png'),
      id: 2
    },
    {
      firstName: 'Mert3',
      lastName: 'Turedu3',
      location: 'Turkiye',
      likes: 10,
      comments: 452,
      bookmarks: 225,
      image: require('../../assets/images/default_profile.png'),
      id: 3
    }, 
    {
      firstName: 'Mert4',
      lastName: 'Turedu4',
      location: 'Turkiye',
      likes: 11100,
      comments: 2,
      bookmarks: 5,
      image: require('../../assets/images/default_profile.png'),
      id: 4
    },
    {
      firstName: 'Mert5',
      lastName: 'Turedu5',
      location: 'Turkiye',
      likes: 111000,
      comments: 2000,
      bookmarks: 5000,
      image: require('../../assets/images/default_profile.png'),
      id: 5
    }
  ]

  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostPageSize = 2;
  const [userPostCurrentPage, setUserPostCurrentPage] = useState(1);
  const [userPostRenderedData, setUserPostRenderedData] = useState([]);
  const [isLoadingUserPost, setIsLoadingUserPost] = useState(false);


  const pagination = (database, currentPage, pageSize) => {
    console.log('currentPage', currentPage)
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize; 
    if (startIndex >= database.length) {
      return []
    } 
    return database.slice(startIndex, endIndex)
  }

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData)
    setIsLoadingUserStories(false);

    setIsLoadingUserPost(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostPageSize);
    setUserPostRenderedData(getInitialDataPosts)
    setIsLoadingUserPost(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView 
    
    style={ [globalStyle.backgroundWhite, globalStyle.flex] } >
      <View style={style.header}>
        <Title title="Lets Explore"/>
        <TouchableOpacity style= {style.messageIcon} onPress={() => {navigation.navigate(Routes.Profile)}}>
          <FontAwesomeIcon icon={faEnvelope} size= {20} color= {'#898DAE'}/>  
          <View style= {style.messageNumberContainer}> 
            <Text style= {style.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={style.userStoryContainer}>
        <FlatList 
        onEndReachedThreshold={0.5}
        onEndReached={ () => {
            if (isLoadingUserStories) return;
            setIsLoadingUserStories(true);
            const contentToAppend = pagination(userStories, userStoriesCurrentPage + 1, userStoriesPageSize );
            if(contentToAppend.length >> 0 ) {
              setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
              setUserStoriesRenderedData(prev => [...prev, ...contentToAppend])
            }
            setIsLoadingUserStories(false)
        } }
        showsHorizontalScrollIndicator={false}
        data={userStoriesRenderedData} 
        keyExtractor={(item) => item.id.toString()}
        horizontal= {true}
        renderItem={({item}) => <UserStory
          firstName={item.firstName} 
          profileImage={item.profileImage}/> } />
      </View>
      <View style = {style.userPostContainer}>
        <FlatList 
         
        onEndReachedThreshold={0.5}
       onEndReached={() => {
        if (isLoadingUserPost) return;
      
        setIsLoadingUserPost(true);
      
        const nextPage = userPostCurrentPage + 1;
        const contentToAppend = pagination(
          userPosts,
          nextPage,
          userPostPageSize
        );
      
        if (contentToAppend.length > 0) {
          setUserPostCurrentPage(nextPage);
          setUserPostRenderedData(prev => [...prev, ...contentToAppend]);
        }
      
        setIsLoadingUserPost(false);
      }}
   
        data={userPostRenderedData}
        renderItem={({item}) => 
        <UserPost 
          firstName = {item.firstName}
          lastName = {item.lastName} 
          profileImage = {item.image}
          image = {item.image}
          likes = {item.likes}
          comment = {item.comments}
          bookmarks = {item.bookmarks}
          location = {item.location}
          />}
          contentContainerStyle={{ paddingBottom: 200 }}/>
      </View>
    </SafeAreaView>
  );
}

export default Home;
