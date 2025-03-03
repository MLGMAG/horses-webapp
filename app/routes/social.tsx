import { FooterLittle, FooterMedium } from "../components/Footers";
import type { Route } from "../+types/root";
import animalSocialNetworkImage from "../images/animal_social_network.jpg";
import { OverviewSection } from "../components/OverviewSection";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Social Network" }];
}

const overviewInfo = {
  title: {
    en: "Social network",
    uk: "Соціальна мережа",
  },
  description: {
    en: "A dedicated social network for horse enthusiasts, owners, breeders, and trainers. This platform allows users to connect, share experiences, discuss equine care, and stay updated on industry trends. With forums, groups, and messaging features, it fosters a global community passionate about horses, enhancing collaboration and knowledge-sharing across the equestrian world.",
    uk: "Спеціальна соціальна мережа для любителів коней, власників, заводчиків та тренерів. Ця платформа дозволяє користувачам спілкуватися, обмінюватися досвідом, обговорювати питання догляду за кіньми та бути в курсі галузевих тенденцій. Завдяки форумам, групам і функціям обміну повідомленнями вона сприяє формуванню глобальної спільноти прихильників коней, посилюючи співпрацю та обмін знаннями у світі конярства.",
  },
  image: {
    alt: "Animals in social network",
    src: animalSocialNetworkImage,
  },
};

export default function Social() {
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
