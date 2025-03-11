import { FooterLittle, FooterMedium } from "../components/Footers";
import type { Route } from "../+types/root";
import animalSocialNetworkImage from "../images/animal_social_network.jpg";
import { OverviewSection } from "../components/OverviewSection";
import { useTranslation } from "../components/useTranslation";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Social Network" }];
}

function getOverviewInfo() {
  return {
    title: useTranslation("OVERVIEW_SOCIAL_TITLE"),
    description: useTranslation("OVERVIEW_SOCIAL_DESCRIPTION"),
    image: {
      alt: "Animals in social network",
      src: animalSocialNetworkImage,
    },
  };
}

export default function Social() {
  const overviewInfo = getOverviewInfo();
  return (
    <>
      <OverviewSection {...overviewInfo} />
      <div className="lg:hidden">
        <FooterLittle />
      </div>
      <div className="hidden lg:block">
        <FooterMedium />
      </div>
    </>
  );
}
