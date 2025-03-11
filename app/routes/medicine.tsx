import { FooterLittle, FooterMedium } from "../components/Footers";
import type { Route } from "../+types/root";
import animalHospitalImage from "../images/animal_hospital.jpg";
import { OverviewSection } from "../components/OverviewSection";
import { useTranslation } from "../components/useTranslation";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Medicine" }];
}

function getOverviewInfo() {
  return {
    title: useTranslation("OVERVIEW_MEDICINE_TITLE"),
    description: useTranslation("OVERVIEW_MEDICINE_DESCRIPTION"),
    image: {
      alt: "Animals in hospital",
      src: animalHospitalImage,
    },
  };
}

export default function Medicine() {
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
