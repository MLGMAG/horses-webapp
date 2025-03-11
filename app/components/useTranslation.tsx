import { useEffect, useState } from "react";
import { useStorageLanguage } from "./useStorageLanguage";
import { TRANSLATIONS } from "../data/Translations";

function useTranslation(code: string) {
  const [value, setValue] = useState("");
  const [storageLanguage] = useStorageLanguage();

  useEffect(() => {
    const translationCode = `${code}_${storageLanguage.toUpperCase()}`;

    const translation = TRANSLATIONS.get(translationCode);
    if (translation === undefined) {
      throw new Error(`Translation with code ${translationCode} is not found!`);
    }

    setValue(translation);
  }, [storageLanguage]);

  return value;
}

export { useTranslation };
