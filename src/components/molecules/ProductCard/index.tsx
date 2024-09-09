// src/components/molecules/ProductCard/index.tsx
import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Product } from '../../../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={4}
        _hover={{ boxShadow: 'md', cursor: 'pointer' }}
      >
        <Image src={product.image} alt={product.title} boxSize="150px" objectFit="contain" mx="auto" />
        <Text fontWeight="bold" mt={2}>
          {product.title}
        </Text>
        <Text>${product.price}</Text>
      </Box>
    </Link>
  );
};

export default ProductCard;
