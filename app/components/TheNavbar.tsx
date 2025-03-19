import { useEffect, useState } from "react";
import horseIcon from "../images/horse.png";
import { Link } from "react-router";
import { useStorageLanguage } from "./useStorageLanguage";
import { useTranslation } from "./useTranslation";
import { TheNavbarLanguageSelectorMobile } from "./TheNavbarLanguageSelectorMobile";

function getNavbarLinks() {
  return [
    {
      href: "/logistics",
      title: useTranslation("NAVBAR_LOGISTICS_TITLE"),
    },
    {
      href: "/medicine",
      title: useTranslation("NAVBAR_MEDICINE_TITLE"),
    },
    {
      href: "/social",
      title: useTranslation("NAVBAR_SOCIAL_TITLE"),
    },
    {
      href: "/market",
      title: useTranslation("NAVBAR_MARKET_TITLE"),
    },
  ];
}

function getNavbarAuthLinks() {
  return [
    {
      href: "/login",
      title: useTranslation("NAVBAR_LOGIN_TITLE"),
    },
  ];
}

function NavbarItem({ href, title }: any) {
  return (
    <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer xl:text-lg">
      <Link to={href}>{title}</Link>
    </li>
  );
}

function MobileNavbarItem({
  href,
  title,
  setIsMenuOpen,
  disableScrollOnMenuOpen,
}: any) {
  return (
    <div
      className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer"
      key={href}
      onClick={() => setIsMenuOpen(false)}
    >
      <Link onClick={disableScrollOnMenuOpen} to={href}>
        {title}
      </Link>
    </div>
  );
}

export function TheNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLanguageCode, setActiveLanguageCode] = useState("");
  const [storageLanguage, setStorageLanguage] = useStorageLanguage();

  useEffect(() => {
    setActiveLanguageCode(storageLanguage);
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

    setStorageLanguage(selectedLanguageCode);
    setActiveLanguageCode(selectedLanguageCode);
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
              {getNavbarLinks().map((link) => (
                <NavbarItem {...link} key={link.href} />
              ))}
            </ul>
          </div>
        </div>

        <div className="hidden lg:inline">
          <ul className="font-semibold text-base flex gap-[2vw]">
            {getNavbarAuthLinks().map((link) => (
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
            {[...getNavbarLinks(), ...getNavbarAuthLinks()].map((link) => (
              <MobileNavbarItem
                {...link}
                key={link.href}
                setIsMenuOpen={setIsMenuOpen}
                disableScrollOnMenuOpen={disableScrollOnMenuOpen}
              />
            ))}
            <TheNavbarLanguageSelectorMobile />
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
