// src/components/organisms/Header.tsx

import {
  Box,
  Flex,
  Link,
  IconButton,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { useAppSelector } from '../../../store/hooks';
import { Link as RouterLink } from 'react-router-dom';
import SearchBar from '../../molecules/SearchBar';
import CartFlyout from '../../molecules/CartFlyout';
import CategoryMenu from '../../molecules/CategoryMenu';
import { FaShoppingCart } from 'react-icons/fa'; 
import { useDisclosure, Badge } from '@chakra-ui/react'; 

const Header = () => {
  const wishlistItems = useAppSelector((state) => state.wishlist.items);

  const cartItems = useAppSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const { isOpen, onOpen, onClose } = useDisclosure(); 

  return (
    <Box bg="gray.800" color="white" px="8" py="4">
      <Flex alignItems="center" justifyContent="space-between">
        {/* Left Side: Logo and Categories */}
        <Flex alignItems="center">
          <Box fontSize="xl" fontWeight="bold" mr="4">
            <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
              StoreName
            </Link>
          </Box>
          <CategoryMenu />
        </Flex>

        {/* Center: Search Bar */}
        <Box flex="1" mx="8">
          <SearchBar />
        </Box>

        {/* Right Side: Navigation Links */}
        <Flex alignItems="center">
          {/* All Products Link */}
          <Link
            as={RouterLink}
            to="/products"
            mx="2"
            fontWeight="bold"
            _hover={{ textDecoration: 'none', color: 'teal.300' }}
          >
            All Products
          </Link>

          {/* Wishlist Icon */}
          <Box position="relative">
            <IconButton
              aria-label="Wishlist"
              icon={<StarIcon />}
              variant="ghost"
              color="white"
              _hover={{ bg: 'gray.700' }}
              _active={{ bg: 'gray.700' }}
              mx="2"
              as={RouterLink}
              to="/wishlist"
            />
            {wishlistItems.length > 0 && (
              <Badge
                position="absolute"
                top="0"
                right="0"
                transform="translate(50%, -50%)"
                bg="red.500"
                color="white"
                borderRadius="full"
                px="2"
                py="1"
                fontSize="xs"
              >
                {wishlistItems.length}
              </Badge>
            )}
          </Box>

          {/* Cart Icon */}
          <Box position="relative">
            <IconButton
              aria-label="Cart"
              icon={<FaShoppingCart />}
              variant="ghost"
              color="white"
              _hover={{ bg: 'gray.700' }}
              _active={{ bg: 'gray.700' }}
              mx="2"
              onClick={onOpen} 
            />
            {totalQuantity > 0 && (
              <Badge
                position="absolute"
                top="0"
                right="0"
                transform="translate(50%, -50%)"
                bg="red.500"
                color="white"
                borderRadius="full"
                px="2"
                py="1"
                fontSize="xs"
              >
                {totalQuantity}
              </Badge>
            )}
          </Box>
        </Flex>
      </Flex>

      {/* CartFlyout Component */}
      <CartFlyout isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Header;
