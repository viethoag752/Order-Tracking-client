import { createContext, useState } from 'react';
export const AppContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('VI');

  return <AppContext.Provider value={{ language, setLanguage }}>{children}</AppContext.Provider>;
};
export default LanguageProvider;
