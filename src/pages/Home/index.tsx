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
      {products && (
        <>
          <FullScreenBanner imageUrl={products[0]?.image || ''} text="Big Sale!" />
          <ProductSlider products={products.slice(1, 6)} />
          <SplitImageSection images={[products[6]?.image || '', products[7]?.image || '']} />
          <ProductSlider products={products.slice(8, 12)} />
          <FeaturedProducts products={products.slice(12, 14)} />
        </>
      )}
    </>
  );
};

export default Home;
