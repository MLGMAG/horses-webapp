interface ILanguage {
  label: string;
  code: string;
  addPipe: boolean;
}

const languages: ILanguage[] = [
  { label: "УКР", code: "uk", addPipe: true },
  { label: "ENG", code: "en", addPipe: false },
];

const supportedLanguageCodes = new Set(["uk", "en"]);

const defaultLanguageCode = "en";

export { languages, supportedLanguageCodes, defaultLanguageCode };
export type { ILanguage };
