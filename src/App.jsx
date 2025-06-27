import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Recetas from './pages/Recetas';
import Tiendas from './pages/Tiendas';
import Monitoreo from './pages/Testimonio';
import ConsejosNutricionales from './pages/ConsejosNutricionales';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recetas" element={<Recetas />} />
        <Route path="/tiendas" element={<Tiendas />} />
        <Route path="/testimonio" element={<Monitoreo />} />
        <Route path="/consejos" element={<ConsejosNutricionales />} />
      </Routes>
    </>
  );
}

export default App;
