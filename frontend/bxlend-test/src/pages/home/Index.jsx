import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import PopularCrypto from "./PopularCrypto";
import Portfolio from "./Portfolio";
import Stats from "./Stats";
import Help from "./Help";
import Footer from "./Footer";
import Popup from "../../components/Popup";

const Index = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-0">
      <Nav />
      <Popup />
      <Header />
      <PopularCrypto />
      <Portfolio />
      <Stats />
      <Help />
      <Footer />
    </div>
  );
};

export default Index;
