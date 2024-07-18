"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-primary-color p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={60} height={60} />
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex lg:space-x-6 lg:items-center">
            <li>
              <Link href="/" legacyBehavior>
                <a className="text-white block p-4 lg:p-2 hover:text-secondary-color">Início</a>
              </Link>
            </li>
            <li>
              <Link href="/empresa" legacyBehavior>
                <a className="text-white block p-4 lg:p-2 hover:text-secondary-color">Sobre a Empresa</a>
              </Link>
            </li>
            <li>
              <Link href="/eleicoes2024" legacyBehavior>
                <a className="text-white block p-4 lg:p-2 hover:text-secondary-color">Eleições em 2024</a>
              </Link>
            </li>
            <li>
              <Link href="/noticias" legacyBehavior>
                <a className="text-white block p-4 lg:p-2 hover:text-secondary-color">Notícias GPE</a>
              </Link>
            </li>
            <li>
              <Link href="/contato" legacyBehavior>
                <a className="text-white block p-4 lg:p-2 hover:text-secondary-color">Contato</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-primary-color`}>
        <ul className="space-y-2">
          <li className="text-center border-b border-gray-700">
            <Link href="/" legacyBehavior>
              <a className="text-white block p-4 hover:text-secondary-color">Início</a>
            </Link>
          </li>
          <li className="text-center border-b border-gray-700">
            <Link href="/empresa" legacyBehavior>
              <a className="text-white block p-4 hover:text-secondary-color">Sobre a Empresa</a>
            </Link>
          </li>
          <li className="text-center border-b border-gray-700">
            <Link href="/eleicoes2024" legacyBehavior>
              <a className="text-white block p-4 hover:text-secondary-color">Eleições em 2024</a>
            </Link>
          </li>
          <li className="text-center border-b border-gray-700">
            <Link href="/noticias" legacyBehavior>
              <a className="text-white block p-4 hover:text-secondary-color">Notícias GPE</a>
            </Link>
          </li>
          <li className="text-center border-b border-gray-700">
            <Link href="/contato" legacyBehavior>
              <a className="text-white block p-4 hover:text-secondary-color">Contato</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
