import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import LinkedinRedirect from './pages/ExternalRedirect';
import Career from './pages/Career'
import Clokko from './pages/Clokko';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />} />
        <Route path="/clokko" element={<Clokko />} />
        <Route path="/linkedin" element={<LinkedinRedirect />} />
      </Routes>
    </Router>
  );
}

export default App;
