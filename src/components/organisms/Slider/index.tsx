// src/components/organisms/Slider/index.tsx
import { Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCard from '../../molecules/ProductCard';

interface SliderProps {
  products: Array<{
    id: number;
    title: string;
    image: string;
    price: number;
  }>;
}

const Slider = ({ products }: SliderProps) => {
  if (!products || products.length === 0) {
    return <div>No products to display.</div>;
  }

  return (
    <Box>
      <Swiper spaceBetween={50} slidesPerView={3}>
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Slider;
