import { FooterLittle, FooterMedium } from "../components/Footers";
import { OverviewSection } from "../components/OverviewSection";
import type { Route } from "../+types/root";
import animalMarketImage from "../images/animal_market.jpg";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Market" }];
}

const overviewInfo = {
  title: {
    en: "Market",
    uk: "Маркет"
  },
  description: {
    en: "The animal market service, connecting buyers and sellers of horses and other animals worldwide. The platform offers secure transactions, detailed listings with health records, transportation assistance, and expert guidance. Whether buying or selling, users can access a trusted marketplace designed to ensure safe, transparent, and efficient animal trade.",
    uk: "Сервіс на ринку тварин, що об'єднує покупців і продавців коней та інших тварин по всьому світу. Платформа пропонує безпечні транзакції, детальні списки з медичними картками, допомогу з транспортуванням та консультації експертів. Незалежно від того, купують вони чи продають, користувачі можуть отримати доступ до надійного ринку, створеного для забезпечення безпечної, прозорої та ефективної торгівлі тваринами."
  },
  image: (
    <img
      className="rounded-4xl mx-auto w-105"
      src={animalMarketImage}
      alt="Animals market"
    />
  ),
};

export default function Market() {
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
