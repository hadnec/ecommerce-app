import { useSelector } from 'react-redux';

const useProducts = () => {
  const products = useSelector((state: any) => state.products.items);
  return products;
};

export default useProducts;
