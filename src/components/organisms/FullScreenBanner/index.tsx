
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const FullScreenBanner: React.FC = () => {
  return (
    <Box
      bgImage="url('/path/to/image.jpg')"
      bgPosition="center"
      bgSize="cover"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <Text
        fontSize="4xl"
        fontWeight="bold"
        color="white"
        bg="rgba(0, 0, 0, 0.5)"
        p={4}
        borderRadius="md"
      >
        Big Sale on All Items!
      </Text>
    </Box>
  );
};

export default FullScreenBanner;
