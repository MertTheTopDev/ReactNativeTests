import React from 'react';
import { View, Text } from 'react-native';
//--- files
import styles from './badgeStyle';
import GlobalFunc from '../../assets/global/GlobalFunc';

interface BadgeProps {
  title: string;
}

const Badge = (props: BadgeProps) => {
  const { title } = props;
  const [width, setWidth] = React.useState(0);
  const textRef = React.useRef(null);
  const paddingHorizontal = 10;
  const tabWidth = {
    width: GlobalFunc.Scales.widthScale(paddingHorizontal * 2 + width),
  };

  return (
    <View
      style={[styles.badge, tabWidth]}
    >
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[styles.title]}
      >
        {' '}
        {title}{' '}
      </Text>
    </View>
  );
};

export default Badge;
