import { useEffect, useState } from "react";
import {
  useGetStorageLanguage,
  useSetStorageLanguage,
} from "./useStorageLanguage";
import LanguageSelectorItem from "./LanguageSelectorItem";
import {
  defaultLanguageCode,
  languages,
  supportedLanguageCodes,
} from "../data/LanguageData";

function LanguageSelector() {
  const [activeLanguageCode, setActiveLanguageCode] = useState("");

  useEffect(() => {
    const selectedLanguage = useGetStorageLanguage(defaultLanguageCode);
    if (!supportedLanguageCodes.has(selectedLanguage)) {
      useSetStorageLanguage(defaultLanguageCode);
      setActiveLanguageCode(defaultLanguageCode);
    } else {
      setActiveLanguageCode(selectedLanguage);
    }
  });

  return (
    <div>
      {languages.map((language) => (
        <LanguageSelectorItem
          language={language}
          activeLanguageCode={activeLanguageCode}
          setActiveLanguageCode={setActiveLanguageCode}
          key={language.code}
        />
      ))}
    </div>
  );
}

export { LanguageSelector };
