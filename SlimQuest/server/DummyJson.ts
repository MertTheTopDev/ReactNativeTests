import { Products } from "../models/products";
import Keys from "./Keys";

const fetchProducts = async () : Promise<Products[]> => {

  const response = await fetch(`${Keys.BASE_URL}/${Keys.PRODUCTS}`);

  if (!response.ok) {
    throw new Error('Server failed')
  };

  const json = await response.json();

  return json.Products
}

const fetchProductsById = async (id: number) : Promise<Products> => {
  try {
    let response = await fetch(`${Keys.BASE_URL}/${Keys.PRODUCTS}/${id}`)

    if (!response.ok) {
      throw new Error('Fetch Failed')
    }
    console.log(`Fetch Products Success: fected Id is ${id}`)
    const json = await response.json();

    return json;
  } catch (error) {
    console.log('Fetch Products failed' + error)
    throw error
  }
};

export { fetchProducts, fetchProductsById };

const fecyProducts = async () : Promise<Products[]> => {

  try {
    let response = await fetch('')

    if  (!response.ok) {
      throw new Error('Fetch Failed')
    };

    let json = await response.json();

    return json.Products
  } catch (error) {
    throw  error
  }
}

const fetcyooProducts = async () : Promise<Products[]> => {

  try {
    const response = await fetch(`${Keys.BASE_URL}/${Keys.PRODUCTS}`);

    if (!response.ok) {
      throw new Error('failed fetching')
    };

    const json = await response.json();
    
    return json.Products

  } catch(err) {
    throw err
  }

}