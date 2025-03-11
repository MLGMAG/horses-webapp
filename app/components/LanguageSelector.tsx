import { useEffect, useState } from "react";
import { useStorageLanguage } from "./useStorageLanguage";
import LanguageSelectorItem from "./LanguageSelectorItem";
import { languages } from "../data/LanguageData";

function LanguageSelector() {
  const [activeLanguageCode, setActiveLanguageCode] = useState("");
  const [storageLanguage, setStorageLanguage] = useStorageLanguage();

  useEffect(() => {
    setActiveLanguageCode(storageLanguage);
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
