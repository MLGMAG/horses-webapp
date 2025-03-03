import { useEffect, useState } from "react";
import horseIcon from "../images/horse.png";
import { Link } from "react-router";
import {
  useGetStorageLanguage,
  useSetStorageLanguage,
} from "./useStorageLanguage";
import {
  defaultLanguageCode,
  supportedLanguageCodes,
} from "../data/LanguageData";

function NavbarItem({ href, title }: any) {
  const [titleTranslation, setTitleTranslation] = useState("");
  useEffect(() => {
    const currentLanguageCode = useGetStorageLanguage(defaultLanguageCode);
    setTitleTranslation(title[currentLanguageCode]);
  });

  return (
    <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer xl:text-lg">
      <Link to={href}>{titleTranslation}</Link>
    </li>
  );
}

function MobileNavbarItem({
  href,
  title,
  setIsMenuOpen,
  disableScrollOnMenuOpen,
}: any) {
  const [titleTranslation, setTitleTranslation] = useState("");
  useEffect(() => {
    const currentLanguageCode = useGetStorageLanguage(defaultLanguageCode);
    setTitleTranslation(title[currentLanguageCode]);
  });

  return (
    <div
      className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer"
      key={href}
      onClick={() => setIsMenuOpen(false)}
    >
      <Link onClick={disableScrollOnMenuOpen} to={href}>
        {titleTranslation}
      </Link>
    </div>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLanguageCode, setActiveLanguageCode] = useState("");

  useEffect(() => {
    const selectedLanguage = useGetStorageLanguage(defaultLanguageCode);
    if (!supportedLanguageCodes.has(selectedLanguage)) {
      useSetStorageLanguage(defaultLanguageCode);
      setActiveLanguageCode(defaultLanguageCode);
    } else {
      setActiveLanguageCode(selectedLanguage);
    }
  });

  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
    disableScrollOnMenuOpen();
  }

  function disableScrollOnMenuOpen() {
    if (isMenuOpen) {
      document.body.classList.remove("overflow-y-hidden");
    } else {
      document.body.classList.add("overflow-y-hidden");
    }
  }

  function changeLanguage(selectedLanguageCode: string) {
    if (selectedLanguageCode === activeLanguageCode) {
      return;
    }

    useSetStorageLanguage(selectedLanguageCode);
    setActiveLanguageCode(selectedLanguageCode);

    window.location.reload();
  }

  const genericHamburgerLine =
    "h-1 w-8 my-[3px] rounded-full bg-black transition ease transform duration-300";

  return (
    <div className="mb-2">
      <nav className="flex justify-between items-center mx-auto px-8 py-6">
        <div className="flex items-center gap-10">
          <div>
            <Link to="/">
              <img className="w-12" src={horseIcon} alt="horse_icon" />
            </Link>
          </div>
          <div className="hidden lg:inline">
            <ul className="font-semibold text-base flex gap-[1vw]">
              {navLinks.map((link) => (
                <NavbarItem {...link} key={link.href} />
              ))}
            </ul>
          </div>
        </div>
        <div className="hidden lg:inline">
          <ul className="font-semibold text-base flex gap-[2vw]">
            {authLinks.map((link) => (
              <NavbarItem {...link} key={link.href} />
            ))}
          </ul>
        </div>

        <div className="lg:hidden">
          <button
            className="flex flex-col h-12 w-12 justify-center items-center"
            onClick={handleClick}
          >
            <div
              className={`${genericHamburgerLine} ${
                isMenuOpen && "rotate-45 translate-y-3"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${isMenuOpen && "opacity-0"}`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isMenuOpen && "-rotate-45 -translate-y-2"
              }`}
            />
          </button>
        </div>

        <div
          className={`
              pb-4
              absolute xl:hidden 
              top-24 left-0 w-full bg-white 
              flex flex-col item-center
              font-semibold text-lg 
              transform transition-transform
              shadow
              ${isMenuOpen ? "opacity-100" : "opacity-0 hidden"}
          `}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <div>
            {[...navLinks, ...authLinks].map((link) => (
              <MobileNavbarItem
                {...link}
                setIsMenuOpen={setIsMenuOpen}
                disableScrollOnMenuOpen={disableScrollOnMenuOpen}
              />
            ))}
            <div className="mt-4 py-3 px-4 flex flex-row gap-3 justify-between">
              <button
                className={`w-43 md:w-80 text-center rounded-full ${
                  activeLanguageCode === "uk" && "bg-slate-200"
                }`}
                onClick={() => changeLanguage("uk")}
              >
                УКР
              </button>
              <button
                className={`w-43 md:w-80 text-center rounded-full ${
                  activeLanguageCode === "en" && "bg-slate-200"
                }`}
                onClick={() => changeLanguage("en")}
              >
                ENG
              </button>
            </div>
          </div>
        </div>
        <div
          className={`
              absolute xl:hidden h-full w-full bg-black text-white left-0 top-120
              ${isMenuOpen ? "opacity-50" : "opacity-0 hidden"}
          `}
        ></div>
      </nav>
    </div>
  );
}

const navLinks = [
  {
    href: "/logistics",
    title: { en: "Logistics", uk: "Логістика" },
  },
  {
    href: "/medicine",
    title: { en: "Medicine", uk: "Медицина" },
  },
  {
    href: "/social",
    title: { en: "Social network", uk: "Соціальна мережа" },
  },
  {
    href: "/market",
    title: { en: "Market", uk: "Маркет" },
  },
];

const authLinks = [
  {
    href: "/login",
    title: { en: "Login", uk: "Логін" },
  },
];
