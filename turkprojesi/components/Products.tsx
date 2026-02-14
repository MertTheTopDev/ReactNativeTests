import { useEffect } from 'react';
import { View } from 'react-native';

const Products = () => {
  useEffect(() => {
    (async () => {
      fetch('https://dummyjson.com/product')
        .then(done => done.json)
        .then(json => console.log(json));
    })();
  }, []);

  return <View></View>;
};
