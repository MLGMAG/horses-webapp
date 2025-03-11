import { LanguageSelector } from "./LanguageSelector";
import horseIcon from "../images/horse.png";
import { useTranslation } from "./useTranslation";

const title = "© 2025 Global pet platform.";

function FooterLittle() {
  return (
    <footer className="my-5">
      <p className="w-full text-center">{title}</p>
    </footer>
  );
}

function FooterMedium() {
  return (
    <footer className="w-full my-[30px] text-base flex flex-col items-center gap-2 xl:text-lg">
      <LanguageSelector />
      <div>
        <p>{title}</p>
      </div>
    </footer>
  );
}

function FooterBig() {
  const email = useTranslation("FOOTER_CONTACTS_EMAIL");
  const phone = useTranslation("FOOTER_CONTACTS_PHONE");

  return (
    <div>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-2"></hr>
      <footer className="my-12 mx-30 2xl:pr-40 3xl:pl-28 3xl:pr-68 xl:text-lg">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col gap-9">
            <div className="flex flex-row items-center gap-6">
              <img className="w-12" src={horseIcon} alt="horse_icon" />
              <p>Global pet platform.</p>
            </div>
            <div className="flex flex-row items-center gap-6">
              <div>
                <div>{email}</div>
                <div>{phone}</div>
              </div>
              <div>
                <div>sales@global-pet-platform.com</div>
                <div>+380995166877</div>
              </div>
            </div>
            <LanguageSelector />
          </div>
          <div>
            <p>{title}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export { FooterLittle, FooterMedium, FooterBig };
