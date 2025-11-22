import React from 'react';
import './About.css';
import { useLanguage } from '../hooks/useLanguage';

function About() {
  const { t } = useLanguage();

  const qualifications = [
    t('about.qual1'),
    t('about.qual2'),
    t('about.qual3'),
    t('about.qual4'),
    t('about.qual5'),
    t('about.qual6')
  ];

  const expertise = [
    { icon: '👥', title: t('about.exp1_title'), desc: t('about.exp1_desc') },
    { icon: '🏋️', title: t('about.exp2_title'), desc: t('about.exp2_desc') },
    { icon: '💼', title: t('about.exp3_title'), desc: t('about.exp3_desc') },
    { icon: '⏱️', title: t('about.exp4_title'), desc: t('about.exp4_desc') }
  ];

  return (
    <>
      <section className="about-hero">
        <div className="about-hero-content">
          <img src="/Rahma.jpg" alt="Jeridi Rahma" className="about-hero-img" />
          <div className="about-hero-text">
            <h2>{t('about.name')}</h2>
            <p className="subtitle">{t('about.title')}</p>
            <p className="bio">{t('about.bio')}</p>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2>{t('about.heading')}</h2>
          <p className="intro">{t('about.intro')}</p>

          <div className="about-grid">
            <div className="about-card">
              <h3>{t('about.whoami_title')}</h3>
              <p>{t('about.whoami_text1')}</p>
              <p>{t('about.whoami_text2')}</p>
            </div>

            <div className="qualifications-card">
              <h3>{t('about.certifications_title')}</h3>
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
    </>
  );
}

export default About;
