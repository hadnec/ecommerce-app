// src/components/organisms/Header/index.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Box, HStack, Menu, MenuButton, MenuList, MenuItem, Input, Button, VStack, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchHistory, setSearchHistory] = useState<{ queries: string[]; products: any[] }>(() => {
    const savedHistory = localStorage.getItem('searchHistory');
    return savedHistory ? JSON.parse(savedHistory) : { queries: [], products: [] };
  });

  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = async () => {
    if (searchQuery.trim()) {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      const results = response.data.filter((product: any) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  const handleProductClick = (product: any) => {
    const newHistory = { ...searchHistory };
    newHistory.products.unshift(product);
    if (newHistory.products.length > 3) newHistory.products.pop();
    setSearchHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
    setSearchQuery('');
    navigate(`/product/${product.id}`);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <Box as="header" position="fixed" top="40px" width="100%" zIndex={900} bg="white" shadow="md">
      <HStack justify="space-between" px={8} py={4}>
        {/* Логотип и категории */}
        <HStack spacing={4}>
          <Menu>
            <MenuButton>Categories</MenuButton>
            <MenuList>
              <MenuItem>Category 1</MenuItem>
              <MenuItem>Category 2</MenuItem>
              <MenuItem>Category 3</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
        <Box fontWeight="bold" fontSize="lg">My Store</Box>
        <HStack spacing={4}>
          <Button onClick={toggleSearch}>Search</Button>
          <Box>Cart</Box>
          <Box>Language/Region</Box>
        </HStack>
      </HStack>

      {/* Поисковый флайаут */}
      {isSearchOpen && (
        <Box ref={searchRef} bg="white" p={4} shadow="md" mt={2} transition="max-height 0.3s ease" maxHeight="400px" overflow="hidden">
          <VStack spacing={4} align="stretch">
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Button onClick={handleSearch}>Search</Button>

            {/* История поиска, только если поле поиска пустое */}
            {!searchQuery && (
              <Box>
                <Text fontWeight="bold">Search History:</Text>
                {searchHistory.queries.map((query, index) => (
                  <Text key={index} fontSize="sm">
                    {query}
                  </Text>
                ))}
              </Box>
            )}

            {/* Результаты поиска */}
            {searchResults.length > 0 ? (
              searchResults.map((product) => (
                <Box
                  key={product.id}
                  onClick={() => handleProductClick(product)}
                  cursor="pointer"
                  borderWidth="1px"
                  borderRadius="md"
                  p={2}
                  _hover={{ bg: 'gray.100' }}
                >
                  <Text>{product.title}</Text>
                  <Text fontSize="sm" color="gray.500">
                    ${product.price}
                  </Text>
                </Box>
              ))
            ) : searchQuery && (
              <Text>No products found.</Text>
            )}
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default Header;
