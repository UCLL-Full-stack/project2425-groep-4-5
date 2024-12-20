import Logo from "/public/images/PlanArtsLogo.png";
import { useTranslation } from "next-i18next";
import Language from "./language/Language";
import Link from "next/link";

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center">
            <img
              src={Logo.src}
              width={50}
              height={50}
              className="inline-block rounded-full"
              alt="PlanArts Logo"
            />
            <span className="ml-2 text-2xl font-semibold text-gray-100 hover:text-blue-400 transition-colors duration-200">PlanArts</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-blue-400 transition-colors duration-200">
            {t('header.home')}
          </Link>
          <Link href="/practices" className="text-white hover:text-blue-400 transition-colors duration-200">
            {t('header.practices')}
          </Link>
          <Link href="/register" className="text-white hover:text-blue-400 transition-colors duration-200">
            {t('header.register')}
          </Link>
          <Link href="/login" className="text-white hover:text-blue-400 transition-colors duration-200">
            {t('header.login')}
          </Link>
          <Language />
        </div>
        <div className="md:hidden">
          <button className="text-white hover:text-blue-400 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
