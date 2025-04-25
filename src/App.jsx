import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';

function App() {
  return (
    <Router>
      <CssBaseline /> {}
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
