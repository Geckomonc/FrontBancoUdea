import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Clientes from './pages/Clientes';
import Transferencias from './pages/Transferencias';
import Historial from './pages/Historial';
import VerClientes from './pages/VerClientes';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/transferencias" element={<Transferencias />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/verclientes" element={<VerClientes />} />
      </Routes>
    </Router>
  );
}

export default App;
