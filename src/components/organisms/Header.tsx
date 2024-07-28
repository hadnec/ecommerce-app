import React from 'react';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import Logo from '../atoms/Logo';
import NavMenu from '../molecules/NavMenu';

const Header: React.FC = () => {
  return (
    <Box as="header" bg="gray.100" p={4} boxShadow="md">
      <Flex>
        <Logo />
        <Spacer />
        <NavMenu />
      </Flex>
    </Box>
  );
};

export default Header;
