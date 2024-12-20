import React from "react";
import { useTranslation } from "next-i18next";

const UserLoginForm: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto my-5 px-4">
      <div className="flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
          <h3 className="text-2xl font-bold mb-4">{t('form.registration')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <h4 className="text-lg mb-2">{t('form.firstName')}</h4>
              <input
                type="text"
                className="form-input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                id="registerName"
                placeholder={t('form.firstName')}
              />
            </div>
            <div>
              <h4 className="text-lg mb-2">{t('form.lastName')}</h4>
              <input
                type="text"
                className="form-input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                id="registerLastName"
                placeholder={t('form.lastName')}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <h4 className="text-lg mb-2">{t('form.birthDate')}</h4>
              <input
                type="date"
                className="form-input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                id="registerDate"
              />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">{t('form.gender')}</h4>
              <div className="space-x-4">
                <label>
                  <input type="radio" name="gender" value="Female" className="mr-2" />
                  {t('form.female')}
                </label>
                <label>
                  <input type="radio" name="gender" value="Male" className="mr-2" />
                  {t('form.male')}
                </label>
                <label>
                  <input type="radio" name="gender" value="Other" className="mr-2" />
                  {t('form.other')}
                </label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <h4 className="text-lg mb-2">{t('form.email')}</h4>
              <input
                type="email"
                className="form-input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                id="registerEmail"
                placeholder={t('form.email')}
              />
            </div>
            <div>
              <h4 className="text-lg mb-2">{t('form.phoneNumber')}</h4>
              <input
                type="tel"
                className="form-input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                id="registerPhone"
                placeholder={t('form.phoneNumber')}
              />
            </div>
          </div>
          <div className="mb-4">
            <h4 className="text-lg mb-2">{t('form.password')}</h4>
            <input
              type="password"
              className="form-input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              id="inputPassword"
              placeholder={t('form.password')}
            />
          </div>
          <div className="mb-4">
            <h4 className="text-lg mb-2">{t('form.repeatPassword')}</h4>
            <input
              type="password"
              className="form-input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              id="inputPasswordRepeat"
              placeholder={t('form.repeatPassword')}
            />
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200">
            {t('form.register')}
          </button>

        </div>
      </div>
    </div>
  );
};

export default UserLoginForm;
