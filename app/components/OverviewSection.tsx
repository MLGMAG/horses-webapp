import { useState, useEffect } from "react";
import { defaultLanguageCode } from "../data/LanguageData";
import { useGetStorageLanguage } from "./useStorageLanguage";

const overview = {
  en: "Overview",
  uk: "Огляд"
};

function OverviewSection({ title, description, image }: any) {
  const [titleTranslation, setTitleTranslation] = useState("");
  const [descriptionTranslation, setDescriptionTranslation] = useState("");
  const [overviewTranslation, setOverviewTranslation] = useState("");

  useEffect(() => {
    const currentLanguageCode = useGetStorageLanguage(defaultLanguageCode);
    setTitleTranslation(title[currentLanguageCode]);
    setDescriptionTranslation(description[currentLanguageCode]);
    setOverviewTranslation(overview[currentLanguageCode]);
  });

  return (
    <div className="mx-auto px-6 lg:px-8 mt-10 md:mt-14">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div>
          <h3 className="block font-display text-base font-semibold text-neutral-950 italic lg:w-max lg:mx-auto">
            {titleTranslation}
          </h3>
          <h1 className="mt-4 lg:mt-2 lg:mb-12 block max-w-5xl font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-6xl lg:w-max lg:mx-auto">
            {overviewTranslation}
          </h1>
        </div>
        <p className="my-6 max-w-3xl text-lg text-neutral-600 lg:w-max lg:mx-auto lg:mb-12 lg:text-justify">
          {descriptionTranslation}
        </p>
        <div>{image}</div>
      </div>
    </div>
  );
}

export { OverviewSection };
