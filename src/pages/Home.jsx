import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="product-card">
        <div className="image-container">
          <img src="/img/sweetbalance.png" alt="Sweet Balance" className="product-image" />
        </div>
        <div className="info-container">
          <h1 className="title">Sweet Balance</h1>
          <p className="subtitle">La bebida saludable ideal para personas con Diabetes Tipo 2</p>
          <div className="ingredients">
            <span>🍒 <b>Camu Camu</b></span>
            <span>🌱 <b>Maca</b></span>
            <span>🍠 <b>Yacón</b></span>
          </div>
          <div className="features">
            <div className="feature-box">✓ Sin azúcar</div>
            <div className="feature-box">✓ Índice glucémico bajo</div>
            <div className="feature-box">✓ Cápsulas y polvo</div>
            <div className="feature-box">✓ Biodegradable</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
