import React from 'react';
import { SimpleGrid, Box, Text } from '@chakra-ui/react';
import { Product } from '../../../types/product';

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => (
  <SimpleGrid columns={2} spacing={4}>
    {products.map((product) => (
      <Box key={product.id} height="60vh" bgImage={`url(${product.image})`} bgSize="cover">
        <Text color="white" fontSize="2xl" fontWeight="bold">{product.title}</Text>
      </Box>
    ))}
  </SimpleGrid>
);

export default FeaturedProducts;
