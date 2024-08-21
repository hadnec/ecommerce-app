import React from 'react';
import { Box, Text } from '@chakra-ui/react';

interface FullScreenBannerProps {
  imageUrl: string;
  text: string;
}

const FullScreenBanner: React.FC<FullScreenBannerProps> = ({ imageUrl, text }) => (
  <Box
    height="100vh"
    bgImage={`url(${imageUrl})`}
    bgSize="cover"
    bgPos="center"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Text fontSize="4xl" fontWeight="bold" color="white" bg="rgba(0,0,0,0.5)" p={4}>
      {text}
    </Text>
  </Box>
);

export default FullScreenBanner;
