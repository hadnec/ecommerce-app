// src/pages/PLP/index.tsx

import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Box, SimpleGrid, Button, Flex } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Header from '../../components/organisms/Header';
import ProductCard from '../../components/molecules/ProductCard';
import { fetchProducts, fetchProductsByCategory } from '../../store/slices/productsSlice';

const ITEMS_PER_PAGE = 8;

const ProductListPage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.items);
  const status = useAppSelector((state) => state.products.status);
  const error = useAppSelector((state) => state.products.error);
  const { category } = useParams<{ category: string }>();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
    if (category) {
      const decodedCategory = decodeURIComponent(category);
      dispatch(fetchProductsByCategory(decodedCategory));
    } else {
      dispatch(fetchProducts());
    }
  }, [dispatch, category]);

  // Pagination logic
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (status === 'loading') {
    return (
      <div>
        <Header />
        <Box p="8">Loading products...</Box>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div>
        <Header />
        <Box p="8">Error: {error}</Box>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div>
        <Header />
        <Box p="8">No products found.</Box>
      </div>
    );
  }

  return (
    <Box>
      <Header />
      <Box p="8">
        <SimpleGrid columns={[1, 2, 3, 4]} spacing="8">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
        {/* Pagination */}
        <Flex justifyContent="center" mt="8" alignItems="center">
          <Button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            mx="1"
          >
            Previous
          </Button>
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              mx="1"
              variant={currentPage === index + 1 ? 'solid' : 'outline'}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            mx="1"
          >
            Next
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductListPage;
