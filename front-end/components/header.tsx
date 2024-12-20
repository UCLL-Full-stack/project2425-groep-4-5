import Logo from "/public/images/PlanArtsLogo.png";
import { useTranslation } from "next-i18next";
import Language from "./language/Language";

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="bg-dark text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img
              src={Logo.src}
              width="50"
              height="50"
              className="inline-block align-top"
              alt="PlanArts Logo"
            />
          </a>
        </div>

        <div className="flex space-x-6">
          <a href="/" className="text-white hover:text-gray-300">{t('header.home')}</a>
          <a href="/practices" className="text-white hover:text-gray-300">{t('header.practices')}</a>
          <a href="/register" className="text-white hover:text-gray-300">{t('header.register')}</a>
          <a href="/login" className="text-white hover:text-gray-300">{t('header.login')}</a>
          <Language />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;