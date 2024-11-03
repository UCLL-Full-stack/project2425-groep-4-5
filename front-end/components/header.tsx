import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-green-500 p-4 shadow-md">
      <nav className="flex justify-between items-center">
        <div className="text-lg font-bold text-white">MyApp</div>
        <div className="space-x-4" >
          <Link href="/register" className="text-blue-500 hover:text-blue-700 bg-white px-3 py-2 rounded">
            Register now!
          </Link>
          <Link href="/login" className='text-blue-500 hover:text-blue-700 bg-white px-3 py-2 rounded'>
            Login {/*Still needs to be fixed */}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;