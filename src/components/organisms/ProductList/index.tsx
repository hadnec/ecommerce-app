// src/components/organisms/ProductList/index.tsx
import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { fetchProducts } from '../../../utils/fetchProducts';
import ProductCard from '../../molecules/ProductCard';
import { Product } from '../../../types/product';
import Pagination from '../../molecules/Pagination';

interface ProductListProps {
  category?: string;
  pageSize?: number;
}

const ProductList: React.FC<ProductListProps> = ({ category, pageSize = 10 }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetchProducts({ category, limit: pageSize, page }).then((data) => {
      setProducts(data.products);
      setTotalProducts(data.total);
      setLoading(false);
    });
  }, [category, page]);

  if (loading) {
    return <Spinner />;
  }

  if (!products.length) {
    return <Text>No products found.</Text>;
  }

  return (
    <Box>
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
      <Pagination
        totalItems={totalProducts}
        pageSize={pageSize}
        currentPage={page}
        onPageChange={setPage}
      />
    </Box>
  );
};

export default ProductList;
