import { createContext } from "react";

interface ILanguageContext {
    storageLanguage: string | undefined;
    setStorageLanguage: Function | undefined;
  }

const LanguageContext = createContext<ILanguageContext>({
  storageLanguage: undefined,
  setStorageLanguage: undefined,
});

export default LanguageContext;
