import { useEffect } from "react";
import { defaultLanguageCode } from "../data/LanguageData";
import { useLanguageContext } from "./useLanguageContext";

const localStorageLanguageKey = "selectedLanguage";

function getStorageLanguage() {
  return window.localStorage.getItem(localStorageLanguageKey);
}

function getBrowserLanguage() {
  const browserLanguage = window.navigator.language;
  if (browserLanguage) {
    return browserLanguage.substring(0, 2);
  }
  return browserLanguage;
}

function useStorageLanguage(): [string, Function] {
  const { storageLanguage, setStorageLanguage } = { ...useLanguageContext() };

  const setStorageLanguageEnhanced = function (languageCode: string) {
    window.localStorage.setItem(localStorageLanguageKey, languageCode);
    setStorageLanguage!(languageCode);
  };

  useEffect(() => {
    setStorageLanguage!(
      getStorageLanguage() || getBrowserLanguage() || defaultLanguageCode
    );
  });

  return [storageLanguage!, setStorageLanguageEnhanced];
}

export { useStorageLanguage };
