import { FooterLittle, FooterMedium } from "../components/Footers";
import type { Route } from "../+types/root";
import { useState, useEffect } from "react";
import { useGetStorageLanguage } from "../components/useStorageLanguage";
import { defaultLanguageCode } from "../data/LanguageData";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "description", content: "Please provide credentials" },
  ];
}

const translations = {
  title: {
    en: "Login to your account",
    uk: "Увійдість у ваш акаунт",
  },
  email: {
    en: "Email",
    uk: "Пошта",
  },
  enterEmail: {
    en: "Enter your email address...",
    uk: "Введіть поштову адресу...",
  },
  password: {
    en: "Password",
    uk: "Пароль",
  },
  enterPassword: {
    en: "Enter your password...",
    uk: "Введіть пароль...",
  },
  login: {
    en: "Login",
    uk: "Увійти",
  },
};

export default function Login() {
  const [titleTranslation, setTitleTranslation] = useState("");
  const [emailTranslation, setEmailTranslation] = useState("");
  const [enterEmailTranslation, setEnterEmailTranslation] = useState("");
  const [passwordTranslation, setPasswordTranslation] = useState("");
  const [enterPasswordTranslation, setEnterPasswordTranslation] = useState("");
  const [loginTranslation, setLoginTranslation] = useState("");

  useEffect(() => {
    const currentLanguageCode = useGetStorageLanguage(defaultLanguageCode);
    setTitleTranslation(translations.title[currentLanguageCode]);
    setEmailTranslation(translations.email[currentLanguageCode]);
    setEnterEmailTranslation(translations.enterEmail[currentLanguageCode]);
    setPasswordTranslation(translations.password[currentLanguageCode]);
    setEnterPasswordTranslation(
      translations.enterPassword[currentLanguageCode]
    );
    setLoginTranslation(translations.login[currentLanguageCode]);
  });

  return (
    <>
      <div className="mx-5 mt-25 mb-10 w-max mx-auto">
        <div className="flex flex-col gap-0">
          <h1 className="text-2xl/5 font-semibold">Ride it.</h1>
          <h2 className="text-2xl font-semibold text-gray-400">
            {titleTranslation}
          </h2>
        </div>
        <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-2"></hr>
        <form action="#">
          <div>
            <label className="text-sm text-gray-600" htmlFor="email">
              {emailTranslation}
            </label>
            <div>
              <input
                className="border-1 border-gray-200 rounded-lg w-full px-2 py-2.5 text-sm"
                type="text"
                id="email"
                placeholder={enterEmailTranslation}
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm text-gray-600" htmlFor="password">
              {passwordTranslation}
            </label>
            <div>
              <input
                className="border-1 border-gray-200 rounded-lg w-full px-2 py-2.5 text-sm"
                type="password"
                id="password"
                placeholder={enterPasswordTranslation}
              />
            </div>
          </div>
          <div className="text-center">
            <button
              className="mt-10 w-full inline-flex rounded-lg py-4 text-sm font-semibold transition bg-neutral-950 text-center text-white hover:bg-sky-400"
              type="submit"
            >
              <div className="w-full mx-auto text-base">{loginTranslation}</div>
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
