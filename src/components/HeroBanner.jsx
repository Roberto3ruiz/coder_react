// HeroBanner.jsx
import React from "react";
import '../estilos/HeroBanner.css';
const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1>¡Una carrera cerca de ti!</h1>
        <p>Explora los mejores eventos .</p>
        <button className="hero-btn">Ver productos</button>
      </div>
    </div>
  );
};

export default HeroBanner;