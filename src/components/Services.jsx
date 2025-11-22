import React from 'react';
import './Services.css';
import { useLanguage } from '../hooks/useLanguage';

function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: '👥',
      title: t('services.group_title'),
      description: t('services.group_desc'),
      features: [t('services.group_f1'), t('services.group_f2'), t('services.group_f3'), t('services.group_f4')]
    },
    {
      icon: '🏋️',
      title: t('services.plateau_title'),
      description: t('services.plateau_desc'),
      features: [t('services.plateau_f1'), t('services.plateau_f2'), t('services.plateau_f3'), t('services.plateau_f4')]
    },
    {
      icon: '💼',
      title: t('services.private_title'),
      description: t('services.private_desc'),
      features: [t('services.private_f1'), t('services.private_f2'), t('services.private_f3'), t('services.private_f4')]
    }
  ];

  const privateCoachingProcess = [
    { step: 1, title: t('services.step1_title'), desc: t('services.step1_desc') },
    { step: 2, title: t('services.step2_title'), desc: t('services.step2_desc') },
    { step: 3, title: t('services.step3_title'), desc: t('services.step3_desc') },
    { step: 4, title: t('services.step4_title'), desc: t('services.step4_desc') }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>{t('services.heading')}</h2>
        <p className="intro">{t('services.intro')}</p>

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
          <h3>{t('services.approach_title')}</h3>
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
          <h3>{t('services.keypoints_title')}</h3>
          <ul>
            <li><strong>{t('services.keypoint1_title')} :</strong> {t('services.keypoint1_desc')}</li>
            <li><strong>{t('services.keypoint2_title')} :</strong> {t('services.keypoint2_desc')}</li>
            <li><strong>{t('services.keypoint3_title')} :</strong> {t('services.keypoint3_desc')}</li>
            <li><strong>{t('services.keypoint4_title')} :</strong> {t('services.keypoint4_desc')}</li>
            <li><strong>{t('services.keypoint5_title')} :</strong> {t('services.keypoint5_desc')}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
