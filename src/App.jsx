import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Recetas from './pages/Recetas';
import Tiendas from './pages/Tiendas';
import Testimonio from './pages/Testimonio';
import ConsejosNutricionales from './pages/ConsejosNutricionales';
import ProductoDetalle from './pages/ProductoDetalle'; // ✅ nueva vista

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recetas" element={<Recetas />} />
        <Route path="/tiendas" element={<Tiendas />} />
        <Route path="/testimonio" element={<Testimonio />} />
        <Route path="/consejos" element={<ConsejosNutricionales />} />
        <Route path="/producto" element={<ProductoDetalle />} /> {/* ✅ ruta nueva */}
      </Routes>
    </>
  );
}

export default App;
