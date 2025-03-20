import { useTranslation } from "./useTranslation";

function TheMainPageTitleSection({ titleIcons }: any) {
  return (
    <div>
      <div className="mx-8 mt-6 mb-8 md:hidden">
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">
          Global <br /> pet platform
        </h1>
      </div>

      <div className="md:hidden">
        <div className="ml-8 mr-4 my-10 flex flex-col gap-10">
          {titleIcons.map((titleIcon: any) => (
            <div className="flex gap-5 items-center" key={titleIcon.href}>
              <a
                href={titleIcon.href}
                className="min-w-39 max-w-39 sm:min-w-50 sm:max-w-50"
              >
                <img
                  src={titleIcon.image.src}
                  alt={titleIcon.image.alt}
                  className="mx-auto rounded-4xl"
                />
              </a>
              <div className="text-md sm:text-xl w-max">
                {titleIcon.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ml-8 mb-8 xl:mb-12 lg:mt-10 hidden md:block text-center">
        <h1 className="mb-9 text-5xl xl:text-6xl 2xl:text-7xl/18 font-semibold text-slate-900">
          Global pet platform
        </h1>

        <p className="mx-12 xl:mx-50 text-slate-700 text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
          {useTranslation("HOME_MAIN_TITLE_DESCRIPTION")}
        </p>
      </div>

      <div className="hidden md:block mx-6 my-10 lg:my-15">
        <div className="flex flex-row flex-wrap gap-6 xl:gap-10 justify-center">
          {titleIcons.map((titleIcon: any) => (
            <div
              className="flex gap-5 justify-start items-center bg-slate-200 rounded-3xl w-85 lg:w-100 xl:w-130 2xl:w-160"
              key={titleIcon.href}
            >
              <img
                src={titleIcon.image.src}
                alt={titleIcon.image.alt}
                className="h-35 lg:h-45 cursor-pointer rounded-l-3xl"
                onClick={() => {
                  location.href = titleIcon.href;
                }}
              />
              <div className="text-md sm:text-sm xl:text-lg w-max mr-5">
                {titleIcon.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { TheMainPageTitleSection };
