import { useTranslation } from "./useTranslation";

function TheMainPageAboutPlatformSection() {
  const title = useTranslation("ABOUT_SECTION_TITLE");
  const description = useTranslation("ABOUT_SECTION_DESCRIPTION");
  return (
    <div className="sm:hidden bg-slate-200 px-6 pt-8 pb-12">
      <h1 className="mb-6 text-4xl font-medium">{title}</h1>
      <p className="text-xl font-medium text-neutral-600">{description}</p>
    </div>
  );
}

export { TheMainPageAboutPlatformSection };
