
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const FreeShippingBar: React.FC = () => (
  <Box bg="white" w="100%" p={2} textAlign="center" position="fixed" top={0} zIndex={9999}>
    <Text fontSize="sm">Free shipping on orders over $50</Text>
  </Box>
);

export default FreeShippingBar;
