// src/components/molecules/CartFlyout.tsx

import React from 'react';
import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Text,
  Image,
  Flex,
  IconButton,
  Input,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { removeFromCart, updateQuantity } from '../../../store/slices/cartSlice';
import { useNavigate } from 'react-router-dom';

interface CartFlyoutProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartFlyout: React.FC<CartFlyoutProps> = ({ isOpen, onClose }) => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    alert('Thank you for your purchase!');
    onClose();
  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">Cart</DrawerHeader>
        <DrawerBody>
          {cartItems.length === 0 ? (
            <Text>Your cart is empty.</Text>
          ) : (
            cartItems.map((item) => (
              <Flex key={item.id} mb="4" alignItems="center">
                <Image
                  src={item.image}
                  alt={item.title}
                  boxSize="60px"
                  objectFit="cover"
                  mr="4"
                  cursor="pointer"
                  onClick={() => {
                    navigate(`/product/${item.id}`);
                    onClose();
                  }}
                />
                <Box flex="1">
                  <Text fontWeight="bold" noOfLines={1}>
                    {item.title}
                  </Text>
                  <Text>${item.price.toFixed(2)}</Text>
                  <Flex mt="2" alignItems="center">
                    <Text mr="2">Quantity:</Text>
                    <Input
                      type="number"
                      width="60px"
                      value={item.quantity}
                      min={1}
                      onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                    />
                  </Flex>
                </Box>
                <IconButton
                  aria-label="Remove"
                  icon={<CloseIcon />}
                  size="sm"
                  onClick={() => handleRemoveItem(item.id)}
                />
              </Flex>
            ))
          )}
        </DrawerBody>
        {cartItems.length > 0 && (
          <DrawerFooter borderTopWidth="1px" flexDirection="column" alignItems="stretch">
            <Text mb="2">Total Amount: ${totalAmount.toFixed(2)}</Text>
            <Button colorScheme="green" width="100%" onClick={handleCheckout}>
              Buy
            </Button>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default CartFlyout;
