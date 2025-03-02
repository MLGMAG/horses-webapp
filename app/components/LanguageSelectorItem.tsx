import type { ILanguage } from "../data/LanguageData";
import { useSetStorageLanguage } from "./useStorageLanguage";

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
  language.code;
  const isActive = activeLanguageCode.includes(language.code);

  function changeLanguage() {
    if (isActive) {
      return;
    }

    useSetStorageLanguage(language.code);
    setActiveLanguageCode(language.code);

    window.location.reload();
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
