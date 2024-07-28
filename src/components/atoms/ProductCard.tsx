import React from 'react';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={5}>
      <Image src={product.image} alt={product.title} />
      <Heading size="md" mt={4}>{product.title}</Heading>
      <Text mt={2}>{product.description}</Text>
      <Text mt={4} fontWeight="bold">${product.price}</Text>
    </Box>
  );
};

export default ProductCard;
