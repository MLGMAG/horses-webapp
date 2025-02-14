import { useState } from "react";
import horseIcon from "./horse.svg";
import menuIcon from "./menu.svg";
import { Link } from "react-router";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="shadow mb-2">
      <nav className="flex justify-between items-center mx-auto px-8 py-6">
        <div className="flex items-center gap-[2vw]">
          <div>
            <Link to="/">
              <img className="w-12" src={horseIcon} alt="horse_icon" />
            </Link>
          </div>
          <div className="hidden md:inline">
            <ul className="font-semibold text-base flex gap-[1vw]">
              {navLinks.map(({ id, href, title }) => (
                <li
                  className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer"
                  key={id}
                >
                  <Link to={href}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="hidden md:inline">
          <ul className="font-semibold text-base flex gap-[2vw]">
            {authLinks.map(({ id, href, title }) => (
              <li
                className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer"
                key={id}
              >
                <Link to={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          <img
            className="w-12 cursor-pointer"
            src={menuIcon}
            alt="menu_icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
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
          {[...navLinks, ...authLinks].map(({ id, href, title }) => (
            <div
              className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer"
              key={id}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to={href}>{title}</Link>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}

const navLinks = [
  {
    id: 1,
    href: "/transfer",
    title: "Transfer",
  },
  {
    id: 2,
    href: "/medicine",
    title: "Medicine",
  },
  {
    id: 3,
    href: "/social",
    title: "Social network",
  },
];

const authLinks = [
  {
    id: 4,
    href: "/login",
    title: "Login",
  },
];
