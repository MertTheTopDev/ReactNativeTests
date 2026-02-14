import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { IProduct } from "./IProduct";
import Color from "./Color";

export const ProductItem: React.FC<IProduct> = ( props: IProduct ) => {

  const { title, thumbnail, description, rating, price, category } = props;

  return(
    <View >
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: Color.text }} > {title} </Text>
      <Text style={{ fontSize: 20, color: Color.text }} > {description} </Text>
      <ImageBackground
      imageStyle={{ borderRadius: 20 }}
      style={{ width: 300, height: 300 }}
      source={{ uri: thumbnail }}
      >
        <View style={{ flex: 1, backgroundColor: Color.imagebg, justifyContent: 'center', opacity: 0.9 }} >
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}> {category} </Text>
        </View>
        <View style={{ flex: 5, backgroundColor: 'red' }} ></View>
        <View style={{ flex: 1, backgroundColor: 'green' }} ></View>
      </ImageBackground>
    </View>
  );

}