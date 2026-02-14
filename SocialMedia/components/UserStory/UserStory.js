// Core
import React from "react";
import PropTypes from "prop-types";
// Ext
import { View } from "react-native";
import { Text } from "react-native";
// File
import style from './style'
import UserProfileImage from '../UserProfileImage/UserProfileImage'

const UserStory = (props) => {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage 
        profileImage= { props.profileImage } 
        imageDimensions = {65}
      />
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
};
UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.object.isRequired,
}

export default UserStory;