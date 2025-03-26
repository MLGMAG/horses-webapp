import { FooterLittle, FooterMedium } from "../components/Footers";
import type { Route } from "../+types/root";
import { useTranslation } from "../components/useTranslation";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "description", content: "Please provide credentials" },
  ];
}

const BASE_URL = "https://mlgjkl.love/horses";
interface TokenVO {
  value: String;
}

export default function Login() {
  useEffect(() => {
    const fetchToken = async () => {
      const response = await fetch(`${BASE_URL}/rest/v1/token/`, {
        method: "POST",
      });
      const token = (await response.json()) as TokenVO;
      console.log(`Fetched Token: '${token.value}'`);
    };

    fetchToken();
  }, []);

  const title = useTranslation("LOGIN_TITLE");
  const email = useTranslation("LOGIN_EMAIL");
  const enterEmail = useTranslation("LOGIN_ENTER_EMAIL");
  const password = useTranslation("LOGIN_PASSWORD");
  const enterPassword = useTranslation("LOGIN_ENTER_PASSWORD");
  const enterAccount = useTranslation("LOGIN_ENTER_ACCOUNT");

  return (
    <>
      <div className="mx-5 mt-25 mb-10 xl:mb-20 w-max mx-auto">
        <div className="flex flex-col gap-0">
          <h1 className="text-2xl/5 font-semibold xl:text-4xl/8">Ride it.</h1>
          <h2 className="text-2xl font-semibold text-gray-400 xl:text-4xl">
            {title}
          </h2>
        </div>
        <hr className="h-px my-5 xl:my-10 bg-gray-200 border-0 dark:bg-gray-2"></hr>
        <form action="#">
          <div>
            <label className="text-sm text-gray-600 xl:text-lg" htmlFor="email">
              {email}
            </label>
            <div>
              <input
                className="border-1 border-gray-200 rounded-lg w-full px-2 py-2.5 text-sm xl:text-lg"
                type="text"
                id="email"
                placeholder={enterEmail}
              />
            </div>
          </div>
          <div className="mt-4 xl:mt-6">
            <label
              className="text-sm text-gray-600 xl:text-lg"
              htmlFor="password"
            >
              {password}
            </label>
            <div>
              <input
                className="border-1 border-gray-200 rounded-lg w-full px-2 py-2.5 text-sm xl:text-lg"
                type="password"
                id="password"
                placeholder={enterPassword}
              />
            </div>
          </div>
          <div className="text-center">
            <button
              className="mt-10 xl:mt-12 w-full inline-flex rounded-lg py-4 text-sm font-semibold transition bg-neutral-950 text-center text-white hover:bg-sky-400"
              type="submit"
            >
              <div className="w-full mx-auto text-base xl:text-2xl">
                {enterAccount}
              </div>
            </button>
          </div>
        </form>
      </div>
      <div className="lg:hidden">
        <FooterLittle />
      </div>
      <div className="hidden lg:block">
        <FooterMedium />
      </div>
    </>
  );
}
