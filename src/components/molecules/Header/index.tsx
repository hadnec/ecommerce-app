// src/components/molecules/Header/index.tsx
import React from 'react';
import { Box, HStack, Link, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import CategoryMenu from '../../organisms/CategoryMenu';

const Header: React.FC = () => {
  return (
    <Box as="header" bg="blue.500" p={4} color="white">
      <HStack justifyContent="space-between">
        <Link as={NavLink} to="/">
          <Text fontSize="xl" fontWeight="bold">
            MyStore
          </Text>
        </Link>
        <CategoryMenu />
        <Link as={NavLink} to="/products">
          <Text fontSize="md">Products</Text>
        </Link>
      </HStack>
    </Box>
  );
};

export default Header;
