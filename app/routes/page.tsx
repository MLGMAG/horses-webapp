import { Outlet } from "react-router";
import { TheNavbar } from "../components/TheNavbar";
import { useState } from "react";
import { defaultLanguageCode } from "../data/LanguageData";
import LanguageContext from "../context/LanguageContext";

function createLanguageContext() {
  const [storageLanguage, setStorageLanguage] = useState(defaultLanguageCode);
  return {
    storageLanguage: storageLanguage,
    setStorageLanguage: setStorageLanguage,
  };
}

export default function Page() {
  return (
    <div className="font-[Montserrat] w-full h-full">
      <LanguageContext.Provider value={createLanguageContext()}>
        <header>
          <TheNavbar />
        </header>
        <main>
          <Outlet />
        </main>
      </LanguageContext.Provider>
    </div>
  );
}
