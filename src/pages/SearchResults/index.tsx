// src/pages/SearchResults/index.tsx
import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SearchResults: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query') || '';

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      const filteredProducts = response.data.filter((product: any) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setProducts(filteredProducts);
    };
    fetchProducts();
  }, [searchQuery]);

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>
        Search Results for "{searchQuery}"
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="md" p={4}>
            <Text fontWeight="bold">{product.title}</Text>
            <Text>${product.price}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SearchResults;
