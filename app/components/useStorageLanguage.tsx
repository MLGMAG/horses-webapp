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

function useSetStorageLanguage(languageCode: string) {
  window.localStorage.setItem(localStorageLanguageKey, languageCode);
}

function useGetStorageLanguage(defaultLanguageCode: string) {
  return getStorageLanguage() || getBrowserLanguage() || defaultLanguageCode;
}

export { useSetStorageLanguage, useGetStorageLanguage };
