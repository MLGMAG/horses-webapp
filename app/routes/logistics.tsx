import { FooterLittle, FooterMedium } from "../components/Footers";
import type { Route } from "../+types/root";
import animalLogisticsImage from "../images/animal_logistics.jpg";
import { OverviewSection } from "../components/OverviewSection";
import { useTranslation } from "../components/useTranslation";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Logistics" }];
}

function getOverviewInfo() {
  return {
    title: useTranslation("OVERVIEW_LOGISTICS_TITLE"),
    description: useTranslation("OVERVIEW_LOGISTICS_DESCRIPTION"),
    image: {
      alt: "Animals in track",
      src: animalLogisticsImage,
    },
  };
}

export default function Transfer() {
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
