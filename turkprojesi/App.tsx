import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NameContext, NameContextProvider } from './components/NameContext';
import { Text } from 'react-native';

const App = () => {
  const myContext = React.useContext(NameContext);

  return (
    <SafeAreaView style={{ flex: 1 }}>
        
    </SafeAreaView>
  );
};

export default App;

/* 
 <Navigation >
      <SafeAreaView style={{ flex: 1 }}>
            
      </SafeAreaView>
    </Navigation>
*/

{
  /* <ActivityIndicator/> */
}
