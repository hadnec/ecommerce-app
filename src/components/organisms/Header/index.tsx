
import React from 'react';
import { Box, Flex, Spacer, Text } from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <Box position="fixed" top="30px" w="100%" zIndex={9998}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        px={4}
        py={2}
        bg="transparent"
        color="white"
        transition="color 0.3s"
        _hover={{ color: "black" }}
      >
        {/* Left - Categories */}
        <Text>Categories</Text>
        {/* Center - Logo/Title */}
        <Text fontWeight="bold" fontSize="xl">
          ShopName
        </Text>
        {/* Right - Cart, Language, Region */}
        <Flex>
          <Text mx={2}>Cart</Text>
          <Text mx={2}>Language</Text>
          <Text mx={2}>Region</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
