// src/components/organisms/Header.tsx

import React from 'react';
import {
  Box,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  IconButton,
} from '@chakra-ui/react';
import { ChevronDownIcon, StarIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useAppSelector } from '../../../store/hooks';
import { Link as RouterLink } from 'react-router-dom';
import SearchBar from '../../molecules/SearchBar';

const Header = () => {
  const categories = useAppSelector((state) => state.products.categories);

  return (
    <Box bg="gray.800" color="white" px="8" py="4">
      <Flex alignItems="center" justifyContent="space-between">
        {/* Left Side: Logo and Categories */}
        <Flex alignItems="center">
          <Box fontSize="xl" fontWeight="bold" mr="4">
            <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
              StoreName
            </Link>
          </Box>
          <Menu>
            <MenuButton
              as={Button}
              leftIcon={<HamburgerIcon />}
              rightIcon={<ChevronDownIcon />}
              variant="solid"
              bg="teal.500"
              color="white"
              _hover={{ bg: 'teal.600' }}
              _active={{ bg: 'teal.700' }}
              mx="2"
            >
              Categories
            </MenuButton>
            <MenuList boxShadow="lg" borderColor="teal.500">
              {categories.map((category) => (
                <MenuItem
                  key={category}
                  as={RouterLink}
                  to={`/category/${encodeURIComponent(category)}`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>

        {/* Center: Search Bar */}
        <Box flex="1" mx="8">
          <SearchBar />
        </Box>

        {/* Right Side: Navigation Links */}
        <Flex alignItems="center">
          {/* All Products Link */}
          <Link
            as={RouterLink}
            to="/products"
            mx="2"
            fontWeight="bold"
            _hover={{ textDecoration: 'none', color: 'teal.300' }}
          >
            All Products
          </Link>

          {/* Wishlist Icon */}
          <IconButton
            aria-label="Wishlist"
            icon={<StarIcon />}
            variant="ghost"
            color="white"
            _hover={{ bg: 'gray.700' }}
            _active={{ bg: 'gray.700' }}
            mx="2"
            as={RouterLink}
            to="/wishlist"
          />

          {/* Other navigation links or icons can be added here */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
