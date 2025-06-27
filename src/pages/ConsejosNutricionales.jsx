import React from 'react';
import './Consejos.css';

const consejos = [
  "Evita alimentos ultraprocesados y azúcares añadidos.",
  "Incluye alimentos ricos en fibra como verduras, legumbres y cereales integrales.",
  "Prefiere porciones pequeñas y distribuidas durante el día.",
  "Consume proteínas magras como pescado, pollo y huevo.",
  "Mantente hidratado con agua o infusiones sin azúcar.",
  "Monitorea tus niveles de glucosa antes y después de las comidas.",
  "Haz actividad física ligera al menos 30 minutos diarios.",
  "Consulta a un nutricionista antes de hacer cambios en tu dieta.",
];

const ConsejosNutricionales = () => {
  return (
    <div className="consejos-container">
      <div className="consejos-imagen">
        <img
          src="/img/nutricionista.jpg"
          alt="Nutricionista"
        />
      </div>
      <div className="consejos-lista">
        <h1 className="consejos-titulo">Consejos Nutricionales</h1>
        <ul>
          {consejos.map((item, index) => (
            <li key={index}>✅ {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ConsejosNutricionales;
