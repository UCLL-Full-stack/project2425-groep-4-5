import React from 'react';

const HuisartsLeuvenCard: React.FC = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Huisarts Leuven</div>
        <p className="text-gray-700 text-base">
          Gezellige huisarts in Leuven op de Oude Markt.
        </p>
      </div>
      <ul className="px-6 py-4">
        <li className="text-gray-600 mb-2">Tel: 123 45 67</li>
        <li className="text-gray-600 mb-2">Email: 1oG8F@example.com</li>
        <li className="text-gray-600 mb-2">Oude Markt 12</li>
      </ul>
      <div className="px-6 py-4 flex justify-between">
        <a href="#" className="text-blue-500 hover:text-blue-700">Bekijk praktijk</a>
        <a href="#" className="text-blue-500 hover:text-blue-700">Plan een afspraak</a>
      </div>
    </div>
  );
};

export default HuisartsLeuvenCard;
