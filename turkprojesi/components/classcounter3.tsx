import React from 'react';
import { Button, Text, View } from 'react-native';

type Counter3State = {
  count: number;
};

class Counter3 extends React.Component<{}, Counter3State> {
  state: Readonly<Counter3State> = {
    count: 100,
  };

  componentDidMount(): void {
    console.log(' counter3 WORKINNGG componentDidMount  ')
  }

  componentDidUpdate(_prevProps: Readonly<{}>, _prevState: Readonly<Counter3State>, _snapshot?: any): void {
    console.log(' counter3 componentDidUpdate calisiyor... ')
  }

  componentWillUnmount(): void {
    
  }

  render(): React.ReactNode {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 200,
          height: 200,
          backgroundColor: '#0FFFFF',
          borderRadius: 30
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 30 }} > {this.state.count} </Text>
        <Button title='increase' onPress={() => { this.setState({ 
          count : this.state.count + 1
         }) }} />
      </View>
    );
  }
}

export default Counter3;
