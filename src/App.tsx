import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './comp/Landing/Landing';
import MainLayout from './comp/Main/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/paymants" element={<MainLayout />} />
        <Route path="/cryptoCatch" element={<Landing />} />

      </Routes>
    </Router>
  );
}

export default App;
