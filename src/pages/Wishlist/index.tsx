import { useEffect, useState } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import Header from '../../components/organisms/Header';
import ProductCard from '../../components/molecules/ProductCard';

const WishlistPage = () => {
  const [wishlistProducts, setWishlistProducts] = useState<any[]>([]);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const fetchWishlistProducts = async () => {
      const products = await Promise.all(
        wishlist.map(async (id: number) => {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          return response.json();
        })
      );
      setWishlistProducts(products);
    };
    fetchWishlistProducts();
  }, []);

  return (
    <Box>
      <Header />
      <SimpleGrid columns={[2, null, 4]} spacing="8" p="8">
        {wishlistProducts.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default WishlistPage;
