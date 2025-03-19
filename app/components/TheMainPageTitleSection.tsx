import { useTranslation } from "./useTranslation";

function TheMainPageTitleSection() {
  const titleDescription = useTranslation("HOME_MAIN_TITLE_DESCRIPTION");
  return (
    <div className="mx-8 mt-6 mb-8 md:text-center md:mt-20 md:mb-30 md:mx-11 lg:mt-34 lg:mb-46 lg:mx-65 3xl:mx-105">
      <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 md:hidden">
        Global <br /> pet platform
      </h1>
      <h1 className="mb-9 hidden text-6xl/18 md:inline-block 2xl:text-7xl/18 font-semibold text-center text-slate-900">
        Global pet platform
      </h1>
      <p className="text-lg text-slate-700 hidden md:inline-block 2xl:text-2xl">
        {titleDescription}
      </p>
    </div>
  );
}

export { TheMainPageTitleSection };
