import React from "react";
import PropTypes from "prop-types";

import { Text, TouchableOpacity } from "react-native";

import style  from "./style";

const ProfileTabTitle = (props) => {
  return <Text style={[style.titleNotFocused, props.isFocused && style.title]} >{props.title}</Text>
};

ProfileTabTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired
};

export default ProfileTabTitle;