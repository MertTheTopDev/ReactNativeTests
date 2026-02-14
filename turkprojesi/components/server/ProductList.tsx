import React, { useEffect } from 'react';
import { IProduct } from './IProduct';
import { FlatList } from 'react-native';
import { ProductItem } from './ProductItem';

const getProduct = async (): Promise<IProduct[]> => {
  const response = await fetch('https://dummyjson.com/products');
  const json = await response.json();
  return json.products;
};

const ProductList = () => {
  const [products, setProducts] = React.useState<IProduct[]>([]);
  
  useEffect(() => {
    getProduct().then(data => { 
      console.log('Async Values', data);
      setProducts(data);
    });
  }, []);

  return(<FlatList 
    data={products}
    keyExtractor={item => item.id.toString() }
    renderItem={(item) => (
      <ProductItem {...item.item} />
    ) }
  />);
};

export default ProductList