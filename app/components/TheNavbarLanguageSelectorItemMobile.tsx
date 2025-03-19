import type { ILanguage } from "../data/LanguageData";
import { useStorageLanguage } from "./useStorageLanguage";

interface IPropes {
  language: ILanguage;
}

function TheNavbarLanguageSelectorItemMobile({ language }: IPropes) {
  const [storageLanguage, setStorageLanguage] = useStorageLanguage();
  const isActive = storageLanguage === language.code;

  function changeLanguage(selectedLanguageCode: string) {
    if (selectedLanguageCode === storageLanguage) {
      return;
    }
    setStorageLanguage(selectedLanguageCode);
  }

  return (
    <button
      className={`w-43 md:w-80 text-center rounded-full ${
        isActive && "bg-slate-200"
      }`}
      onClick={() => changeLanguage(language.code)}
    >
      {language.label}
    </button>
  );
}

export { TheNavbarLanguageSelectorItemMobile };
