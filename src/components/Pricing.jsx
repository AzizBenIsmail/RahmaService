import React from 'react';
import './Pricing.css';
import { useLanguage } from '../hooks/useLanguage';

function Pricing() {
  const { t } = useLanguage();

  const packages = [
    {
      name: t('pricing.pkg1_name'),
      price: '150',
      currency: 'DT',
      description: t('pricing.pkg1_desc'),
      features: [
        t('pricing.pkg1_f1'),
        t('pricing.pkg1_f2'),
        t('pricing.pkg1_f3'),
        t('pricing.pkg1_f4'),
        t('pricing.pkg1_f5')
      ],
      popular: false
    },
    {
      name: t('pricing.pkg2_name'),
      price: '200',
      currency: 'DT',
      description: t('pricing.pkg2_desc'),
      features: [
        t('pricing.pkg2_f1'),
        t('pricing.pkg2_f2'),
        t('pricing.pkg2_f3'),
        t('pricing.pkg2_f4'),
        t('pricing.pkg2_f5'),
        t('pricing.pkg2_f6'),
        t('pricing.pkg2_f7')
      ],
      popular: true
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2>{t('pricing.heading')}</h2>
        <p className="intro">{t('pricing.intro')}</p>

        <div className="pricing-grid">
          {packages.map((pkg, i) => (
            <div key={i} className={`pricing-card ${pkg.popular ? 'popular' : ''}`}>
              {pkg.popular && <div className="popular-badge">★ {t('pricing.popular')}</div>}
              
              <h3>{pkg.name}</h3>
              <p className="description">{pkg.description}</p>
              
              <div className="price">
                <span className="amount">{pkg.price}</span>
                <span className="currency">{pkg.currency}</span>
              </div>

              <button className={`btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`}>
                {t('pricing.cta')}
              </button>

              <div className="divider"></div>

              <h4>{t('pricing.included')}</h4>
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
          <h3>{t('pricing.howitworks_title')}</h3>
          <div className="info-grid">
            <div className="info-item">
              <div className="info-icon">📋</div>
              <h4>{t('pricing.step1_title')}</h4>
              <p>{t('pricing.step1_desc')}</p>
            </div>
            <div className="info-item">
              <div className="info-icon">📊</div>
              <h4>{t('pricing.step2_title')}</h4>
              <p>{t('pricing.step2_desc')}</p>
            </div>
            <div className="info-item">
              <div className="info-icon">📱</div>
              <h4>{t('pricing.step3_title')}</h4>
              <p>{t('pricing.step3_desc')}</p>
            </div>
            <div className="info-item">
              <div className="info-icon">🎯</div>
              <h4>{t('pricing.step4_title')}</h4>
              <p>{t('pricing.step4_desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
