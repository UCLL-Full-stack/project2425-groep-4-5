import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Language: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const handleLanguageChange = (event: { target: { value: string } }) => {
    const newLocale = event.target.value;
    const { pathname, query, asPath } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <div className="ml-6 flex items-center space-x-2">
      <label htmlFor="language" className="text-white font-semibold text-sm">
        {t('language')}
      </label>
      <select
        id="language"
        className="p-2 bg-gray-800 text-white rounded-md border border-gray-600 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200"
        value={locale}
        onChange={handleLanguageChange}
      >
        <option value="en">English</option>
        <option value="nl">Dutch</option>
      </select>
    </div>
  );
};

export default Language;
