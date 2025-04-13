import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

import HomePage from './pages/home/Home.page';
import SearchHistory from './pages/SearchBarPage/SearchBar.page';
import MicroPhoneScreen from './components/MicroPhone/Microphone.component';
import GoogleLensSearch from './components/LensSearch/LensSearch.component';

defineCustomElements(window);


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchHistory />} />
        <Route path="/mic" element={<MicroPhoneScreen />} />
        <Route path="/lense" element={<GoogleLensSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
