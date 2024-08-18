import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Slider from 'react-slick';
import { Product } from '../../../types/product';

interface ProductSliderProps {
  products: Product[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of slides shown based on screen size
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Box maxWidth="1200px" margin="0 auto" padding="20px">
      <Slider {...settings}>
        {products.map((product) => (
          <Box key={product.id} p={2}>
            <Box
              bgImage={`url(${product.image})`}
              bgPosition="center"
              bgSize="contain"
              bgRepeat="no-repeat"
              height="300px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="md"
              overflow="hidden"
              boxShadow="md"
            >
              <Text
                bg="rgba(255, 255, 255, 0.7)"
                p={2}
                borderRadius="md"
                fontWeight="bold"
                textAlign="center"
              >
                {product.title}
              </Text>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ProductSlider;
