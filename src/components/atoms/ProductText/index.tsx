import React from 'react';
import { Text } from '@chakra-ui/react';

interface ProductTextProps {
  description: string;
}

const ProductText: React.FC<ProductTextProps> = ({ description }) => (
  <Text mt={4}>{description}</Text>
);

export default ProductText;
