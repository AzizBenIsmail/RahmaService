import React from 'react';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>💪 Rahma Service</h4>
            <p>Votre coach sportif personnel pour une transformation physique et mental.</p>
          </div>

          <div className="footer-section">
            <h4>Liens Rapides</h4>
            <ul>
              <li><a href="#home">Accueil</a></li>
              <li><a href="#about">À Propos</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#pricing">Tarifs</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Cours Collectifs</li>
              <li>Coaching Plateau</li>
              <li>Coaching Privé</li>
              <li>Suivi Nutritionnel</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Nous Contacter</h4>
            <p>📧 contact@rahmaservice.tn</p>
            <p>📱 +216 50 000 000</p>
            <p>⏰ Lun - Dim : 8h00 - 20h00</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} Rahma Service. Tous droits réservés.</p>
          <p>Infirmière Diplômée • Coach Sportif Certifiée • Disponible pour vous 24/7</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
