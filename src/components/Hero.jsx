import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h2>Transformez Votre Corps, Transformez Votre Vie</h2>
        <p>Accompagnement sportif professionnel et personnalisé avec Jeridi Rahma</p>
        <p className="subtitle">Infirmière Diplômée • Coach Sportif Certifiée • 12+ Ans d'Expérience</p>
        <div className="cta-buttons">
          <button className="btn btn-primary" onClick={() => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
          }}>Commencer Maintenant</button>
          <button className="btn btn-secondary" onClick={() => {
            document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
          }}>Découvrir les Services</button>
        </div>
      </div>
      <div className="hero-image">
        <div className="image-placeholder">
          <span>🏋️</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
