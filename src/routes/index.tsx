
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import ProductListPage from '../pages/PLP';
import ProductDetailPage from '../pages/PDP';
import WishlistPage from '../pages/Wishlist';


const RoutesComponent = () => (
  <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/category/:category" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
    </Router>
);

export default RoutesComponent;
