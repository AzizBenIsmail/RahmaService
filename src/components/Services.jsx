import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      icon: '👥',
      title: 'Cours Collectifs',
      description: 'Sessions dynamiques et motivantes pour tous les niveaux',
      features: ['Groupe limité', 'Ambiance conviviale', 'Tous niveaux', 'Divers disciplines']
    },
    {
      icon: '🏋️',
      title: 'Coaching Plateau',
      description: 'Programme progressif pour reprendre ou améliorer votre entraînement',
      features: ['Reprise progressive', 'Suivi individualisé', 'Adaptation continue', 'Prévention des blessures']
    },
    {
      icon: '💼',
      title: 'Coaching Privé',
      description: 'Accompagnement professionnel totalement personnalisé',
      features: ['Programme sur mesure', 'Suivi nutritionnel', 'Flexibilité horaire', 'Disponibilité totale']
    }
  ];

  const privateCoachingProcess = [
    { step: 1, title: 'Bilan Initial', desc: 'État actuel, objectifs, niveau, disponibilité' },
    { step: 2, title: 'Analyse Complète', desc: 'Évaluation des besoins spécifiques et habitudes' },
    { step: 3, title: 'Programme Personnalisé', desc: 'Entraînement adapté + programme nutritionnel' },
    { step: 4, title: 'Suivi Continu', desc: 'Accompagnement régulier et disponibilité totale' }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Mes Services</h2>
        <p className="intro">Trois approches pour atteindre vos objectifs</p>

        <div className="services-grid">
          {services.map((service, i) => (
            <div key={i} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <ul className="features-list">
                {service.features.map((feature, j) => (
                  <li key={j}>✓ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="coaching-process">
          <h3>Mon Approche du Coaching Privé</h3>
          <div className="process-grid">
            {privateCoachingProcess.map((item, i) => (
              <div key={i} className="process-step">
                <div className="step-number">{item.step}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="special-mention">
          <h3>💡 Points Clés</h3>
          <ul>
            <li><strong>Fiche Technique Complète :</strong> État actuel, objectifs, niveau, disponibilité, habitudes et besoins spécifiques</li>
            <li><strong>Programme d'Entraînement Sur Mesure :</strong> Adapté à vos objectifs : perte de poids, prise de masse, tonification ou transformation physique</li>
            <li><strong>Programme Nutritionnel :</strong> Créé spécifiquement selon votre profil et vos objectifs</li>
            <li><strong>Accompagnement Flexible :</strong> En ligne ou en présentiel (si vous êtes dans les alentours)</li>
            <li><strong>Disponibilité Totale :</strong> Suivi continu et réponse à toutes vos questions à tout moment</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
