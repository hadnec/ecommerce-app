import { useState, useEffect } from 'react';

const useWishlist = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  const addToWishlist = (productId: number) => {
    const updatedWishlist = [...wishlist, productId];
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const removeFromWishlist = (productId: number) => {
    const updatedWishlist = wishlist.filter((id) => id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
  };
};

export default useWishlist;
