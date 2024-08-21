import React from 'react';
import { Box, HStack, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

const Header: React.FC = () => (
  <Box
    as="header"
    position="fixed"
    top="30px" // Под FreeShippingBar
    width="100%"
    zIndex={900}
    bg="transparent"
    _hover={{ bg: "white" }}
    transition="background-color 0.3s ease"
  >
    <HStack justify="space-between" px={8} py={4}>
      <HStack spacing={4}>
        <Menu>
          <MenuButton>Categories</MenuButton>
          <MenuList>
            {/* Placeholder items */}
            <MenuItem>Category 1</MenuItem>
            <MenuItem>Category 2</MenuItem>
            <MenuItem>Category 3</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
      <Box fontWeight="bold" fontSize="lg">My Store</Box>
      <HStack spacing={4}>
        <Box>Cart</Box>
        <Box>Language/Region</Box>
      </HStack>
    </HStack>
  </Box>
);

export default Header;
