import type { ILanguage } from "../data/LanguageData";
import { useStorageLanguage } from "./useStorageLanguage";

interface IPropes {
  language: ILanguage;
}

export default function LanguageSelectorItem({ language }: IPropes) {
  const [storageLanguage, setStorageLanguage] = useStorageLanguage();
  const isActive = storageLanguage === language.code;

  function changeLanguage(selectedLanguageCode: string) {
    if (selectedLanguageCode === storageLanguage) {
      return;
    }
    setStorageLanguage(selectedLanguageCode);
  }

  return (
    <>
      <button
        className={`cursor-pointer hover:text-sky-400 ${
          isActive && "text-sky-400 font-bold"
        }`}
        onClick={() => changeLanguage(language.code)}
      >
        {language.label}
      </button>
      {!language.isLast && " | "}
    </>
  );
}
