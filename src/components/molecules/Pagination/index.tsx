// src/components/molecules/Pagination/index.tsx
import React from 'react';
import { HStack, Button } from '@chakra-ui/react';

interface PaginationProps {
  totalItems: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, pageSize, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <HStack spacing={2} justifyContent="center" mt={4}>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          isActive={currentPage === page}
        >
          {page}
        </Button>
      ))}
    </HStack>
  );
};

export default Pagination;
