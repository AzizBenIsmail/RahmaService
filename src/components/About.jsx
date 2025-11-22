import React from 'react';
import './About.css';

function About() {
  const qualifications = [
    '✓ Infirmière Diplômée d\'État',
    '✓ Coach Sportif Certifiée',
    '✓ Spécialiste Fitness & Musculation',
    '✓ Certification HIIT',
    '✓ Expertise en Nutrition Sportive',
    '✓ Techniques Comportementales'
  ];

  const expertise = [
    { icon: '👥', title: 'Cours Collectifs', desc: 'Séances dynamiques et motivantes' },
    { icon: '🏋️', title: 'Coaching Plateau', desc: 'Reprise d\'entraînement progressive' },
    { icon: '💼', title: 'Coaching Privé', desc: 'Programme personnalisé complet' },
    { icon: '⏱️', title: '12+ Ans', desc: 'D\'expérience sportive et professionnelle' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2>À Propos</h2>
        <p className="intro">Découvrez mon parcours et mes certifications</p>

        <div className="about-grid">
          <div className="about-card">
            <h3>Qui Suis-je ?</h3>
            <p>
              Je m'appelle Jeridi Rahma. Forte de plus de 12 ans de pratique sportive et de nombreuses certifications, 
              je suis passionnée par l'accompagnement sportif personnalisé. Mon approche combine professionnalisme, 
              écoute et efficacité pour vous aider à atteindre vos objectifs.
            </p>
            <p>
              Mon parcours d'infirmière me permet de comprendre les enjeux de santé et de bien-être, tandis que 
              mes certifications en fitness, musculation, HIIT et nutrition sportive garantissent un suivi complet 
              et cohérent selon votre objectif.
            </p>
          </div>

          <div className="qualifications-card">
            <h3>Certifications</h3>
            <ul>
              {qualifications.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="expertise-grid">
          {expertise.map((item, i) => (
            <div key={i} className="expertise-item">
              <div className="icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
