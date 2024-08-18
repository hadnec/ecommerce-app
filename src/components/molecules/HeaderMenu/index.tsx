
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const HeaderMenu: React.FC = () => {
  return (
    <Box
      position="absolute"
      top="100%"
      left={0}
      w="100%"
      bg="white"
      boxShadow="md"
      zIndex={9999}
      p={4}
      onMouseEnter={() => {
        document.body.style.filter = "blur(5px)";
      }}
      onMouseLeave={() => {
        document.body.style.filter = "none";
      }}
    >
      <Text>Placeholder for Menu Items</Text>
    </Box>
  );
};

export default HeaderMenu;
