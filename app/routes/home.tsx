import type { Route } from "../+types/root";
import { FooterLittle, FooterBig } from "../components/Footers";
import { MainPageSection } from "../components/MainPageSection";
import animalLogisticsImage from "../images/animal_logistics.jpg";
import animalHospitalImage from "../images/animal_hospital.jpg";
import animalSocialNetworkImage from "../images/animal_social_network.jpg";
import animalMarketImage from "../images/animal_market.jpg";
import { useTranslation } from "../components/useTranslation";
import { TheMainPageTitleSection } from "~/components/TheMainPageTitleSection";
import { TheMainPageAboutPlatformSection } from "~/components/TheMainPageAboutPlatformSection";
import { TheMainPageServicesSection } from "~/components/TheMainPageServicesSection";
import { TheMainPageTitleIcon } from "~/components/TheMainPageTitleIcon";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Horses App" },
    { name: "description", content: "Welcome to Horses app!" },
  ];
}

function getTitleIcons() {
  return [
    {
      href: "#market",
      image: {
        src: animalMarketImage,
        alt: "Animals market",
      },
      description: useTranslation("HOME_TITLE_ICON_DESCRIPTION_MARKET"),
    },
    {
      href: "#logistics",
      image: {
        src: animalLogisticsImage,
        alt: "Animals in track",
      },
      description: useTranslation("HOME_TITLE_ICON_DESCRIPTION_LOGISTICS"),
    },
    {
      href: "#medicine",
      image: {
        src: animalHospitalImage,
        alt: "Animals in hospital",
      },
      description: useTranslation("HOME_TITLE_ICON_DESCRIPTION_HOSPITAL"),
    },
    {
      href: "#social",
      image: {
        src: animalSocialNetworkImage,
        alt: "Animals in social network",
      },
      description: useTranslation("HOME_TITLE_ICON_DESCRIPTION_SOCIAL"),
    },
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

export default function Home() {
  return (
    <>
      <TheMainPageTitleSection />

      <div className="md:hidden">
        <div className="ml-8 mr-4 my-10 flex flex-col gap-10">
          {getTitleIcons().map((titleIcon) => (
            <TheMainPageTitleIcon {...titleIcon} key={titleIcon.href} />
          ))}
        </div>
      </div>
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
