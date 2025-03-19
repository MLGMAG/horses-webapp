import LanguageSelectorItem from "./LanguageSelectorItem";
import { languages } from "../data/LanguageData";

function LanguageSelector() {
  return (
    <div>
      {languages.map((language) => (
        <LanguageSelectorItem language={language} key={language.code} />
      ))}
    </div>
  );
}

export { LanguageSelector };
