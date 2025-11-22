import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create WhatsApp message
    const whatsappMessage = `Bonjour Rahma, Je m'appelle ${formData.name}. ${formData.message}. Mon email: ${formData.email}${formData.phone ? ', Tél: ' + formData.phone : ''}`;
    const whatsappUrl = `https://wa.me/21650000000?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contactez-Moi</h2>
        <p className="intro">Je suis là pour répondre à toutes vos questions</p>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Prenons Contact</h3>
            <p>
              Prêt à commencer votre transformation ? N'hésitez pas à me contacter pour discuter 
              de vos objectifs et trouver le programme qui vous convient le mieux.
            </p>

            <div className="contact-methods">
              <div className="method">
                <div className="method-icon">💬</div>
                <h4>WhatsApp</h4>
                <p>Disponible pour discuter de vos objectifs</p>
                <a href="https://wa.me/21650000000" target="_blank" rel="noopener noreferrer" className="contact-link">
                  +216 50 000 000
                </a>
              </div>

              <div className="method">
                <div className="method-icon">📧</div>
                <h4>Email</h4>
                <p>Envoyez-moi vos questions</p>
                <a href="mailto:contact@rahmaservice.tn" className="contact-link">
                  contact@rahmaservice.tn
                </a>
              </div>

              <div className="method">
                <div className="method-icon">📱</div>
                <h4>Appel Direct</h4>
                <p>Parlons directement de votre projet</p>
                <a href="tel:+21650000000" className="contact-link">
                  +216 50 000 000
                </a>
              </div>
            </div>

            <div className="availability">
              <h4>⏰ Disponibilité</h4>
              <p>Lun - Dim : 8h00 - 20h00</p>
              <p>Réponse sous 24h maximum</p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Votre Nom *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+216 XX XXX XXX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Sujet *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Choisir un sujet --</option>
                  <option value="Coaching Privé">Coaching Privé</option>
                  <option value="Cours Collectifs">Cours Collectifs</option>
                  <option value="Coaching Plateau">Coaching Plateau</option>
                  <option value="Question Générale">Question Générale</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Parlez-moi de vos objectifs..."
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Envoyer via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
