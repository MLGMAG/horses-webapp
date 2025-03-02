import { Link } from "react-router";
import { useGetStorageLanguage } from "./useStorageLanguage";

import { defaultLanguageCode } from "../data/LanguageData";
import { useEffect, useState } from "react";

function MainPageSection({
  id,
  title,
  descriptionDesktop,
  descriptionMobile,
  link,
  image,
  backgroundClass,
}: any) {
  const [descriptionMobileTranslation, setDescriptionMobileTranslation] =
    useState("");
  const [descriptionDesktopTranslation, setDescriptionDesktopTranslation] =
    useState("");
  const [titleTranslation, setTitleTranslation] = useState("");
  const [linkLabelTranslation, setLinkLabelTranslation] = useState("");

  useEffect(() => {
    const currentLanguageCode = useGetStorageLanguage(defaultLanguageCode);
    setDescriptionMobileTranslation(descriptionMobile[currentLanguageCode]);
    setDescriptionDesktopTranslation(descriptionDesktop[currentLanguageCode]);
    setTitleTranslation(title[currentLanguageCode]);
    setLinkLabelTranslation(link.label[currentLanguageCode]);
  });

  return (
    <div id={id}>
      <div className="lg:hidden">
        <div className={`px-6 py-8 ${backgroundClass}`}>
          <h2 className="mb-6 text-4xl font-medium">{titleTranslation}</h2>
          <p className="mb-6 text-[19.5px] font-medium text-neutral-600">
            {descriptionMobileTranslation}
          </p>
          <div className="mb-6">
            <Link
              to={link.path}
              className="text-sky-500 font-semibold 2xl:text-lg"
            >
              {linkLabelTranslation}
            </Link>
          </div>
          <div className="w-auto">
            <img
              className="mx-auto rounded-4xl h-57"
              src={image.src}
              alt={image.alt}
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className={`pl-30 pr-43 py-36 ${backgroundClass}`}>
          <div className="flex flex-row items-center justify-between">
            <div>
              <h2 className="text-5xl lg:text-4xl xl:text-6xl font-medium">
                {titleTranslation}
              </h2>
              <p className="mt-9 mb-6 w-85 xl:w-120 2xl:w-140 text-justify text-xl lg:text-lg xl:text-2xl font-medium text-neutral-600">
                {descriptionDesktopTranslation}
              </p>
              <Link
                to={link.path}
                className="mt-6 text-sky-500 font-semibold xl:text-lg"
              >
                {linkLabelTranslation}
              </Link>
            </div>
            <div>
              <img
                className="rounded-4xl lg:h-68 xl:h-90 2xl:h-120"
                src={image.src}
                alt={image.alt}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { MainPageSection };
