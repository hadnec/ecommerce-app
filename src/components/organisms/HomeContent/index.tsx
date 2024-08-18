// src/components/organisms/HomeContent/index.tsx
import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useGetProductsQuery } from '../../../store/fakeStoreApi';
import ProductSlider from '../../molecules/ProductSlider';

const HomeContent: React.FC = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading products</Text>;

  return (
    <Box>
      <ProductSlider products={products ?? []} />
    </Box>
  );
};

export default HomeContent;
