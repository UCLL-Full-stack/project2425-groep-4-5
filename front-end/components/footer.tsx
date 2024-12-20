import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image'; // for optimized image handling
import Link from 'next/link';

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-900 text-white py-2 w-full fixed bottom-0 left-0">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="flex justify-center md:justify-start mb-2 md:mb-0">
                    <Image src="/images/PlanArtsLogo.png" alt="PlanArts Logo" width={80} height={80} />
                </div>

                <div className="flex flex-col items-center md:items-start mt-2 md:mt-0">
                    <h4 className="text-sm font-semibold mb-1 text-gray-100">{t('footer.link')}</h4>
                    <nav className="flex flex-col space-y-1 text-xs">
                        <Link href="/" className="text-white hover:text-blue-400 transition-colors duration-200">{t('header.home')}</Link>
                        <Link href="/practices" className="text-white hover:text-blue-400 transition-colors duration-200">{t('header.practices')}</Link>
                        <Link href="/register" className="text-white hover:text-blue-400 transition-colors duration-200">{t('header.register')}</Link>
                        <Link href="/login" className="text-white hover:text-blue-400 transition-colors duration-200">{t('header.login')}</Link>
                    </nav>
                </div>
                <div className="flex flex-col items-center md:items-start mt-2 md:mt-0">
                    <h4 className="text-sm font-semibold mb-1 text-gray-100">{t('footer.contact')}</h4>
                    <p className="text-xs">+32 123 45 67</p>
                    <p className="text-xs">BvWw7@example.com</p>
                </div>
            </div>
            <div className="text-center text-xs mt-2 text-gray-400">
                <p>{t('footer.copyright')}</p>
            </div>
        </footer>
    );
};

export default Footer;