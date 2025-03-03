import { FooterLittle, FooterMedium } from "../components/Footers";
import type { Route } from "../+types/root";
import animalHospitalImage from "../images/animal_hospital.jpg";
import { OverviewSection } from "../components/OverviewSection";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Medicine" }];
}

const overviewInfo = {
  title: {
    en: "Medicine",
    uk: "Медицина",
  },
  description: {
    en: "We offer specialized medicine services to ensure the health and well-being of horses during transport. Our services include veterinary support, medical documentation, temperature-controlled shipping for medications, and compliance with international health regulations. We prioritize the safe and timely delivery of essential equine medicines, providing peace of mind for owners and caretakers worldwide.",
    uk: "Ми пропонуємо спеціалізовані медичні послуги для забезпечення здоров'я та благополуччя коней під час транспортування. Наші послуги включають ветеринарну підтримку, медичну документацію, перевезення медикаментів з контрольованою температурою та дотримання міжнародних правил охорони здоров'я. Ми надаємо пріоритет безпечній та своєчасній доставці основних лікарських засобів для коней, забезпечуючи спокій власників та доглядачів коней по всьому світу.",
  },
  image: {
    alt: "Animals in hospital",
    src: animalHospitalImage,
  },
};

export default function Medicine() {
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
