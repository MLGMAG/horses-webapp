import { languages } from "../data/LanguageData";
import { TheNavbarLanguageSelectorItemMobile } from "./TheNavbarLanguageSelectorItemMobile";

function TheNavbarLanguageSelectorMobile() {
  return (
    <div className="mt-4 py-3 px-4 flex flex-row gap-3 justify-around">
      {languages.map((language) => (
        <TheNavbarLanguageSelectorItemMobile
          language={language}
          key={language.code}
        />
      ))}
    </div>
  );
}

export { TheNavbarLanguageSelectorMobile };
