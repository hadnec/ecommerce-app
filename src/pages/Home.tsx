import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { useGetProductsQuery } from '../services/fakeStoreApi';
import { Product } from '../types/product';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import ProductSlider from '../components/molecules/ProductSlider';

const Home: React.FC = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading products</Text>;

  return (
    <>
      <Header />
      <Box p={5}>
        <Heading mb={5}>Welcome to our E-commerce Store</Heading>
        <ProductSlider products={data ?? []} />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
