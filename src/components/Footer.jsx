import React from 'react';
import './Footer.css';
import { useLanguage } from '../hooks/useLanguage';

function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>💪 Rahma Service</h4>
            <p>{t('footer.tagline')}</p>
          </div>

          <div className="footer-section">
            <h4>{t('footer.quicklinks')}</h4>
            <ul>
              <li><a href="#home">{t('header.home')}</a></li>
              <li><a href="#about">{t('header.about')}</a></li>
              <li><a href="#services">{t('header.services')}</a></li>
              <li><a href="#pricing">{t('header.pricing')}</a></li>
              <li><a href="#contact">{t('header.contact')}</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t('footer.services')}</h4>
            <ul>
              <li>{t('services.group_title')}</li>
              <li>{t('services.plateau_title')}</li>
              <li>{t('services.private_title')}</li>
              <li>{t('footer.nutrition')}</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t('footer.contact')}</h4>
            <p>📧 contact@rahmaservice.tn</p>
            <p>📱 +216 50 000 000</p>
            <p>⏰ {t('contact.hours')}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} Rahma Service. {t('footer.copyright')}</p>
          <p>{t('footer.credentials')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
