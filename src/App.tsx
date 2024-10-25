import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './comp/Landing/Landing';
import MainLayout from './comp/Main/Main';
import LoginComp from './comp/LoginComp/LoginComp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/paymants" element={<MainLayout />} />
        <Route path="/cryptoCatch" element={<Landing />} />
        <Route path="/cryptoCatch/login" element={<LoginComp/>} />

      </Routes>
    </Router>
  );
}

export default App;
