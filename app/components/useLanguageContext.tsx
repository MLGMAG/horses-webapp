import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

function useLanguageContext() {
  const languageContext = useContext(LanguageContext);

  if (languageContext === undefined) {
    throw new Error("Language context is undefined");
  }

  if (languageContext.setStorageLanguage === undefined) {
    throw new Error("setStorageLanguage property is undefined");
  }

  if (languageContext.storageLanguage === undefined) {
    throw new Error("storageLanguage property is undefined");
  }

  return languageContext;
}

export { useLanguageContext };
