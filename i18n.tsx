import React, { createContext, useContext, useMemo, useState } from 'react';
import { Locale } from './types';
import { COPY } from './translations';

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof COPY)[Locale];
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const DEFAULT_LOCALE: Locale = 'fr';

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: COPY[locale],
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return ctx;
};
