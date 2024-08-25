// src/components/molecules/ProductSlider/index.tsx
import React from 'react';
import Slider from 'react-slick';
import { Box } from '@chakra-ui/react';
import ProductCard from '../ProductCard';
import { Product } from '../../../types/product';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ProductSliderProps {
  products: Product[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true, 
  };

  return (
    <Box maxWidth="1200px" margin="0 auto" padding="20px"> 
      <Slider {...settings}>
        {products.map((product) => (
          <Box key={product.id} padding="10px">
            <ProductCard product={product} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ProductSlider;
