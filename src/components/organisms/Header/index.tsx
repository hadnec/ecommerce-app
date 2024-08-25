// src/components/organisms/Header/index.tsx
import React from 'react';
import { Box, HStack, Menu, MenuButton, MenuList, MenuItem, Link, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import CategoryMenu from '../CategoryMenu';

const Header: React.FC = () => (
  <Box
    as="header"
    position="fixed"
    top="30px" 
    width="100%"
    zIndex={900}
    bg="transparent"
    _hover={{ bg: "white" }}
    transition="background-color 0.3s ease"
  >
    <HStack justify="space-between" px={8} py={4}>
      <HStack spacing={4}>
        {/* Меню категорий с ссылками на PLP */}
        <Menu>
          <MenuButton>Categories</MenuButton>
          <MenuList>
            <CategoryMenu />
          </MenuList>
        </Menu>
      </HStack>

      <Box fontWeight="bold" fontSize="lg">
        <Link as={NavLink} to="/" _hover={{ textDecoration: 'none' }}>
          My Store
        </Link>
      </Box>

      <HStack spacing={4}>
        <Box>
          <Link as={NavLink} to="/products">
            Products
          </Link>
        </Box>
        <Box>Cart</Box>
        <Box>Language/Region</Box>
      </HStack>
    </HStack>
  </Box>
);

export default Header;
