import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/Home.page';
import SearchHistory from './pages/SearchBarPage/SearchBar.page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchHistory />} />
      </Routes>
    </Router>
  );
}

export default App;