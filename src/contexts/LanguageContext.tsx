import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import type { Language, Translations } from '../types';
import { es } from '../locales/es';
import { en } from '../locales/en';

type LanguageContextType = {
  language: Language;
  t: (key: string, vars?: Record<string, string | number>) => string;
  tArray: (key: string) => string[];
  tObject: <T extends object>(key: string) => T;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Translations> = { es, en };

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('okami-lang') as Language | null;
    if (saved) return saved;
    const browserLang = navigator.language.substring(0, 2) as Language;
    return (browserLang === 'es' || browserLang === 'en') ? browserLang : 'es';
  });

  useEffect(() => {
    localStorage.setItem('okami-lang', language);
  }, [language]);

  const getValue = useCallback((key: string): any => {
    const keys = key.split('.');
    let current: any = translations[language];
    for (const k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = current[k];
      } else {
        return key;
      }
    }
    return current;
  }, [language]);

  const t = useCallback((key: string, vars?: Record<string, string | number>): string => {
    const value = getValue(key);
    if (typeof value === 'string' && vars) {
      return Object.keys(vars).reduce((str, k) => str.replace(`{${k}}`, String(vars[k])), value);
    }
    return typeof value === 'string' ? value : String(value ?? key);
  }, [getValue]);

  const tArray = useCallback((key: string): string[] => {
    const value = getValue(key);
    if (Array.isArray(value)) {
      return value.filter((v): v is string => typeof v === 'string');
    }
    return [];
  }, [getValue]);

  const tObject = useCallback(<T extends object>(key: string): T => {
    const value = getValue(key);
    return (value && typeof value === 'object' && !Array.isArray(value)) ? (value as T) : ({} as T);
  }, [getValue]);

  const value = useMemo(() => ({ language, t, tArray, tObject, setLanguage }), [language, t, tArray, tObject]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};