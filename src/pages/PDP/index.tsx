// src/pages/PDP/index.tsx

import React, { useEffect } from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import Header from '../../components/organisms/Header';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchProductById, clearSelectedProduct } from '../../store/slices/productsSlice';
import { addItem } from '../../store/slices/wishlistSlice';
import { addToCart } from '../../store/slices/cartSlice'; 
import ImageZoom from '../../components/molecules/ImageZoom';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.products.selectedProduct);
  const status = useAppSelector((state) => state.products.status);
  const error = useAppSelector((state) => state.products.error);
  const wishlistItems = useAppSelector((state) => state.wishlist.items);

  const isInWishlist = product ? wishlistItems.some((item) => item.id === product.id) : false;

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }

    return () => {
      dispatch(clearSelectedProduct());
    };
  }, [dispatch, id]);

  const handleAddToWishlist = () => {
    if (product) {
      dispatch(addItem(product));
    }
  };

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  if (status === 'loading' || !product) {
    return (
      <div>
        <Header />
        <Box p="8">Loading product...</Box>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div>
        <Header />
        <Box p="8">Error: {error}</Box>
      </div>
    );
  }

  return (
    <Box>
      <Header />
      <Box display="flex" p="8">
        <Box flex="1">
          <ImageZoom src={product.image} alt={product.title} />
        </Box>
        <Box flex="1" ml="8">
          <Heading>{product.title}</Heading>
          <Text mt="4" fontSize="2xl" color="gray.600">
            ${product.price}
          </Text>
          <Text mt="4">{product.description}</Text>
          <Button
            mt="4"
            onClick={handleAddToWishlist}
            disabled={isInWishlist}
            colorScheme={isInWishlist ? 'green' : 'teal'}
          >
            {isInWishlist ? 'Added to Wishlist' : 'Add to Wishlist'}
          </Button>
          <Button
            mt="4"
            ml="4"
            onClick={handleAddToCart}
            colorScheme="blue"
          >
            Add to Cart
          </Button>
          {/* Additional collapsible sections */}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetailPage;
