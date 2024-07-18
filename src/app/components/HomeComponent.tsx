import React from 'react';

const HomeComponent: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo ao GPE Estatística</h1>
      <p className="mb-4">
        A GPE Estatística é uma empresa dedicada a fornecer análises detalhadas e insights sobre as eleições de 2024. Nosso objetivo é fornecer informações precisas e atualizadas para ajudar você a tomar decisões informadas.
      </p>
      <p className="mb-4">
        Navegue pelo nosso site para saber mais sobre nossa empresa, ler as últimas notícias sobre as eleições, e entrar em contato conosco para mais informações.
      </p>
    </div>
  );
};

export default HomeComponent;