import type { ILanguage } from "../data/LanguageData";
import { useStorageLanguage } from "./useStorageLanguage";

interface IPropes {
  language: ILanguage;
  activeLanguageCode: string;
  setActiveLanguageCode: any;
}

export default function LanguageSelectorItem({
  language,
  activeLanguageCode,
  setActiveLanguageCode,
}: IPropes) {
  const isActive = activeLanguageCode.includes(language.code);
  const [, setStorageLanguage] = useStorageLanguage();

  function changeLanguage() {
    if (isActive) {
      return;
    }

    setStorageLanguage(language.code);
    setActiveLanguageCode(language.code);
  }

  return (
    <>
      <button
        className={`cursor-pointer hover:text-sky-400 ${
          isActive && "text-sky-400 font-bold"
        }`}
        onClick={changeLanguage}
      >
        {language.label}
      </button>
      {language.addPipe && " | "}
    </>
  );
}
