// src/pages/ProductDetail/index.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Text, Image } from '@chakra-ui/react';
import axios from 'axios';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(response.data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <Text>Loading...</Text>;

  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold">{product.title}</Text>
      <Image src={product.image} alt={product.title} />
      <Text mt={2}>{product.description}</Text>
      <Text fontWeight="bold">${product.price}</Text>
    </Box>
  );
};

export default ProductDetail;
  