import React from 'react';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 p-6 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <p className='hover:text-yellow-300 cursor-default'>&copy; {new Date().getFullYear()} GPE Estatística. Todos os direitos reservados.</p>
        <div className="flex flex-col sm:flex-row mt-4 space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="mailto:gpebahia@gmail.com" className="flex items-center space-x-2 hover:text-yellow-300">
            <FaEnvelope />
            <span>gpebahia@gmail.com</span>
          </a>
          <a href="https://wa.me/5571991974445" className="flex items-center space-x-2 hover:text-yellow-300">
            <FaWhatsapp />
            <span>(71) 99197-4445</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
