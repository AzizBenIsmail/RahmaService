import React from 'react';
import './Hero.css';
import { useLanguage } from '../hooks/useLanguage';

function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h2>{t('hero.title')}</h2>
        <p>{t('hero.subtitle')}</p>
        <p className="subtitle">{t('hero.credentials')}</p>
        <div className="cta-buttons">
          <button className="btn btn-primary" onClick={() => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
          }}>{t('hero.cta1')}</button>
          <button className="btn btn-secondary" onClick={() => {
            document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
          }}>{t('hero.cta2')}</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="/Rahma.jpg" alt="Jeridi Rahma - Coach Sportif" className="hero-img" />
      </div>
    </section>
  );
}

export default Hero;
