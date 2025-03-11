import { useTranslation } from "./useTranslation";

function TheMainPageTitleSection() {
  const titleDescription = useTranslation("HOME_MAIN_TITLE_DESCRIPTION");
  return (
    <div className="mt-20 mb-30 mx-11 lg:mt-34 lg:mb-46 lg:mx-65 3xl:mx-105 text-center">
      <h1 className="mb-9 text-5xl/18 md:text-6xl/18 2xl:text-7xl/18 font-semibold text-center text-slate-900">
        Global pet platform
      </h1>
      <p className="text-lg text-slate-700 2xl:text-2xl">{titleDescription}</p>
    </div>
  );
}

export { TheMainPageTitleSection };
