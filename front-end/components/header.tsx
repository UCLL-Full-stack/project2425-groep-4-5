import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className='py-4'>
      <nav className='flex items-center background-green-500'>
        <Link href="/register" className=''>
          Register now!
        </Link>
        <Link href="/login" className='text-blue-500 hover:text-blue-700 bg-white px-3 py-2 rounded'>
          Login {/*Still needs to be fixed */}
        </Link>
      </nav>
    </header >
  );
};

export default Header;