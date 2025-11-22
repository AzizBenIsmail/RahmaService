import React from 'react';
import { LanguageContext } from '../components/LanguageContext';

export const useLanguage = () => {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage doit être utilisé avec LanguageProvider');
  }
  return context;
};
