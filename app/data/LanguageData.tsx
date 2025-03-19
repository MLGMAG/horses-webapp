interface ILanguage {
  label: string;
  code: string;
  isLast: boolean;
}

const languages: ILanguage[] = [
  { label: "УКР", code: "uk", isLast: false },
  { label: "ENG", code: "en", isLast: true },
];

const supportedLanguageCodes = new Set(["uk", "en"]);

const defaultLanguageCode = "en";

export { languages, supportedLanguageCodes, defaultLanguageCode };
export type { ILanguage };
