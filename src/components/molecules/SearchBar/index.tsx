import { useState, useEffect, useRef } from 'react';
import { Input, InputGroup, InputRightElement, Box, List, ListItem } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import useSearch from '../../../hooks/useSearch';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const searchResults = useSearch(searchTerm);
  const navigate = useNavigate();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      try {
        const parsedHistory = JSON.parse(savedHistory);
        if (Array.isArray(parsedHistory)) {
          setSearchHistory(parsedHistory);
        } else {
          console.error('Parsed searchHistory is not an array:', parsedHistory);
          setSearchHistory([]);
        }
      } catch (error) {
        console.error('Error parsing searchHistory from localStorage:', error);
        setSearchHistory([]);
      }
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    // Bind the event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener when the component unmounts
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const handleResultClick = (productId: number, productTitle: string) => {
    // Update the search history
    const filteredHistory = Array.isArray(searchHistory)
      ? searchHistory.filter((h) => h !== productTitle)
      : [];

    const updatedHistory = [productTitle, ...filteredHistory].slice(0, 3);
    setSearchHistory(updatedHistory);
    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));

    // Update viewed products
    const viewedProductsRaw = localStorage.getItem('viewedProducts');
    let viewedProducts: number[] = [];

    if (viewedProductsRaw) {
      try {
        const parsedViewed = JSON.parse(viewedProductsRaw);
        if (Array.isArray(parsedViewed)) {
          viewedProducts = parsedViewed;
        } else {
          console.error('Parsed viewedProducts is not an array:', parsedViewed);
        }
      } catch (error) {
        console.error('Error parsing viewedProducts from localStorage:', error);
      }
    }

    const updatedViewed = [productId, ...viewedProducts.filter((id) => id !== productId)].slice(0, 3);
    localStorage.setItem('viewedProducts', JSON.stringify(updatedViewed));
    navigate(`/product/${productId}`);
    setIsFocused(false); // Close the dropdown after navigation
    setSearchTerm(''); // Clear the search term
  };

  const handleHistoryItemClick = (term: string) => {
    setSearchTerm(term);
    setIsFocused(true);
  };

  return (
    <Box position="relative" ref={wrapperRef}>
      <InputGroup>
        <Input
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          // No need for onBlur here since we're handling clicks outside
        />
        <InputRightElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputRightElement>
      </InputGroup>

      {isFocused && searchTerm && searchResults.length > 0 && (
        <Box
          position="absolute"
          bg="white"
          width="100%"
          mt="1"
          borderRadius="md"
          boxShadow="md"
          zIndex="10"
        >
          <List spacing="1">
            {searchResults.map((product: any) => (
              <ListItem
                key={product.id}
                p="2"
                cursor="pointer"
                _hover={{ bg: 'gray.100' }}
                onMouseDown={() => handleResultClick(product.id, product.title)} // Pass product title
              >
                {product.title}
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      {isFocused && searchTerm && searchResults.length === 0 && (
        <Box
          position="absolute"
          bg="white"
          width="100%"
          mt="1"
          p="2"
          borderRadius="md"
          boxShadow="md"
          zIndex="10"
        >
          No products found.
        </Box>
      )}

      {isFocused && !searchTerm && searchHistory.length > 0 && (
        <Box
          position="absolute"
          bg="white"
          width="100%"
          mt="1"
          borderRadius="md"
          boxShadow="md"
          zIndex="10"
        >
          <Box p="2" borderBottom="1px solid" borderColor="gray.200">
            Recent Searches
          </Box>
          <List spacing="1">
            {searchHistory.map((item) => (
              <ListItem
                key={item}
                p="2"
                cursor="pointer"
                _hover={{ bg: 'gray.100' }}
                onMouseDown={() => handleHistoryItemClick(item)} // Handle history item click
              >
                {item}
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
