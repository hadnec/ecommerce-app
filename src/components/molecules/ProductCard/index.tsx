// src/components/molecules/ProductCard.tsx

import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description?: string; // Made optional
  category?: string;    // Made optional
  rating?: Rating;      // Made optional
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      cursor="pointer"
      onClick={handleClick}
      _hover={{ boxShadow: 'md' }}
    >
      <Image
        src={product.image}
        alt={product.title}
        width="100%"
        height="300px"
        objectFit="contain"
      />
      <Box p="4">
        <Text fontWeight="bold" noOfLines={1}>
          {product.title}
        </Text>
        <Text mt="2" fontSize="lg" color="gray.600">
          ${product.price}
        </Text>
      </Box>
    </Box>
  );
};

export default ProductCard;
