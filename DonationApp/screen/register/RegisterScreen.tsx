import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//--- styles 
import styles from './registerSceenStyle';
import globalStyle from '../../assets/global/globalStyle';
//--- files
import Input from '../../components/input/input';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import BackButton from '../../components/backButton/BackButton';

const RegisterScreen = ({navigation}) => {
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  
  const isPressable = (name.length > 0) && (email.length > 0) && (password.length > 0)

  return (
    <SafeAreaView style={[globalStyle.background, globalStyle.flex]}>
      {/* Back Button */}
      <View>
        <BackButton onPress={() => navigation.goBack() } />
      </View>
      {/* Main Content */}
      <View style={styles.container}>
        <View style={globalStyle.marginBottom24}>
          <Header title={'Hello And Wellcome!'} type={0} />
        </View>
        {/* First & Last Name Textfield */}
        <View style={globalStyle.marginBottom24}>
          <Input // Email
            label={'First & Last Name'}
            placeholder={'Enter your First & Last Name pls'}
            keyboardType={'email-address'}
            onChangeText={(emailText: string) => {
              setEmail(emailText);
            }}
          />
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
          <Button title={'Login'} isDisable={!isPressable} onPress={() => {}}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
