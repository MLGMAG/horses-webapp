import type { Route } from "../+types/root";
import { FooterLittle, FooterBig } from "../components/Footers";
import { MainPageSection } from "../components/MainPageSection";
import animalLogisticsImage from "../images/animal_logistics.jpg";
import animalHospitalImage from "../images/animal_hospital.jpg";
import animalSocialNetworkImage from "../images/animal_social_network.jpg";
import animalMarketImage from "../images/animal_market.jpg";
import { useEffect, useState } from "react";
import { useGetStorageLanguage } from "../components/useStorageLanguage";
import { defaultLanguageCode } from "../data/LanguageData";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Horses App" },
    { name: "description", content: "Welcome to Horses app!" },
  ];
}

const sections = [
  {
    id: "logistics",
    title: {
      en: "Logistics",
      uk: "Логістика",
    },
    descriptionDesktop: {
      en: "End-to-end horse shipping solutions, including flight bookings, quarantine management, veterinary compliance, and real-time tracking.",
      uk: "Комплексні рішення для перевезення коней, включаючи бронювання рейсів, управління карантином, дотримання ветеринарних вимог і відстеження в режимі реального часу.",
    },
    descriptionMobile: {
      en: "Reliable transportation services for all types of animals worldwide.",
      uk: "Надійні транспортні послуги для всіх видів тварин по всьому світу.",
    },
    link: {
      label: {
        en: "Discovery opportunities →",
        uk: "Переглянути можливості  →",
      },
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
    title: {
      en: "Medicine",
      uk: "Медицина",
    },
    descriptionDesktop: {
      en: "Our services include veterinary support, medical documentation, temperature-controlled shipping for medications, and compliance with international health regulations. We prioritize the safe and timely delivery of essential equine medicines, providing peace of mind for owners and caretakers worldwide.",
      uk: "Наші послуги включають ветеринарну підтримку, медичну документацію, перевезення медикаментів з дотриманням температурного режиму та відповідність міжнародним нормам охорони здоров'я. Ми надаємо пріоритет безпечній та своєчасній доставці основних лікарських засобів для коней, забезпечуючи спокій власників та доглядачів по всьому світу.",
    },
    descriptionMobile: {
      en: "Directory of clinics, veterinarians, and useful information.",
      uk: "Каталог клінік, ветеринарів та корисної інформації.",
    },
    link: {
      label: {
        en: "Search for a specialist →",
        uk: "Пошук спеціаліста →",
      },
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
    title: {
      en: "Social network",
      uk: "Соціальна мережа",
    },
    descriptionDesktop: {
      en: "Dedicated social network for horse enthusiasts, owners, breeders, and trainers. This platform allows users to connect, share experiences, discuss equine care, and stay updated on industry trends.",
      uk: "Спеціалізована соціальна мережа для любителів коней, власників, заводчиків та тренерів. Ця платформа дозволяє користувачам спілкуватися, ділитися досвідом, обговорювати питання догляду за кіньми та бути в курсі галузевих тенденцій.",
    },
    descriptionMobile: {
      en: "Communication, forums, and pet owner communities.",
      uk: "Спілкування, форуми та спільноти власників домашніх тварин.",
    },
    link: {
      label: {
        en: "Like, share and repost! →",
        uk: "Ставте лайки, діліться та робіть репости! →",
      },
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
    title: {
      en: "Market",
      uk: "Маркет",
    },
    descriptionDesktop: {
      en: "The animal market service, connecting buyers and sellers of horses and other animals worldwide. The platform offers secure transactions, detailed listings with health records, transportation assistance, and expert guidance.",
      uk: "Сервіс на ринку тварин, що об'єднує покупців і продавців коней та інших тварин по всьому світу. Платформа пропонує безпечні транзакції, детальні списки з медичними картками, допомогу з транспортуванням та консультації експертів.",
    },
    descriptionMobile: {
      en: "Safe global marketplace for animals: buy, sell, rescue.",
      uk: "Безпечний глобальний ринок для тварин: купити, продати, врятувати.",
    },
    link: {
      label: {
        en: "Let's make a deal! →",
        uk: "Давай домовимося! →",
      },
      path: "/market",
    },
    image: {
      src: animalMarketImage,
      alt: "Animals market",
    },
    backgroundClass: "bg-white",
  },
];

const mainTitleDescrition = {
  en: "Universal platform combining everything related to animals: transportation, veterinary services, buying, selling, help, and finding a new home.",
  uk: "Універсальна платформа, що об'єднує все, що пов'язано з тваринами: перевезення, ветеринарні послуги, купівля, продаж, допомога та пошук нового дому.",
};

function TheMainPageTitleSection() {
  const [titleDescriptionTranslation, setTitleDescriptionTranslation] =
    useState("");

  useEffect(() => {
    const currentLanguageCode = useGetStorageLanguage(defaultLanguageCode);
    setTitleDescriptionTranslation(mainTitleDescrition[currentLanguageCode]);
  });

  return (
    <div className="mt-20 mb-30 mx-11 lg:mt-34 lg:mb-46 lg:mx-65 3xl:mx-105 text-center">
      <h1 className="mb-9 text-5xl/18 md:text-6xl/18 2xl:text-7xl/18 font-semibold text-center text-slate-900">
        Global pet platform
      </h1>
      <p className="text-lg text-slate-700 2xl:text-2xl">
        {titleDescriptionTranslation}
      </p>
    </div>
  );
}

const aboutPlatformText = {
  title: {
    en: "About platform",
    uk: "Про платформу",
  },
  description: {
    en: "It combines everything related to animals: transportation, veterinary services, buying, selling, help, and finding a new home. Here you will find a directory of clinics and veterinarians, a safe marketplace, an international transportation system, and a social network for pet owners. Everything is well-organized and available worldwide.",
    uk: "Об'єднує все, що пов'язано з тваринами: перевезення, ветеринарні послуги, купівля, продаж, допомога та пошук нового дому. Тут ви знайдете каталог клінік і ветеринарів, безпечний ринок, міжнародну транспортну систему і соціальну мережу для власників домашніх тварин. Все добре організовано і доступно по всьому світу.",
  },
};

function TheMainPageAboutPlatformSection() {
  const [titleTranslation, setTitleTranslation] = useState("");
  const [descriptionTranslation, setDescriptionTranslation] = useState("");

  useEffect(() => {
    const currentLanguageCode = useGetStorageLanguage(defaultLanguageCode);
    setTitleTranslation(aboutPlatformText.title[currentLanguageCode]);
    setDescriptionTranslation(
      aboutPlatformText.description[currentLanguageCode]
    );
  });

  return (
    <div className="sm:hidden bg-slate-200 px-6 pt-8 pb-12">
      <h1 className="mb-6 text-4xl font-medium">{titleTranslation}</h1>
      <p className="text-xl font-medium text-neutral-600">
        {descriptionTranslation}
      </p>
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
  const [titleTranslation, setTitleTranslation] = useState("");
  const [logisticsTranslation, setLogisticsTranslation] = useState("");
  const [socialTranslation, setSocialTranslation] = useState("");
  const [medicineTranslation, setMediciceTranslation] = useState("");
  const [marketTranslation, setMarketTranslation] = useState("");

  useEffect(() => {
    const currentLanguageCode = useGetStorageLanguage(defaultLanguageCode);
    setTitleTranslation(servicesText.title[currentLanguageCode]);
    setLogisticsTranslation(servicesText.logistics[currentLanguageCode]);
    setSocialTranslation(servicesText.social[currentLanguageCode]);
    setMediciceTranslation(servicesText.medicine[currentLanguageCode]);
    setMarketTranslation(servicesText.market[currentLanguageCode]);
  });

  return (
    <div className="sm:hidden bg-slate-200 py-24">
      <div className="rounded-4xl bg-neutral-950 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-xl w-full text-center font-display text-sm font-semibold tracking-wider text-white">
              {titleTranslation}
            </h2>
            <div className="mt-10 text-white text-lg flex flex-col text-center gap-4">
              <div className="flex flex-row items-center gap-4">
                <a href="#logistics" className="w-full hover:text-sky-400">
                  {logisticsTranslation}
                </a>
                <a href="#social" className="w-full hover:text-sky-400">
                  {socialTranslation}
                </a>
              </div>
              <div className="flex flex-row items-center gap-4">
                <a href="#medicine" className="w-full hover:text-sky-400">
                  {medicineTranslation}
                </a>
                <a href="#market" className="w-full hover:text-sky-400">
                  {marketTranslation}
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
      {sections.map((section) => (
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
