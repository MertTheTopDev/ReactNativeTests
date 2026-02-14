import { useState } from 'react';
import { View,  Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  counterContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    backgroundColor: '#FFB489',
    margin: 10,
  },
  touchOpacit: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 6,
  },
});
interface CounterProps {
  start: number;
  step: number;
}

export const Counter = ({ start, step }: CounterProps) => {


  const [count, setScount] = useState<number>(start);
  const increment = () => setScount(count + step);
  const decrement = () => setScount(count - step);
  console.log( "Mert " + typeof(decrement).toString)

  return (
    <View style={style.counterContainer}>
      <Text> {count} </Text>
      <TouchableOpacity onPress={increment} style={style.touchOpacit}>
        <Text style={{ color: 'white' }}>Increase</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={decrement} style={style.touchOpacit}>
        <Text style={{ color: 'white' }}>decrement</Text>
      </TouchableOpacity>
    </View>
  );
};
