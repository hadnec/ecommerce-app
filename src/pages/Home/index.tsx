// src/pages/Home/index.tsx
import React from 'react';
import FreeShippingBar from '../../components/atoms/FreeShippingBar';
import Header from '../../components/organisms/Header';
import FullScreenBanner from '../../components/organisms/FullScreenBanner';
import ProductSlider from '../../components/molecules/ProductSlider';
import SplitImageSection from '../../components/organisms/SplitImageSection';
import FeaturedProducts from '../../components/organisms/FeaturedProducts';
import { useGetProductsQuery } from '../../store/fakeStoreApi';

const Home: React.FC = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <>
      <FreeShippingBar />
      <Header />
      <FullScreenBanner />
      <ProductSlider products={products ?? []} />
      <SplitImageSection />
      <ProductSlider products={products ?? []} />
      <FeaturedProducts products={products ?? []} />
    </>
  );
};

export default Home;
