import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Offers from "./components/offers/Offers";
import About from "./components/about.tsx/About";
import { Events } from "./components/events/Events"; 
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Navbar /> {/*Listo y responsivo 768*/}
      <Hero />
      <Offers/>
      <About/>
      <Events/>
    </>
  );
};

export default App;