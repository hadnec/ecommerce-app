// src/components/organisms/CategoryMenu/index.tsx
import React, { useState, useEffect } from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { fetchCategories } from '../../../utils/fetchProducts';

const CategoryMenu: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  return (
    <Menu>
      <MenuButton as={Button} bg="white" color="blue.500">
        Categories
      </MenuButton>
      <MenuList>
        {categories.map((category) => (
          <MenuItem key={category} as={NavLink} to={`/products?category=${category}`}>
            {category}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CategoryMenu;
