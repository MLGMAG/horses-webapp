import { FooterLittle, FooterMedium } from "../components/Footers";
import { OverviewSection } from "../components/OverviewSection";
import type { Route } from "../+types/root";
import animalMarketImage from "../images/animal_market.jpg";
import { useTranslation } from "../components/useTranslation";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Market" }];
}

function getOverviewInfo() {
  return {
    title: useTranslation("OVERVIEW_MARKET_TITLE"),
    description: useTranslation("OVERVIEW_MARKET_DESCRIPTION"),
    image: {
      alt: "Animals market",
      src: animalMarketImage,
    },
  };
}

export default function Market() {
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
