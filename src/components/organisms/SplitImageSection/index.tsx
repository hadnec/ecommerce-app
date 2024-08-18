
import React from 'react';
import { Box } from '@chakra-ui/react';

const SplitImageSection: React.FC = () => {
  return (
    <Box display="flex" h="100vh">
      <Box flex={1} bgImage="url('/path/to/image1.jpg')" bgSize="cover" />
      <Box flex={1} bgImage="url('/path/to/image2.jpg')" bgSize="cover" />
    </Box>
  );
};

export default SplitImageSection;
