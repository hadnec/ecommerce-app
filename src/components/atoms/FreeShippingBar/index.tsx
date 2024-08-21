import React from 'react';
import { Box } from '@chakra-ui/react';

const FreeShippingBar: React.FC = () => (
  <Box
    bg="white"
    color="black"
    textAlign="center"
    fontSize="sm"
    p={2}
    position="fixed"
    top={0}
    width="100%"
    zIndex={1000}
  >
    Free Shipping on all orders!
  </Box>
);

export default FreeShippingBar;
