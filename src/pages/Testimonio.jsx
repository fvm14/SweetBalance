import React from 'react';
import './Testimonio.css';

const testimonios = [
  {
    nombre: 'María López',
    comentario: 'Sweet Balance me ayudó a reducir el consumo de azúcar sin sacrificar sabor. ¡Increíble!',
    imagen: '/img/testimonio1.jpg',
    estrellas: 5
  },
  {
    nombre: 'Carlos Ramírez',
    comentario: 'Excelente iniciativa. Las recetas son deliciosas y fáciles de seguir. ¡Recomendada!',
    imagen: '/img/testimonio2.jpg',
    estrellas: 4
  },
  {
    nombre: 'Lucía Torres',
    comentario: 'La bebida natural de Sweet Balance es refrescante y perfecta para mi dieta.',
    imagen: '/img/testimonio3.jpg',
    estrellas: 5
  }
];

const Testimonios = () => {
  return (
    <div className="testimonios-container">
      <h1 className="titulo">Testimonios</h1>
      <div className="testimonios-grid">
        {testimonios.map((t, index) => (
          <div className="testimonio-card" key={index}>
            <img src={t.imagen} alt={t.nombre} className="avatar" />
            <h3>{t.nombre}</h3>
            <p className="comentario">"{t.comentario}"</p>
            <div className="estrellas">
              {'★'.repeat(t.estrellas)}
              {'☆'.repeat(5 - t.estrellas)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonios;
