
// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/molecules/Header';
import PLP from './pages/PLP';
import PDP from './pages/PDP';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/products" element={<PLP />} />
        <Route path="/products/:id" element={<PDP />} />
        </Routes>
    </Router>
  );
};

export default App;
