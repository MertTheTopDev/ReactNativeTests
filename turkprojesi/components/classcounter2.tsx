import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';


type Counter2Props = {
  start: number
}

type Counter2State = {
  count: number
}

class counter2 extends Component< Counter2Props, Counter2State > {

  state: Readonly<Counter2State> = {
    count: this.props.start,
  }

  render(): React.ReactNode {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 60, fontWeight: 'bold' }} > {this.state.count} </Text>
        <Button title={'BU bi isim '} onPress={() => { 
          this.setState({ 
            count : this.state.count + 1
           })
         }} />
      </View>
    );
  }
}

export default counter2;
