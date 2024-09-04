'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav className="bg-blue-900 p-2 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/logo.webp" alt="gpe_logo" width={100} height={100} />
            </Link>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                className="w-8 h-8 hover:text-yellow-300"
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
          <ul className="hidden lg:flex lg:space-x-1 lg:items-center">
            <li>
              <Link href="/" className="block p-4 lg:p-2 hover:text-yellow-300 text-center">
                Início
              </Link>
            </li>
            <li>
              <Link href="/instituto" className="block p-4 lg:p-2 hover:text-yellow-300 text-center">
                Sobre o instituto
              </Link>
            </li>
            <li>
              <Link href="/eleicoes" className="block p-4 lg:p-2 hover:text-yellow-300 text-center">
                Eleições 2024
              </Link>
            </li>
            <li>
              <Link href="/denuncie" className="block p-4 lg:p-2 hover:text-yellow-300 text-center">
                Denuncie pesquisas com irregularidades
              </Link>
            </li>
            <li>
              <Link href="/artigos" className="block p-4 lg:p-2 hover:text-yellow-300 text-center">
                Artigos
              </Link>
            </li>
            <li>
              <Link href="/contato" className="block p-4 lg:p-2 hover:text-yellow-300 text-center">
                Contato
              </Link>
            </li>
            <li>
              <Link href="/aplicativo" className="block p-4 lg:p-2 hover:text-yellow-300 text-center">
                Aplicativo da Gpe
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className={`${isOpen ? 'block' : 'hidden'} xl:hidden bg-blue-900 text-white`}>
        <ul className="space-y-1">
          <li className="text-center">
            <Link href="/" className="block p-1 hover:text-secondary-color" onClick={handleLinkClick}>
              Início
            </Link>
          </li>
          <li className="text-center">
            <Link href="/instituto" className="block p-1 hover:text-secondary-color" onClick={handleLinkClick}>
              Sobre o Instituto
            </Link>
          </li>
          <li className="text-center">
            <Link href="/eleicoes" className="block p-1 hover:text-secondary-color" onClick={handleLinkClick}>
              Eleições 2024
            </Link>
          </li>
          <li className="text-center">
            <Link href="/denuncie" className="block p-1 hover:text-secondary-color" onClick={handleLinkClick}>
              Denuncie pesquisas com irregularidades
            </Link>
          </li>
          <li className="text-center">
            <Link href="/artigos" className="block p-1 hover:text-secondary-color" onClick={handleLinkClick}>
              Artigos
            </Link>
          </li>
          <li className="text-center">
            <Link href="/contato" className="block p-1 hover:text-secondary-color" onClick={handleLinkClick}>
              Contato
            </Link>
          </li>
          <li className="text-center">
            <Link href="/aplicativo" className="block p-1 hover:text-secondary-color" onClick={handleLinkClick}>
              Aplicativo da GPE
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;