import React from 'react';
import { HStack, Link } from '@chakra-ui/react';

const NavMenu: React.FC = () => (
  <HStack spacing={4}>
    <Link href="/">Home</Link>
    <Link href="/category/men">Men</Link>
    <Link href="/category/women">Women</Link>
    <Link href="/category/accessories">Accessories</Link>
  </HStack>
);

export default NavMenu;
