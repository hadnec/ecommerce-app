// src/pages/PLP/index.tsx
import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Text, Button, Image, Select } from '@chakra-ui/react';
import axios from 'axios';

const PLP: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(8); 
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Box p={4}>
      <Select
        mb={4}
        onChange={(e) => setSelectedCategory(e.target.value)}
        placeholder="Select Category"
      >
        <option value="all">All Categories</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </Select>

      <SimpleGrid columns={[1, 2, 3, 4]} spacing={4}>
        {currentProducts.map((product) => (
          <Box
            key={product.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
          >
            <Image src={product.image} alt={product.title} boxSize="200px" objectFit="cover" />
            <Text mt={2} fontWeight="bold">
              {product.title}
            </Text>
            <Text>${product.price}</Text>
          </Box>
        ))}
      </SimpleGrid>

      <Box mt={4} display="flex" justifyContent="center">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            mx={1}
            colorScheme={currentPage === index + 1 ? 'blue' : 'gray'}
          >
            {index + 1}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default PLP;
