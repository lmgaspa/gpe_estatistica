import React from 'react';
import Image from 'next/image';
import appImageWebP from '../../public/app.webp';
import googlePlayBadgeWebP from '../../public/googlebadge.webp';

const AplicativoPage: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row mx-auto w-full lg:w-5/6 items-center justify-center p-4 lg:p-6">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full lg:ml-12 pb-12 mb-12">
        <div className="flex-1 lg:w-1/2 text-center lg:text-left p-4 lg:ml-12 lg:pl-12">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-blue-900 hover:text-blue-500 transition duration-300 cursor-default">Fazer entrevista nunca foi tão fácil</h1>
          <p className="text-base lg:text-lg mb-6">
            Tudo que você precisa para fazer entrevista agora na palma da sua mão.
            Disponível gratuitamente no Google Play. Experimente!
          </p>
          <div className="flex justify-center lg:justify-start">
            <a href="https://play.google.com/store/apps/details?id=br.com.gpebahia&hl=en&gl=US&pli=1" target="_blank" rel="noopener noreferrer">
              <Image src={googlePlayBadgeWebP} alt="Disponível no Google Play" className="w-32 lg:w-48" />
            </a>
          </div>
        </div>
        <div className="flex-1 lg:w-1/2 flex justify-center p-4 lg:mr-12 lg:pr-12">
          <Image src={appImageWebP} alt="App Image" className="w-full max-w-sm scale-125" />
        </div>
      </div>
    </div>
  );
};

export default AplicativoPage;
