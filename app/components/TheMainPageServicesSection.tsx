import { useTranslation } from "./useTranslation";

function TheMainPageServicesSection() {
  const title = useTranslation("SERVICES_SECTION_TITLE");
  const logistics = useTranslation("SERVICES_SECTION_LOGISTICS");
  const socialNetwork = useTranslation("SERVICES_SECTION_SOCIAL_NETWORK");
  const medicine = useTranslation("SERVICES_SECTION_MEDICINE");
  const market = useTranslation("SERVICES_SECTION_MARKET");

  return (
    <div className="sm:hidden bg-slate-200 py-24">
      <div className="rounded-4xl bg-neutral-950 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-xl w-full text-center font-display text-sm font-semibold tracking-wider text-white">
              {title}
            </h2>
            <div className="mt-10 text-white text-lg flex flex-col text-center gap-4">
              <div className="flex flex-row items-center gap-4">
                <a href="#logistics" className="w-full hover:text-sky-400">
                  {logistics}
                </a>
                <a href="#social" className="w-full hover:text-sky-400">
                  {socialNetwork}
                </a>
              </div>
              <div className="flex flex-row items-center gap-4">
                <a href="#medicine" className="w-full hover:text-sky-400">
                  {medicine}
                </a>
                <a href="#market" className="w-full hover:text-sky-400">
                  {market}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { TheMainPageServicesSection };
