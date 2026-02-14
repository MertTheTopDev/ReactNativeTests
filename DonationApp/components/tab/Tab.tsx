import React from 'react';
import { Pressable, Text } from 'react-native';
//--- files
import styles from './tabStyle';
import GlobalFunc from '../../assets/global/GlobalFunc';

interface TabProps {
  title: string;
  isInactive: boolean;
  onPress: Function;
}

const Tab = (props: TabProps) => {
  const { title, isInactive, onPress } = props;
  const [width, setWidth] = React.useState(0);
  const textRef = React.useRef(null);
  const paddingHorizontal = 33;
  const tabWidth = {
    width: GlobalFunc.Scales.widthScale(paddingHorizontal * 2 + width),
  };

  return (
    <Pressable
      style={[styles.tab, isInactive && styles.isInactiveTab, tabWidth]}
      disabled={!isInactive}
      onPress={() => {
        console.log(`${title} button is pressed`);
        onPress();
      }}
    >
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[styles.title, isInactive && styles.isInactiveTitle]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default Tab;
