import React from 'react';
import { Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//--- files
import styles from './loginScreenStyle';
import globalStyle from '../../assets/global/globalStyle';

import Input from '../../components/input/input';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  
  return (
    <SafeAreaView style={[globalStyle.background, globalStyle.flex]}>
      <View style={styles.container}>
        <View style={globalStyle.marginBottom24}>
          <Header title={'Wellcome Back'} type={0} />
        </View>
        {/* Email Textfield */}
        <View style={globalStyle.marginBottom24}>
          <Input // Email
            label={'Email'}
            placeholder={'Enter your email pls'}
            keyboardType={'email-address'}
            onChangeText={(emailText: string) => {
              setEmail(emailText);
            }}
          />
        </View>
        {/* Password Textfield */}
        <View style={globalStyle.marginBottom24}>
          <Input // Pasword
            isSecure={true}
            label={'Password'}
            placeholder={'Enter your pass pls'}
            onChangeText={(passText: string) => {
              setPassword(passText);
            }}
          />
        </View>
        {/* Login Button */}
        <View style={globalStyle.marginBottom24} >
          <Button title={'Login'} isDisable={false} onPress={() => {}}/>
        </View>
        {/* Dont Have an account */}
        <View>
          <Pressable style={styles.registerButton} onPress={ () => navigation.navigate('Register') }>
            <Header title={`Dont't have an account ?`} type={3}/>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
