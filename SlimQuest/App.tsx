import React from "react";
import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useFetchProductById from "./hooks/useFetchProductsById";

export default function App() {
  const [productId, setProductId] = React.useState<number | undefined>(undefined);
  const { product, isLoading, error } = useFetchProductById(productId);

  return (
    <SafeAreaView>
      <View style={{ padding: 16 }}>
        {isLoading && <Text>Loading...</Text>}

        {error && <Text>Error: {error}</Text>}

        {product && (
          <>
            <Text>ID: {product.id}</Text>
            <Text>Title: {product.title}</Text>
            <Text>Price: {product.price}</Text>
          </>
        )}

        <TextInput 
        style={{ backgroundColor: 'black', color: 'white' }} 
        keyboardType={'number-pad'} 
        maxLength={1}
        value={productId !== null ? String(productId) : ''}
        onChangeText={(numbor) => {setProductId(Number(numbor))} } />
      </View>
    </SafeAreaView>
  );
}