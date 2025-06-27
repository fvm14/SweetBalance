import React from 'react';
import './Recetas.css';

const recetas = [
  {
    nombre: 'Pan de Yacón',
    descripcion: 'Una opción deliciosa sin azúcar añadida.',
    imagen: '/img/pan-yacon.jpg',
    boton: 'Ver receta'
  },
  {
    nombre: 'Jugo Antioxidante',
    descripcion: 'Mezcla natural de camu camu y maca.',
    imagen: '/img/jugo-camu-maca.jpg',
    boton: 'Ver preparación'
  },
  {
    nombre: 'Ensalada Balanceada',
    descripcion: 'Ideal para almuerzos bajos en carbohidratos.',
    imagen: '/img/ensalada-balanceada.jpg',
    boton: 'Ver detalles'
  }
];

const Recetas = () => {
  return (
    <div className="recetas-container">
      <h2 className="recetas-titulo">Recetas Saludables</h2>
      <div className="recetas-grid">
        {recetas.map((receta, index) => (
          <div className="receta-card" key={index}>
            <img src={receta.imagen} alt={receta.nombre} className="receta-img" />
            <h3>{receta.nombre}</h3>
            <p>{receta.descripcion}</p>
            <button className="receta-btn">{receta.boton}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recetas;
