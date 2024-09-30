// src/hooks/useSearch.ts
import { useState, useEffect } from 'react';
import { useAppSelector } from '../store/hooks';

const useSearch = (searchTerm: string) => {
  const [results, setResults] = useState<any[]>([]);
  const products = useAppSelector((state) => state.products.items);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setResults([]);
      return;
    }

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filtered);
  }, [searchTerm, products]);

  return results;
};

export default useSearch;
