// src/components/organisms/FeaturedProducts/index.tsx
import React from 'react';
import { Box, SimpleGrid, Text } from '@chakra-ui/react'; // Add Text here
import { Product } from '../../../types/product';

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  return (
    <SimpleGrid columns={2} spacing={10} mt={10}>
      {products.slice(0, 2).map((product) => (
        <Box key={product.id} height="60vh" bgImage={`url(${product.image})`} bgSize="cover">
          <Text>{product.title}</Text> {/* Corrected */}
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default FeaturedProducts;
