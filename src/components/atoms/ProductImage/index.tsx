import React from 'react';
import { Image } from '@chakra-ui/react';

interface ProductImageProps {
  src: string;
  alt: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ src, alt }) => (
  <Image src={src} alt={alt} borderRadius="md" />
);

export default ProductImage;
