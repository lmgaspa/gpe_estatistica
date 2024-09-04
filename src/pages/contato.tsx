"use client"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Image from 'next/image';

const ContatoPage: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
  
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.title,
      message: form.message,
    };
  
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Mensagem enviada com sucesso!');
    }, (error) => {
      console.log('FAILED...', error);
      alert('Falha ao enviar a mensagem. Tente novamente mais tarde.');
    });
  }; 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  return (
    <div id="contato" className="flex flex-col sm:flex-row">
      <div className="flex-1 relative hidden lg:block">
      <Image 
        src="/contato.webp" 
        alt="contato" 
        fill 
        className="object-cover"
      />
        <div className="absolute bottom-0 right-0 p-2 bg-black bg-opacity-50 text-white text-xs opacity-0 hover:opacity-100 transition-opacity duration-300">
          <a href="https://br.freepik.com/fotos-gratis/mulher-no-escritorio_6901060.htm#fromView=search&page=1&position=41&uuid=2b260e53-79aa-462b-94c0-8f220842a840" target="_blank" rel="noopener noreferrer">
            Imagem de Racool_studio no Freepik
          </a>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center bg-blue-900 p-8">
        <form className="w-full bg-white p-4 rounded shadow-md" onSubmit={sendEmail}>
          <h2 className="text-3xl text-blue-900 font-bold mb-4 text-center">PRONTO PARA SOLICITAR UM ORÇAMENTO?</h2>
          <p className="text-center font-bold mb-6">PREENCHA O FORMULÁRIO E ENTRAREMOS EM CONTATO.</p>
          <div className="mb-4">
            <label className="block text-black text-md font-bold mb-2" htmlFor="name">
              Nome*
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Seu nome"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-md font-bold mb-2" htmlFor="email">
              E-mail*
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Seu e-mail"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-md font-bold mb-2" htmlFor="title">
              Título*
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Título"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-black text-md font-bold mb-2" htmlFor="message">
              Sua Mensagem*
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows={8}
              placeholder="Escreva sua mensagem aqui..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-900 transition duration-300" type="submit">
              ENVIAR MENSAGEM
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContatoPage;