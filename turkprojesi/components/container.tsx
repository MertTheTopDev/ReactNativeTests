import { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

type ContainerPropss = PropsWithChildren<{
  width: number;
  height: number;
  childeren: React.ReactNode
  variant: 'primary' | 'warning' | 'error';
}>;

const styles = StyleSheet.create({
  base: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
});

const Container = ({ width, height, variant, children }: ContainerPropss) => {
  return (
    <View
      style={[
        styles.base,
        {
          width: width,
          height: height,
          borderRadius: width / 2,
          backgroundColor:
            variant === 'primary'
              ? 'blue'
              : variant === 'warning'
              ? 'red'
              : 'black',
        },
      ]}
    >
      {children}
    </View>
  );
};

export default Container;
