import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'bn' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (translations: { en: string; bn: string; ar: string }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  const t = (translations: { en: string; bn: string; ar: string }) => {
    return translations[language];
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Apply language-specific fonts
    const body = document.body;
    body.classList.remove('font-arabic', 'font-bangla');
    if (lang === 'ar') {
      body.classList.add('font-arabic');
    } else if (lang === 'bn') {
      body.classList.add('font-bangla');
    }
  };

  // Apply initial language settings
  React.useEffect(() => {
    handleSetLanguage(language);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
