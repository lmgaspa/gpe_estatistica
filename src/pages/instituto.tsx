import Image from 'next/image';
import React from 'react';
import folder1 from '../../public/folder1.webp';

const InstitutoPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full bg-white rounded-lg shadow-md text-center">
        <Image
          src={folder1}
          className="w-full rounded-lg"
          alt="reunião de pessoas fazendo pesquisas"
        />
        <div className="mt-4">
          <h1 className="list-disc list-inside text-left mx-auto w-3/4 text-2xl font-bold text-blue-900 hover:text-blue-500 transition duration-300 cursor-default">ESCLARECIMENTO PÚBLICO</h1>
          <p className="mt-2 text-justify mx-auto w-3/4">
            O Instituto de Pesquisa GASPARETTO PESQUISAS E ESTATÍSTICAS LTDA (GPE-Bahia), associado ao CONRE 5 da Bahia, sob nº 106,
            esclarece que o escopo de suas atividades se restringe EXCLUSIVAMENTE à realização e registro, quando demandado, de pesquisas eleitorais.
            Esclarece, ainda, que o instituto, desde a sua fundação, não realiza consultoria, nem marketing, nem divulgação. É política do instituto o
            SIGILO dos dados e resultados das pesquisas, que pertencem exclusivamente aos contratantes.
          </p>
          <h2 className="list-disc text-blue-900 list-inside text-left mx-auto w-3/4 text-xl font-semibold mt-6">Sobre a empresa</h2>
          <h3 className="list-disc text-blue-900 list-inside text-left mx-auto w-3/4 text-lg font-semibold mt-4">Quem somos?</h3>
          <p className="list-disc list-inside text-left mx-auto w-3/4">
            Somos um instituto de mercado e de opinião, registrados no Conselho Regional de Estatística CONRE-5.
          </p>
          <h3 className="list-disc text-blue-900 list-inside text-left mx-auto w-3/4 text-lg font-semibold mt-4 pb-2">Missão</h3>
          <p className="text-justify mx-auto w-3/4">
            Realização de pesquisas de mercado e de opinião objetivando captar fidedignamente a realidade.
          </p>
          <h3 className="list-disc list-inside text-left mx-auto w-3/4 text-lg font-bold mt-4 pb-2 text-red-700">Política da GPE</h3>
          <p className="text-justify mx-auto w-3/4">
            O instituto de pesquisas de mercado e de opinião GPE, assim como a Sócio Estatística, desde 1990, vem mantendo os princípios a seguir:
          </p>
          <ul className="list-decimal list-inside text-left mx-auto w-3/4 mt-2">
            <li className='pb-2 font-bold text-red-700'>Realiza pesquisas de mercado e de opinião e mantém na pesquisa seu foco de atuação. Não realiza atividades de assessoria, atribuições e competências concernentes a outros profissionais, especialmente ligados a agências de propaganda e empresas de consultoria.</li>
            <li className='pb-2'>Não possui contratos de exclusividade. Contudo, caso a realização de uma pesquisa possa resultar em prejuízo a cliente regular, não atenderá a um segundo cliente, especialmente em períodos sensíveis, como os próximos de uma eleição, em se tratando de pesquisas político-eleitorais.</li>
            <li className='pb-2 font-bold text-red-700'>Não realiza divulgação de resultados de pesquisa, nem das registradas. A divulgação dos resultados é de responsabilidade única e exclusiva do contratante. O Instituto apenas respalda divulgações com o devido registro na Justiça Eleitoral.</li>
            <li className='pb-2'>Mantém o anonimato de todos os entrevistados. Nenhum dado é utilizado de forma individualizada, mas apenas de forma agregada.</li>
            <li className='pb-2'>Observa o código de ética das empresas de pesquisas de mercado (ESOMAR e ABEP) e não realiza perguntas que possam colocar em risco a integridade dos pesquisadores e dos entrevistados e/ou ofender valores do presente patamar civilizacional.</li>
            <li className='pb-2'>O compromisso do instituto foi e continua sendo, em primeiro lugar, captar a realidade.</li>
            <li className='pb-2 font-bold text-red-700'>No caso da pesquisa eleitoral registrada, observa e cumpre todas as exigências legais do TSE, aconselhando aos contratantes, que desejem divulgar os resultados, o devido respeito às normas eleitorais, em especial, a observância do prazo legal de cinco dias após o registro no Pesquele <a href="https://www.tse.jus.br/eleicoes/pesquisa-eleitorais/consulta-as-pesquisas-registradas" className="text-blue-500 underline">https://www.tse.jus.br/eleicoes/pesquisa-eleitorais/consulta-as-pesquisas-registradas</a>.</li>
          </ul>
          <h3 className="list-disc text-blue-900 list-inside text-left mx-auto w-3/4 text-lg font-semibold mt-4 pb-2">O que fazemos</h3>
          <p className="text-justify mx-auto w-3/4 pb-2">Veja aqui os tipos de pesquisa que realizamos:</p>
          <ul className="list-disc list-inside text-left mx-auto w-3/4">
            <li className='pb-2'>Levantamos a intenção de voto dos eleitores;</li>
            <li className='pb-2'>Avaliamos a imagem do candidato e monitoramos os índices de rejeição;</li>
            <li className='pb-2'>Avaliamos a consistência das intenções de voto;</li>
            <li className='pb-2'>Realizamos simulações de intenções e migração de voto em diversos cenários;</li>
            <li className='pb-2'>Analisamos a influência dos apoios na decisão de votar.</li>
          </ul>
          <h3 className="list-disc text-blue-900 list-inside text-left mx-auto w-3/4 text-lg font-semibold mt-4">Potencial de mercado</h3>
          <ul className="list-disc list-inside text-left mx-auto w-3/4 mt-2">
            <li className='pb-2'>Realizamos pesquisa de mercado nos segmentos econômicos em que a empresa atua;</li>
            <li className='pb-2'>Identificamos o perfil dos consumidores do produto ou marca.</li>
          </ul>
          <h3 className="list-disc text-blue-900 list-inside text-left mx-auto w-3/4 text-lg font-semibold mt-4">Avaliação de gestões e de serviços ao público</h3>
          <ul className="list-disc list-inside text-left mx-auto w-3/4 mt-2">
            <li className='pb-2'>Avaliamos a percepção da população concernente às gestões municipais e aos serviços prestados ao público;</li>
            <li className='pb-2'>Identificamos o grau de satisfação pelos serviços prestados.</li>
          </ul>
          <h3 className="list-disc text-blue-900 list-inside text-left mx-auto w-3/4 text-lg font-semibold mt-4">Utilização dos meios de comunicação</h3>
          <ul className="list-disc list-inside text-left mx-auto w-3/4 mt-2">
            <li className='pb-2'>Identificamos a audiência de rádio e televisão;</li>
            <li className='pb-2'>Identificamos as mídias mais acessadas das redes sociais.</li>
          </ul>
          <h3 className="list-disc text-blue-900 list-inside text-left mx-auto w-3/4 text-lg font-semibold mt-4">Avaliação da marca, produto e serviço</h3>
          <ul className="list-disc list-inside text-left mx-auto w-3/4 mt-2">
            <li className='pb-2'>Identificamos o grau de lembrança da marca produto e serviço;</li>
            <li className='pb-2'>Estimamos o valor de mercado de uma marca.</li>
          </ul>
          <h3 className="list-disc text-blue-900 list-inside text-left mx-auto w-3/4 text-lg font-semibold mt-4">Pesquisas customizadas</h3>
          <ul className="list-disc list-inside text-left mx-auto w-3/4 mt-2">
            <li className='pb-2'>Também fazemos pesquisas de acordo com necessidades específicas;</li>
            <li className='pb-2'>Identificamos os problemas via pesquisas de mercado e/ou de opinião.</li>
          </ul>
          <h3 className="list-disc text-blue-900 list-inside text-left mx-auto w-3/4 text-lg font-semibold mt-4">Pesquisas qualitativas</h3>
          <ul className="list-disc list-inside text-left mx-auto w-3/4 mt-2">
            <li>Realizamos pesquisas qualitativa de abordagem simplificada. Essas consistem em estudos em profundidade que buscam consensos e explicações para os problemas definidos.</li>
          </ul>
          <h2 className="list-disc text-blue-900 list-inside text-left mx-auto w-3/4 text-xl font-semibold mt-6 pb-2">Histórico</h2>
          <p className="text-justify mx-auto w-3/4">
            Da Sócio Estatística à GPE
            Começamos a realizar pesquisas de opinião, através da Sócio Estatística, em 1990. Em 1992, fomos o único instituto de pesquisa a prever o resultado eleitoral de Itabuna, cidade-sede, apontando a vitória de Geraldo Simões, do PT, para prefeito, quando os demais institutos apontavam ou Ubaldo Dantas, do PMDB, ou José Oduque Teixeira, então do PFL.
            Desde então, merecemos a confiança da comunidade regional, dos clientes e conquistamos novas regiões.
          </p>
          <p className="text-justify mx-auto w-3/4 mt-4">
            Em 2011 foi criado o Instituto Gasparetto Pesquisas e Estatísticas - GPE, inicialmente com sede em Salvador e, posteriormente, em Lauro de Freitas, com o objetivo de complementar a área de abrangência.
            Na eleição municipal de 2012, em Itabuna, fomos novamente o único instituto a prever a vitória de Vane, contra as candidaturas de Jussara Feitosa, do PT, e do então prefeito José Azevedo, do DEM. Blog Pimenta na Moqueca, dias antes daquela eleição, fez matéria apontando a existência de três resultados de pesquisas eleitorais registradas, mas discrepantes. (Link para o texto da “Região” de 2012).
            Em 2024, o Instituto GPE se separou legalmente da Sócio-Estatística, ficando essa responsável pela região polarizada por Itabuna e Ilhéus e, a GPE pelas outras regiões do estado.
          </p>
          <h2 className="list-disc text-blue-900 list-inside text-left mx-auto w-3/4 text-xl font-semibold mt-6 pb-2">Instituto associado</h2>
          <p className="text-justify mx-auto w-3/4">
            Sócio Estatística <br></br>
            Avenida Francisco Ribeiro Jr, 198 s 606 <br></br>
            Centro - Itabuna - BA <br></br>
            Tel: (73) 3212-1229 <br></br>
            email: sociop@gmail.com <br></br>
          </p>
        </div>
        <div className='pb-6'></div>
      </div>
    </div>
  );
};

export default InstitutoPage;