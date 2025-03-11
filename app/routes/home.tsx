import type { Route } from "../+types/root";
import { FooterLittle, FooterBig } from "../components/Footers";
import { MainPageSection } from "../components/MainPageSection";
import animalLogisticsImage from "../images/animal_logistics.jpg";
import animalHospitalImage from "../images/animal_hospital.jpg";
import animalSocialNetworkImage from "../images/animal_social_network.jpg";
import animalMarketImage from "../images/animal_market.jpg";
import { useTranslation } from "../components/useTranslation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Horses App" },
    { name: "description", content: "Welcome to Horses app!" },
  ];
}

function getSections() {
  return [
    {
      id: "logistics",
      title: useTranslation("LOGISTICS_SECTION_TITLE"),
      descriptionDesktop: useTranslation(
        "LOGISTICS_SECTION_DESCRIPTION_DESKTOP"
      ),
      descriptionMobile: useTranslation("LOGISTICS_SECTION_DESCRIPTION_MOBILE"),
      link: {
        label: useTranslation("LOGISTICS_SECTION_LINK_LABEL"),
        path: "/logistics",
      },
      image: {
        src: animalLogisticsImage,
        alt: "Animals in track",
      },
      backgroundClass: "bg-slate-200",
    },
    {
      id: "medicine",
      title: useTranslation("MEDICINE_SECTION_TITLE"),
      descriptionDesktop: useTranslation(
        "MEDICINE_SECTION_DESCRIPTION_DESKTOP"
      ),
      descriptionMobile: useTranslation("MEDICINE_SECTION_DESCRIPTION_MOBILE"),
      link: {
        label: useTranslation("MEDICINE_SECTION_LINK_LABEL"),
        path: "/medicine",
      },
      image: {
        src: animalHospitalImage,
        alt: "Animals in hospital",
      },
      backgroundClass: "bg-white",
    },
    {
      id: "social",
      title: useTranslation("SOCIAL_SECTION_TITLE"),
      descriptionDesktop: useTranslation("SOCIAL_SECTION_DESCRIPTION_DESKTOP"),
      descriptionMobile: useTranslation("SOCIAL_SECTION_DESCRIPTION_MOBILE"),
      link: {
        label: useTranslation("SOCIAL_SECTION_LINK_LABEL"),
        path: "/social",
      },
      image: {
        src: animalSocialNetworkImage,
        alt: "Animals in social network",
      },
      backgroundClass: "bg-slate-200",
    },
    {
      id: "market",
      title: useTranslation("MARKET_SECTION_TITLE"),
      descriptionDesktop: useTranslation("MARKET_SECTION_DESCRIPTION_DESKTOP"),
      descriptionMobile: useTranslation("MARKET_SECTION_DESCRIPTION_MOBILE"),
      link: {
        label: useTranslation("MARKET_SECTION_LINK_LABEL"),
        path: "/market",
      },
      image: {
        src: animalMarketImage,
        alt: "Animals market",
      },
      backgroundClass: "bg-white",
    },
  ];
}

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

const servicesText = {
  title: {
    en: "Our services includes",
    uk: "Ми надаємо наступні сервіси",
  },
  logistics: {
    en: "Logistics",
    uk: "Логістика",
  },
  social: {
    en: "Social network",
    uk: "Соціальна мережа",
  },
  medicine: {
    en: "Medicine",
    uk: "Медицина",
  },
  market: {
    en: "Market",
    uk: "Маркет",
  },
};

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

export default function Home() {
  return (
    <>
      <TheMainPageTitleSection />
      <TheMainPageAboutPlatformSection />
      <TheMainPageServicesSection />
      {getSections().map((section) => (
        <MainPageSection {...section} key={section.id} />
      ))}
      <div className="lg:hidden">
        <FooterLittle />
      </div>
      <div className="hidden lg:block">
        <FooterBig />
      </div>
    </>
  );
}
