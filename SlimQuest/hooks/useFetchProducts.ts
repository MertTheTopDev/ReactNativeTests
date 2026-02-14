import React, { useState } from "react";
import { Products } from "../models/products";
import { fetchProducts } from "../server/DummyJson";

const useFetchProducts = () => {
  const [products, setProducts] = React.useState<Products[]>([])
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string | null>(null)

  const handleFetchProducts = () => {
    setIsLoading(true);
    setError(null);

    fetchProducts()
    .then((data) => setProducts(data))
    .catch((err) => setError(err))
    .finally( () => setIsLoading(true))
  };

  React.useEffect(() => {
    handleFetchProducts()
  }, []);

  return { products, isLoading, error }
};

export default useFetchProducts;

const useFetchProductss = () => {

  const [products, setProducts] = React.useState<Products[]>([])
  const [isLoading, setIsloadng] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string | undefined>()

  const handleFetchProducts = () => {
    setIsloadng(true);
    setError(undefined);

    fetchProducts()
    .then((data) => setProducts(data))
    .catch((err) => setError(err))
    .finally(() => setIsloadng(false))

  }
  
  React.useState(() => {

  })

}