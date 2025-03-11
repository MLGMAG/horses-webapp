import { useTranslation } from "./useTranslation";

function OverviewSection({ title, description, image }: any) {
  const overview = useTranslation("OVERVIEW_TITLE");

  return (
    <div className="mx-auto px-6 lg:px-8 mt-10 md:mt-14">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div>
          <h3 className="block font-display text-base font-semibold text-neutral-950 italic lg:w-max lg:mx-auto 2xl:text-xl">
            {title}
          </h3>
          <h1 className="mt-4 lg:mt-2 lg:mb-12 block max-w-5xl font-display text-5xl 2xl:text-7xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-6xl lg:w-max lg:mx-auto">
            {overview}
          </h1>
        </div>
        <p className="my-6 2xl:my-15 max-w-3xl text-lg 2xl:text-2xl text-neutral-600 lg:w-max lg:mx-auto lg:mb-12 lg:text-justify">
          {description}
        </p>
        <div className="2xl:mb-10">
          <img
            className="rounded-4xl mx-auto w-105 2xl:w-130"
            src={image.src}
            alt={image.alt}
          />
        </div>
      </div>
    </div>
  );
}

export { OverviewSection };
