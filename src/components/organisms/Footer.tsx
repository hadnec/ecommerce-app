import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="gray.100" p={4} mt={4} boxShadow="md">
      <Text textAlign="center">© 2024 Your E-commerce Store. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
