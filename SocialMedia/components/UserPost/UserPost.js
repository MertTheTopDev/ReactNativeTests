import React from "react";
import PropTypes  from "prop-types";
// Ext
import { View } from "react-native";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import { Text, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBookBookmark, faComment, faEllipsisH, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";

import style  from "./style";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

const UserPosts = (props) => {
  return <View style= { style.userPostContainer } >
    {/* Post Header */}   
    <View style= {style.user}>

      <View style = {style.userContainer}>
        <UserProfileImage
          profileImage = {props.profileImage}
          imageDimensions = {45}
        />

        <View style= {style.userTextContainer}>
          {/*  */}
          <Text style={style.userName}>
            {props.firstName} {props.lastName}
          </Text>

          <Text style={style.location}>
            {props.location}
          </Text>
        </View>
      </View>

      <FontAwesomeIcon icon = { faEllipsisH}/>

    </View>
  
    {/* Post Image */}   
    <View style= { style.postImage }> 
      <Image
        source={props.image}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
      />
    </View>

    {/* Likes */}   

    <View style= { { flexDirection: 'row' , marginTop: 10} } >
      <View style= {style.userPostStats}>
        <FontAwesomeIcon icon = {faHeart} color= {'#79869F'} />
        <Text style= { {color: '#79869F' } } >{props.likes}</Text>
      </View>
      
      <View style= {style.userPostStats}>
        <FontAwesomeIcon icon = {faComment} color= {'#79869F'} />
        <Text style= { {color: '#79869F' } } >{props.comment}</Text>
      </View>

      <View style= {style.userPostStats}>
        <FontAwesomeIcon icon = {faBookBookmark} color= {'#79869F'} />
        <Text style= { {color: '#79869F' } } >{props.bookmarks}</Text>
      </View>
    </View>

  </View>
};

UserPosts.proTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location:PropTypes.string,
  profileImage: PropTypes.any.isRequired,
  image:PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comment: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired
};

export default UserPosts;