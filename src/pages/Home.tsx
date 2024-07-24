import React from 'react';
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import { useGetProductsQuery } from '../services/fakeStoreApi';
import { Product } from '../types/product';

const Home: React.FC = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading products</Text>;

  return (
    <Box p={5}>
      <Heading mb={5}>Welcome to our E-commerce Store</Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {data?.map((product: Product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" p={5}>
            <Heading size="md">{product.title}</Heading>
            <Text mt={4}>{product.description}</Text>
            <Text mt={4} fontWeight="bold">${product.price}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
