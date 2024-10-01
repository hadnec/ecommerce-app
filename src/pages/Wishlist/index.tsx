// src/pages/Wishlist/index.tsx

import React from 'react';
import { Box, Heading, SimpleGrid, Button } from '@chakra-ui/react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import Header from '../../components/organisms/Header';
import ProductCard from '../../components/molecules/ProductCard';
import { removeItem } from '../../store/slices/wishlistSlice';

const WishlistPage = () => {
  const dispatch = useAppDispatch();
  const wishlistItems = useAppSelector((state) => state.wishlist.items);

  const handleRemoveFromWishlist = (id: number) => {
    dispatch(removeItem(id));
  };

  return (
    <Box>
      <Header />
      <Box p="8">
        <Heading mb="8">My Wishlist</Heading>
        {wishlistItems.length === 0 ? (
          <Box>No items in your wishlist.</Box>
        ) : (
          <SimpleGrid columns={[1, 2, 3, 4]} spacing="8">
            {wishlistItems.map((product) => (
              <Box key={product.id} position="relative">
                <ProductCard product={product} />
                <Button
                  position="absolute"
                  top="2"
                  right="2"
                  size="sm"
                  onClick={() => handleRemoveFromWishlist(product.id)}
                >
                  Remove
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        )}
      </Box>
    </Box>
  );
};

export default WishlistPage;
