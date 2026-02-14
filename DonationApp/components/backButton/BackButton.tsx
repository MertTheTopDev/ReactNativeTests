import React from 'react'
import { Pressable, TouchableOpacity } from 'react-native'

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import styles from './backButtonStyle'

interface BackButtonProps {
  onPress: Function
} 

const BackButton = (props: BackButtonProps) => {

  const { onPress } = props

  return (
    <TouchableOpacity style={styles.container} onPress={() => { onPress() }}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </TouchableOpacity>
  )
}

export default BackButton