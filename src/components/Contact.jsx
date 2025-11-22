import React, { useState } from 'react';
import './Contact.css';
import { useLanguage } from '../hooks/useLanguage';

function Contact() {
  const { t } = useLanguage();
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
    const whatsappMessage = `Bonjour Rahma, Je m'appelle ${formData.name}. ${formData.message}. Mon email: ${formData.email}${formData.phone ? ', Tél: ' + formData.phone : ''}`;
    const whatsappUrl = `https://wa.me/21650000000?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>{t('contact.heading')}</h2>
        <p className="intro">{t('contact.intro')}</p>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>{t('contact.getintouch')}</h3>
            <p>{t('contact.description')}</p>

            <div className="contact-methods">
              <div className="method">
                <div className="method-icon">💬</div>
                <h4>{t('contact.whatsapp')}</h4>
                <p>{t('contact.whatsapp_desc')}</p>
                <a href="https://wa.me/21650000000" target="_blank" rel="noopener noreferrer" className="contact-link">
                  +216 50 000 000
                </a>
              </div>

              <div className="method">
                <div className="method-icon">📧</div>
                <h4>{t('contact.email')}</h4>
                <p>{t('contact.email_desc')}</p>
                <a href="mailto:contact@rahmaservice.tn" className="contact-link">
                  contact@rahmaservice.tn
                </a>
              </div>

              <div className="method">
                <div className="method-icon">📱</div>
                <h4>{t('contact.phone')}</h4>
                <p>{t('contact.phone_desc')}</p>
                <a href="tel:+21650000000" className="contact-link">
                  +216 50 000 000
                </a>
              </div>
            </div>

            <div className="availability">
              <h4>⏰ {t('contact.availability')}</h4>
              <p>{t('contact.hours')}</p>
              <p>{t('contact.response')}</p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t('contact.form_name')} *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.form_name_ph')}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('contact.form_email')} *</label>
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
                <label htmlFor="phone">{t('contact.form_phone')}</label>
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
                <label htmlFor="subject">{t('contact.form_subject')} *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">{t('contact.form_subject_choice')}</option>
                  <option value={t('contact.subject_1')}>{t('contact.subject_1')}</option>
                  <option value={t('contact.subject_2')}>{t('contact.subject_2')}</option>
                  <option value={t('contact.subject_3')}>{t('contact.subject_3')}</option>
                  <option value={t('contact.subject_4')}>{t('contact.subject_4')}</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('contact.form_message')} *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.form_message_ph')}
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                {t('contact.form_submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
