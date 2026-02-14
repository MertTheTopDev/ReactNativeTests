import { Image, Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { IUser } from '../assets/useFakeUSerData';
import { useEffect } from 'react';

const style = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    height: 90,
    marginHorizontal: 12,
    marginTop: 10,
  },
  middleCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainer: {
    flex: 1.5,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 250
  },

  messages: {
    width: 26,
    height: 26,
    borderWidth: 2,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messagesText: {
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 20,
    paddingVertical: 0,
    textAlignVertical: 'center', // Android'de dikey ortalama
  },
  messagesWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
});

const UserColumnView: React.FC<IUser> = (props: IUser) => {

  useEffect(() => {

  },[])

  const { name, surname, avatar, email, messages } = props;
  const messagesAction = () =>
    Alert.alert('Mesajlar', `Bu kullanıcının ${messages} mesajı var.`, [
      { text: 'Hayır', onPress: () => {} },
      { text: 'Evet', onPress: () => {} },
    ]);

  return (
    <View style={style.container}>
      {/* Avatar */}
      <View style={[style.avatarContainer, style.middleCenter]}>
        <Image style={style.avatar} source={{ uri: avatar }} />
      </View>

      <View style={[style.middleCenter, { flex: 4, alignItems: 'baseline' }]}>
        {/* First Name and last name */}
        <Text style={{ fontWeight: 'bold' }}>
          {name} {surname}
        </Text>
        {/* Email */}
        <Text style={{ color: 'grey' }}>{email}</Text>
      </View>
      <TouchableOpacity style={style.messagesWrapper} onPress={messagesAction} activeOpacity={0.7}>
        <View style={style.messages}>
          <Text style={style.messagesText}>{messages}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UserColumnView;

/* 

const users = useFakeUserData();


  <ScrollView>
        {
         users.map( (e) => (
          <Text style={{fontSize: 20}} key={e.id}>
            {e.name}
          </Text>
         ))
        }
     </ScrollView>

*/

/* 
  <ScrollView
     style={{ flex: 1, width: '100%' }} 
     contentContainerStyle={{ paddingVertical: 8 }}>
      {
        users.map( e => <UserColumnView key={e.id} {...e} /> )
      }
     </ScrollView>
     
*/

/*


  <Modal transparent visible={modelState} animationType="slide">
        
 const [modelState, setModelState] = useState(false);

   <Button
        title="BAS BANA"
        onPress={() => {
          setModelState(!modelState);
        }}
      />

        <Pressable
          style={{
            flex: 1,
            backgroundColor: 'rgba(18, 0, 0, 0.4)',
          }}
          onPress={() => setModelState(false)}
        />

        <View
          style={{
            backgroundColor: '#FF0000',
            position: 'absolute',
            width: '100%',
            height: 350,
            bottom: 0,
          }}
        ></View>
      </Modal>


*/