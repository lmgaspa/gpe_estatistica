import React from 'react';

const EleicoesPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-xl md:text-2xl font-bold mb-4 text-blue-900 hover:text-blue-500 transition duration-300 cursor-default">Eleições Municipais 2024</h1>
      <p className="text-sm md:text-base text-center">
        Os registros das pesquisas realizadas pelo Instituto GPE Bahia podem ser encontrados no link abaixo <br></br>
        <a href="https://www.tse.jus.br/eleicoes/pesquisa-eleitorais/consulta-as-pesquisas-registradas" className="text-blue-500 underline ml-1">
          https://www.tse.jus.br/eleicoes/pesquisa-eleitorais/consulta-as-pesquisas-registradas
        </a>
      </p>
      <p className="text-sm md:text-base mt-4">Basta preencher os campos:</p>
      <table className="w-full md:w-5/6 mt-4 border border-gray-300 text-xs md:text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-2 md:px-4 py-2">Eleição:</th>
            <th className="border border-gray-300 px-2 md:px-4 py-2">Empresa:</th>
            <th className="border border-gray-300 px-2 md:px-4 py-2">UF:</th>
            <th className="border border-gray-300 px-2 md:px-4 py-2">Município:</th>
            <th className="hidden lg:block border border-gray-300 px-2 md:px-4 py-2">Número de identificação:</th>
            <th className="hidden lg:block border border-gray-300 px-2 md:px-4 py-2">Período de registro:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Eleições Municipais 2024</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">GASPARETTO PESQUISAS E ESTATISTICAS LTDA / INSTITUTO GASPARETTO DE PESQUISAS</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">BA</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">opcional</td>
            <td className="hidden lg:block border border-gray-300 px-2 md:px-4 py-2">opcional</td>
            <td className="hidden lg:block border border-gray-300 px-2 md:px-4 py-2">opcional</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-lg text-blue-900 md:text-xl font-semibold mt-6 pb-2">Veja as pesquisas registradas pela GPE</h2>
      <p>Eleições municípais registradas em 2024</p>
      <table className="w-full md:w-5/6 mt-4 border border-gray-300 text-xs md:text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-2 md:px-4 py-2">ID</th>
            <th className="hidden lg:block border border-gray-300 px-2 md:px-4 py-2">Eleição</th>
            <th className="border border-gray-300 px-2 md:px-4 py-2">Empresa</th>
            <th className="border border-gray-300 px-2 md:px-4 py-2">Data de Registro</th>
            <th className="border border-gray-300 px-2 md:px-4 py-2">UF / Município</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-2 md:px-4 py-2">BA-09005/2024</td>
            <td className="hidden lg:block border border-gray-300 px-2 md:px-4 py-2">Eleições Municipais 2024</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">GASPARETTO PESQUISAS E ESTATISTICAS LTDA / INSTITUTO GASPARETTO DE PESQUISAS</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">15/07/2024</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">BA / SEABRA</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 md:px-4 py-2">BA-05989/2024</td>
            <td className="hidden lg:block border border-gray-300 px-2 md:px-4 py-2">Eleições Municipais 2024</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">GASPARETTO PESQUISAS E ESTATISTICAS LTDA / INSTITUTO GASPARETTO DE PESQUISAS</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">15/07/2024</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">BA / ANDORINHA</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 md:px-4 py-2">BA-07148/2024</td>
            <td className="hidden lg:block border border-gray-300 px-2 md:px-4 py-2">Eleições Municipais 2024</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">GASPARETTO PESQUISAS E ESTATISTICAS LTDA / INSTITUTO GASPARETTO DE PESQUISAS</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">11/07/2024</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">BA / CARAVELAS</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 md:px-4 py-2">BA-04126/2024</td>
            <td className="hidden lg:block border border-gray-300 px-2 md:px-4 py-2">Eleições Municipais 2024</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">GASPARETTO PESQUISAS E ESTATISTICAS LTDA / INSTITUTO GASPARETTO DE PESQUISAS</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">13/06/2024</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">BA / PORTO SEGURO</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 md:px-4 py-2">BA-03798/2024</td>
            <td className="hidden lg:block border border-gray-300 px-2 md:px-4 py-2">Eleições Municipais 2024</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">GASPARETTO PESQUISAS E ESTATISTICAS LTDA / INSTITUTO GASPARETTO DE PESQUISAS</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">06/06/2024</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">BA / EUNÁPOLIS</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EleicoesPage;