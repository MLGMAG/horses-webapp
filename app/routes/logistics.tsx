import { FooterLittle, FooterMedium } from "../components/Footers";
import type { Route } from "../+types/root";
import animalLogisticsImage from "../images/animal_logistics.jpg";
import { OverviewSection } from "../components/OverviewSection";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Logistics" }];
}

const overviewInfo = {
  title: {
    en: "Logistics",
    uk: "Логістика",
  },
  description: {
    en: "We offer end-to-end horse shipping solutions, including flight bookings, quarantine management, veterinary compliance, and real-time tracking. Designed for horse owners, breeders, and trainers, the platform ensures safe, efficient, and stress-free international horse logistics with expert handling and customized transport options.",
    uk: "Ми пропонуємо комплексні рішення для перевезення коней, включаючи бронювання рейсів, управління карантином, дотримання ветеринарних норм і відстеження в режимі реального часу. Розроблена для власників коней, заводчиків і тренерів, платформа забезпечує безпечну, ефективну і безпроблемну міжнародну логістику коней з експертною обробкою і індивідуальними варіантами транспортування.",
  },
  image: (
    <img
      className="rounded-4xl mx-auto w-105"
      src={animalLogisticsImage}
      alt="Animals in track"
    />
  ),
};

export default function Transfer() {
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
