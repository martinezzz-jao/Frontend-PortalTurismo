import React from "react";
import ContactForm from "../components/contactForm";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import bg from "../assets/imagens/estatua.png";


const AboutPage = () => {
  return (
    <div>
      <Navbar/>
    <div
    className="flex flex-col min-h-screen relative h-[500px] bg-cover bg-center"
    style={{backgroundImage: `url(${bg})`}}
    >  

    <div className="max-w-4xl mx-auto my-12 px-6 bg-white rounded-2xl mt-70 text-cyan-900 font-sans">
      <h1 className="text-center mb-6 font-bold text-4xl">Sobre o Mundo Afora</h1>

      <p className="mb-5 text-lg leading-relaxed">
        O{" "}
        <span className="text-cyan-700 font-semibold">
          Mundo Afora
        </span>{" "}
        nasceu da paixão por explorar novos destinos e descobrir as maravilhas que nosso planeta tem a oferecer. Somos um portal dedicado a inspirar viajantes a embarcarem em aventuras inesquecíveis, compartilhando dicas, roteiros personalizados e histórias reais.
      </p>

      <p className="mb-5 text-lg leading-relaxed">
        Acreditamos que viajar transforma pessoas — abre a mente, enriquece o espírito e cria memórias que duram para sempre. Por isso, nosso compromisso é ajudar você a planejar cada etapa da sua jornada, seja uma escapada rápida ou uma viagem dos sonhos.
      </p>

      <p className="mb-5 text-lg leading-relaxed">
        Nossa equipe é formada por apaixonados por viagens, fotografia e cultura, que visitam lugares ao redor do mundo para trazer conteúdo exclusivo e confiável. Estamos aqui para facilitar suas descobertas, para que cada experiência seja autêntica e cheia de significado.
      </p>

      <p className="mb-5 text-lg leading-relaxed">
        Vamos juntos desbravar o mundo? Prepare a mala e venha com a gente explorar o desconhecido!
      </p>

      <div className="italic text-center mt-10 text-xl text-cyan-900">
        "Viajar é a única coisa que você compra e que te deixa mais rico."
      </div>
    </div>
    </div>
      <Footer/>
    </div>
  );
};

export default AboutPage;
