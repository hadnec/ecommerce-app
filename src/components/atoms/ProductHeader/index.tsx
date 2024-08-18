import React from 'react';
import { Heading } from '@chakra-ui/react';

interface ProductHeaderProps {
  title: string;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({ title }) => (
  <Heading size="md">{title}</Heading>
);

export default ProductHeader;
