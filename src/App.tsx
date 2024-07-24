import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PLP from './pages/PLP';
import PDP from './pages/PDP';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<PLP />} />
        <Route path="/product/:id" element={<PDP />} />
      </Routes>
    </Router>
  );
};

export default App;
