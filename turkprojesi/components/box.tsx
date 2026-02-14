import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface Props {
  title?: string;
}

const style = StyleSheet.create({
  viewContainer: {
    width: '90%',
    height: 200,
    backgroundColor: '#C38D8D',
    borderRadius: 20,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 18,
  },
});

const Boxe = ({ title = 'Mert' }: Props) => {
  return (
    <View style={style.viewContainer}>
      <Text style={style.titleText}>{title}</Text>
    </View>
  );
};

export default Boxe;

/*
<ScrollView contentContainerStyle={{ alignItems:'center' }} style={{ width: '100%' }} >
        <Boxe title={'Title'} />
        <Boxe title={'Title'} />
        <Boxe/>
        
     </ScrollView>
*/

/*
 <TouchableOpacity onPress={() => Alert.alert('Pressed')} >
        <Image
          style={{
            width: 200,
            height: 200,
            borderRadius: 20,
          }}
          source={{
            uri: 'https://i1.sndcdn.com/artworks-d6zenj1iZzL7TNqb-Q6YB2Q-t1080x1080.jpg',
          }}
        />
      </TouchableOpacity>
*/

/* 
<Switch
        thumbColor={ switchValue === true ? '#000000' : '#FC1313' }
        trackColor={ { false : '#FFFF00', true : '#2FC709'} }
        ios_backgroundColor={}
        value={switchValue}
        onChange={() => setSwitchValue(prev => !prev)}
      />
*/

/* 
 const inputRef = useRef(null);
  const [ named, setNamed ] = useState('')

  const focusInput = () => {
    inputRef.current.focus();
  };


   <TextInput 
        ref={inputRef}
        placeholder='Add You Name'
        multiline
        value={named}
        onChangeText={ (text) => setNamed(text)  }
        style= {{ 
          width: 200,
          height: 160,
          borderRadius: 20,
          padding: 20,
          fontWeight: 'bold',
          fontSize: 20,
          backgroundColor: '#CED7D9',
          }} />
      

*/
