import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);
export const LanguageProvider = ({ children }) => {
  // use localStorage to persist the language
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );
  const toggleLanguage = () => {
    language === "en" ? setLanguage("fr") : setLanguage("en");
    localStorage.setItem("language", language === "en" ? "fr" : "en");
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
