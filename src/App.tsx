import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

import Offers from "./components/offers/Offers";
import About from "./components/about.tsx/About";
import Catalogo from "./components/catalogo/Catalogo";
import { SucursalSelector } from "./components/sucursales/SucursalSelector";
import { Events } from "./components/events/Events"; 

import Contacto from "./components/contacto/Contacto";
import Footer from "./components/footer/Footer";
import WhatsAppButton from "./components/btn-wsp/wsp";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
    
      <WhatsAppButton/>
      <Navbar /> {/*Listo y responsivo 768*/}
      <Hero />
      <Offers/>
      <Catalogo/>

      <Events/>
      <About/>   {/*aca se tiene que colocar una foto de la botilleria*/}
      <SucursalSelector/>
      <Contacto/>
      <Footer/>
    </>
    
  );
};

export default App;

{/*
  el orden de las pantallas es:
  - Navbar            X
  - Hero              X
  - Offers            X
  - Catalogo          X
  - Events            X
  - About             X
  - ProductoCard      X
  - Carrito
  - sucursalCard      X se tiene que hablar
  - Constacto         X
  - footer
  **/}