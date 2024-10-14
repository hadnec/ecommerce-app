// src/components/molecules/CategoryMenu.tsx

import React, { useEffect } from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button, Text } from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { fetchCategories } from '../../../store/slices/productsSlice';
import { Link as RouterLink } from 'react-router-dom';

const CategoryMenu = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.products.categories);
  const categoriesStatus = useAppSelector((state) => state.products.categoriesStatus);

  useEffect(() => {
    if (categories.length === 0 && categoriesStatus === 'idle') {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.length, categoriesStatus]);

  return (
    <Menu>
      <MenuButton
        as={Button}
        leftIcon={<HamburgerIcon />}
        rightIcon={<ChevronDownIcon />}
        variant="solid"
        bg="teal.500"
        color="white"
        _hover={{ bg: 'teal.600' }}
        _active={{ bg: 'teal.700' }}
        mx="2"
      >
        Category
      </MenuButton>
      <MenuList boxShadow="lg" borderColor="teal.500">
        {categories.map((category) => (
          <MenuItem
            key={category}
            as={RouterLink}
            to={`/category/${encodeURIComponent(category)}`}
          >
            <Text color="black">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Text>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CategoryMenu;
