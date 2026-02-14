import React from "react";
import { Products } from "../models/products";
import { fetchProductsById } from "../server/DummyJson";

const useFetchProductById = (id: number | undefined) => {
  const [ product, setProduct ] = React.useState<Products | null>(null);
  const [ isLoading, setIsLoading ] = React.useState<boolean>();
  const [ error, setError ] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleFetchProductById = async () => {
      setIsLoading(true);
      if (id === undefined) {
        setError('No product ID provided');
        setIsLoading(false);
      } else {
        fetchProductsById(id)
          .then((data) => setProduct(data))
          .catch((err) =>
            setError(err instanceof Error ? err.message : "Error")
          )
          .finally(() => setIsLoading(false));
      }
    };
  
    handleFetchProductById();
  }, [id]);

  return { product, isLoading, error }
};

export default useFetchProductById;