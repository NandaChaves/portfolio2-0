import { useTranslation, Trans } from "react-i18next";
import { LanguageSwitcherMenu } from "./LanguageSwitcher";
import { SOCIALS } from "../constants";
export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;
  const { t } = useTranslation();
  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-4 right-4 md:top-12 md:right-12 p-3 bg-indigo-600 w-11 h-11 rounded-md"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45  translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col
      ${menuOpened ? "w-full md:w-80" : "w-0"}`} >
        <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
          <MenuButton label='Home' onClick={() => onSectionChange(0)} />
          <MenuButton label={t("menu_skills")} onClick={() => onSectionChange(1)} />
          <MenuButton label={t("about_me")} onClick={() => onSectionChange(2)} />
          <MenuButton label={t("experience")} onClick={() => onSectionChange(3)} />
          <MenuButton label={t("projetos")} onClick={() => onSectionChange(4)} />
          <MenuButton label={t("menu_contact")} onClick={() => onSectionChange(5)} />
          <LanguageSwitcherMenu />

          <ul className="mt-8 pt-4 g-8 w-full flex flex-row items-center items-center justify-center gap-6">
          {SOCIALS.map((social) => (
            <li key={social.name} className="text-secondary items-center justify-center font-poppins font-medium cursor-pointer text-[16px] opacity-80 hover:opacity-100 transition" >
              <a href={social.link} target="_blank" rel="noreferrer noopener">
                <img src={social.icon} alt={social.name} className="h-6 w-6 brightness-0 hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button onClick={onClick}
      className="text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors" >
      {label}
    </button>
  );
};


export default Menu;