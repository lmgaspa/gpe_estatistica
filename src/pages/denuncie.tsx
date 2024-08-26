"use client"
import React from 'react';

const DenunciePage: React.FC = () => {
  const handleButtonClick = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSdotvzbk9kKBvTAQIc-JRTNqnD9ToslAyJCpaezfxyo7rUYog/viewform?usp=sf_link',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 text-center text-black min-h-screen">
      <h1 className="text-2xl font-bold mb-4 hover:text-blue-500 transition duration-300 cursor-default">
        Denuncie a circulação de Pesquisas FALSAS e divulgadas sem registro!
      </h1>
      <p className="">
        Ajude a combater a divulgação de <span className="font-bold">FAKE NEWS </span> 
        e a combater <span className="font-bold">divulgações sem registro!</span>
      </p>
      <p className="mt-4 ">
        Se você tomar conhecimento de alguma pesquisa sendo atribuída à GPE nos avise por aqui:
      </p>
      <button
        onClick={handleButtonClick}
        className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-900 transition duration-300"
      >
        Clique aqui para nos avisar
      </button>
      <div className="mt-8  max-w-4xl mx-auto text-left">
        <h2 className="text-xl font-bold mb-2 hover:text-blue-500 transition duration-300 cursor-default">Nota de Esclarecimento - Ibicoara</h2>
        <p className="mb-4">
          O Instituto Gasparetto de Pesquisas comunica que não tem nenhuma pesquisa registrada
          concernente ao processo eleitoral do município de Ibicoara, e de nenhum outro município até a presente data,
          <span className='font-bold'> e que somente respalda divulgação de quaisquer pesquisas</span>,
          única e exclusivamente, <span className='font-bold'>após o devido registro na Justiça Eleitoral.</span>
          Nesse sentido, quaisquer resultados eleitorais atribuídos ao Instituto, em qualquer município,
          <span className='font-bold'> sem o devido registro na Justiça Eleitoral, não têm autorização e não avalizamos.</span>
        </p>
        <p className="mb-4">
          Atenciosamente,
        </p>
        <p className="mb-4">
          Agenor Gasparetto<br />
          Sociólogo / GPE Pesquisas
        </p>
        <p className="mb-4">
          Itabuna, 24 de abril de 2024
        </p>

        <h2 className="text-xl font-bold mb-2 mt-8 hover:text-blue-500 transition duration-300 cursor-default">Nota de Esclarecimento - Pesquisa em Guaratinga</h2>
        <p className="mb-4">
          O Instituto Gasparetto de Pesquisas comunica que não tem nenhuma pesquisa registrada concernente ao
          processo eleitoral do município de Guaratinga, e de nenhum outro município até a presente data,
          <span className='font-bold'> e que somente respalda divulgação</span> de qualquer pesquisa única e exclusivamente
          <span className='font-bold'> após o devido registro na Justiça Eleitoral.</span>
        </p>
        <p className="mb-4 font-bold">
          Além disso, informa que a pesquisa que circula nas redes sociais não é do Instituto.
        </p>
        <p className="mb-4">
          Agenor Gasparetto<br />
          Sociólogo / GPE Pesquisas
        </p>
        <p>
          Itabuna, 25 de março de 2024
        </p>
      </div>
    </div>
  );
};

export default DenunciePage;