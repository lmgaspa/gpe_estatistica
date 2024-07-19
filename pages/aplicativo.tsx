import React from 'react';
import Image from 'next/image';
import appImage from '../public/app.png';
import googlePlayBadge from '../public/googlebadge.png';

const AplicativoPage: React.FC = () => {
  return (
    <div className="flex flex-col col:flex-row mx-auto w-full col:w-5/6 items-center justify-center p-4 col:p-6">
      <div className="flex items-center justify-center col:justify-between w-full">
        <div className="flex-1 col:w-1/2 text-center col:text-left p-4 col:pl-12">
          <h1 className="text-2xl col:text-4xl font-bold mb-4">Fazer entrevista nunca foi tão fácil</h1>
          <p className="text-base col:text-lg mb-6">
            Tudo que você precisa para fazer entrevista agora na palma da sua mão.
            Disponível gratuitamente no Google Play. Experimente!
          </p>
          <div className="flex justify-center col:justify-start">
            <a href="https://play.google.com/store/apps/details?id=br.com.gpebahia&hl=en&gl=US&pli=1" target="_blank" rel="noopener noreferrer">
              <Image src={googlePlayBadge} alt="Disponível no Google Play" className="w-32 col:w-48 lg:w-60" />
            </a>
          </div>
        </div>
        <div className="flex-1 col:w-1/2 flex justify-center p-4 col:pr-12">
          <Image src={appImage} alt="App Image" className="w-full h-auto col:scale-125 col:scale-100 lg:scale-75 xl:scale-75" />
        </div>
      </div>
    </div>
  );
};

export default AplicativoPage;

