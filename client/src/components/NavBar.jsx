
import { useState } from 'react';

import logo from '../assets/images/logo.png';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
         

<nav className="bg-white border-gray-200 dark:border-gray-600 ">
    <div className="flex flex-wrap justify-between items-center mx-auto lg:mx-[5%] px-4">
        <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-36" alt=" Logo" />
            
        </a>
        <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mega-menu-full"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
        <div id="mega-menu-full"   className={`items-center justify-between font-medium w-full md:flex md:w-auto md:order-1 ${
                            isMenuOpen ? 'block ' : 'hidden'
                        }`}>
            <ul className="flex flex-col p-4 md:p-0 mt-4   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                <li>
                    <a href="#" className="block py-2 px-3 text-zinc-600 hover:text-black text-lg transition-all rounded " aria-current="page">Home</a>
                </li>
             
                <li>
                    <a href="#" className="block py-2 px-3  text-zinc-600 hover:text-black text-lg transition-all   rounded  ">About</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-3 text-zinc-600 hover:text-black text-lg transition-all  rounded  ">Contact</a>
                </li>
                <li>
                    <a href="https://www.marvix.solutions/our-services" className="block py-2 px-3 text-zinc-600 hover:text-black text-lg transition-all  rounded  ">Service</a>
                </li>
            </ul>
        </div>
    </div>
  <div className='h-2 bg-black opacity-5 mx-10'>

  </div>
   
</nav>

        </>
    );
}
