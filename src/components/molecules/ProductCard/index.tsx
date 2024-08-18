// src/components/molecules/ProductCard/index.tsx
import React from 'react';
import { Box, Image, Text, Heading } from '@chakra-ui/react';
import { Product } from '../../../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
      <Image src={product.image} alt={product.title} objectFit="cover" boxSize="200px" mx="auto" />
      <Heading as="h3" size="md" mt={4} textAlign="center">
        {product.title}
      </Heading>
      <Text mt={2} color="gray.500" textAlign="center">
        {product.description}
      </Text>
      <Text mt={4} fontSize="xl" fontWeight="bold" textAlign="center">
        ${product.price}
      </Text>
    </Box>
  );
};

export default ProductCard;
