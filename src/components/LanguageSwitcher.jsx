import React from 'react';
import './LanguageSwitcher.css';
import { useLanguage } from '../hooks/useLanguage';

function LanguageSwitcher() {
  const { language, changeLanguage, languages } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const languageNames = {
    fr: '🇫🇷 Français',
    en: '🇬🇧 English',
    de: '🇩🇪 Deutsch',
    ar: '🇹🇳 العربية'
  };

  return (
    <div className="language-switcher">
      <button 
        className="language-btn"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        title="Sélectionner la langue"
      >
        🌐 {languageNames[language]?.split(' ')[0] || 'FR'}
      </button>
      {dropdownOpen && (
        <div className="language-dropdown">
          {languages.map(lang => (
            <button
              key={lang}
              className={`language-option ${language === lang ? 'active' : ''}`}
              onClick={() => {
                changeLanguage(lang);
                setDropdownOpen(false);
              }}
            >
              {languageNames[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
