import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationOwner from './Component/RegisterationOwner';
import BookRent from './Component/BookRent';
import LoginPage from './Component/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/bookrent" element={<BookRent />} />
        <Route path="/register" element={<RegistrationOwner />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
