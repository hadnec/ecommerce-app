import React from 'react';
import Slider from 'react-slick';
import { Box, Text } from '@chakra-ui/react';
import { Product } from '../../../types/product';

interface ProductSliderProps {
  products: Product[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  console.log("Products received by ProductSlider:", products);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box width="100%" overflow="hidden" position="relative" zIndex="9999" border="2px solid red" minHeight="60vh">
      <Slider {...settings}>
        {products.map((product) => (
          <Box
            key={product.id}
            bgImage={`url(${product.image})`}
            bgSize="cover"
            bgPosition="center"
            height="60vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            border="2px solid blue"
            visibility="visible"
          >
            <Text color="white" fontSize="2xl" fontWeight="bold" bg="rgba(0, 0, 0, 0.5)" p="4" border="1px solid green">
              {product.title}
            </Text>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ProductSlider;
