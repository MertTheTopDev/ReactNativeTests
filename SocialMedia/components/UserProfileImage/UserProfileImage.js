import React from 'react'
import PropTypes from 'prop-types'
// Ext
import { Image, View } from 'react-native'
// file
import style  from './style'


const UserProfileImage = (props) => {

  return (
    <View style={[
      style.userImageContainer, 
      { borderRadius: props.imageDimensions }
    ]}>
      <Image 
        style={{ 
          width: props.imageDimensions,
          height: props.imageDimensions,
          borderRadius: 50 }} 
        source={props.profileImage} 
      />
    </View>
  )

}

UserProfileImage.protoType = {
  profileImage: PropTypes.any.isRequired,
  imageDimensions: PropTypes.number.isRequired
}

export default UserProfileImage;