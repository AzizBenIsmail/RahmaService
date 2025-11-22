import React from 'react';
import './Pricing.css';

function Pricing() {
  const packages = [
    {
      name: 'Programme Entraînement + Suivi',
      price: '150',
      currency: 'DT',
      description: 'Programme d\'entraînement personnalisé avec suivi continu',
      features: [
        'Programme d\'entraînement sur mesure',
        'Adaptation progressive',
        'Suivi continu illimité',
        'Réponses à vos questions 24/7',
        'Online ou présentiel'
      ],
      popular: false
    },
    {
      name: 'Accompagnement Complet',
      price: '200',
      currency: 'DT',
      description: 'Programme d\'entraînement + nutrition + suivi complet',
      features: [
        'Programme d\'entraînement sur mesure',
        'Programme nutritionnel personnalisé',
        'Suivi continu illimité',
        'Réponses à vos questions 24/7',
        'Bilan technique complet',
        'Online ou présentiel',
        'Accompagnement étape par étape'
      ],
      popular: true
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2>Tarifs & Packages</h2>
        <p className="intro">Choisissez le package qui vous convient le mieux</p>

        <div className="pricing-grid">
          {packages.map((pkg, i) => (
            <div key={i} className={`pricing-card ${pkg.popular ? 'popular' : ''}`}>
              {pkg.popular && <div className="popular-badge">★ Populaire</div>}
              
              <h3>{pkg.name}</h3>
              <p className="description">{pkg.description}</p>
              
              <div className="price">
                <span className="amount">{pkg.price}</span>
                <span className="currency">{pkg.currency}</span>
              </div>

              <button className={`btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`}>
                Commencer
              </button>

              <div className="divider"></div>

              <h4>Inclus :</h4>
              <ul className="features">
                {pkg.features.map((feature, j) => (
                  <li key={j}>
                    <span className="checkmark">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pricing-info">
          <h3>Comment Ça Marche ?</h3>
          <div className="info-grid">
            <div className="info-item">
              <div className="info-icon">📋</div>
              <h4>1. Consultation Initiale</h4>
              <p>Nous discutons de vos objectifs, vos disponibilités et vos besoins spécifiques</p>
            </div>
            <div className="info-item">
              <div className="info-icon">📊</div>
              <h4>2. Création du Programme</h4>
              <p>Programme d'entraînement et nutritionnel totalement personnalisés</p>
            </div>
            <div className="info-item">
              <div className="info-icon">📱</div>
              <h4>3. Suivi Régulier</h4>
              <p>Accompagnement continu, ajustements et disponibilité 24/7</p>
            </div>
            <div className="info-item">
              <div className="info-icon">🎯</div>
              <h4>4. Atteindre Vos Objectifs</h4>
              <p>Résultats concrets et transformation physique selon vos buts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
