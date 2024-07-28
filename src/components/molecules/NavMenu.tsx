import React from 'react';
import { Box } from '@chakra-ui/react';
import NavLink from '../atoms/NavLink';

const NavMenu: React.FC = () => {
  return (
    <Box display="flex">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/category/electronics">Electronics</NavLink>
      <NavLink href="/category/jewelery">Jewelery</NavLink>
      <NavLink href="/category/men's clothing">Men's Clothing</NavLink>
      <NavLink href="/category/women's clothing">Women's Clothing</NavLink>
    </Box>
  );
};

export default NavMenu;
