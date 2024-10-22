// src/pages/Home/index.tsx

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Box, Heading } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import Header from '../../components/organisms/Header';
import Slider from '../../components/organisms/Slider';
import ProductCard from '../../components/molecules/ProductCard';
import { fetchProducts } from '../../store/slices/productsSlice';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.items);
  const status = useAppSelector((state) => state.products.status);
  const error = useAppSelector((state) => state.products.error);

  useEffect(() => {
    if (status !== 'succeeded' || products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, status, products.length]);

  if (status === 'loading') {
    return <div>Loading products...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  if (products.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <Box>
      <Helmet>
        <title>Home | StoreName</title>
        <meta name="description" content="Welcome to our online store!" />
      </Helmet>
      <Header />
      {/* Full-screen image with text */}
      <Box
        // bgImage="url('https://via.placeholder.com/1920x600')"
        bgImage="url('https://images.ctfassets.net/z8ibh2mxnqik/2b8GAYo0bNdAqUa3RBRAPM/23bf4223e3e0d6ac66aae2ea196cf6d9/DESKTOP.jpg?w=1920&h=1080&fm=webp')"
        bgSize="cover"
        bgPos="contain"
        h="1080px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box bg="rgba(255,255,255,0.8)" p="6" borderRadius="md">
          <Heading size="2xl">Big Sale!</Heading>
        </Box>
      </Box>
      {/* Slider with products */}
      <Slider products={products} />
      {/* Full-screen image with text */}
      <Box
        // bgImage="url('https://via.placeholder.com/1920x600')"
        bgImage="url('https://images.ctfassets.net/z8ibh2mxnqik/6nJczojyixjSONzJYJqZQS/f0258a7ca5e944edc11ea0c1e97128ec/DESKTOP.jpg?w=1920&h=1080&fm=webp')"
        bgSize="cover"
        bgPos="contain"
        h="1080px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      ></Box>
      {/* Two images splitting the screen vertically 
      <Box display="flex" h="400px">
        <Box flex="1" bgImage="url('https://via.placeholder.com/960x400')" bgSize="cover" />
        <Box flex="1" bgImage="url('https://via.placeholder.com/960x400')" bgSize="cover" />
      </Box>
      */}
      {/* Another slider */}
      <Slider products={products} />
      {/* Two product cards without descriptions */}
      {products.length >= 2 ? (
        <Box display="flex" justifyContent="space-around" mt="8">
          <ProductCard product={products[0]} />
          <ProductCard product={products[1]} />
        </Box>
      ) : (
        <div>Not enough products to display.</div>
      )}
    </Box>
  );
};

export default HomePage;
