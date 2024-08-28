import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import RegistrationOwner from './Component/RegisterationOwner';
import BookRent from './Component/BookRent';
import LoginPage from './Component/LoginPage';
import HomePage from './Component/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/bookrent" element={<BookRent />} />
        <Route path="/register" element={<RegistrationOwner />} />
      </Routes>
    </Router>
  );
}

export default App;
