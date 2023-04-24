import React from "react";
import bitcoinImg from "../../assets/jumbotron-img.png";
import bitcoinSM from "../../assets/jumbotron-img-cropped.png";
import BtnPrimary from "../../components/BtnPrimary";
import BtnBordered from "../../components/BtnBordered";

const Header = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center p-3 md:p-0">
      <div className="md:px-44 lg:px-56">
        <p className="text-2xl md:text-5xl font-bold text-blue py-3 md:py-10 lg:py-10">
          Buy and exchange cryptocurrency instantly.
        </p>
        <div className="flex flex-col md:flex-row md:justify-start gap-4">
          <BtnPrimary label={"Get Started"} />
          <BtnBordered label={"How it works?"} />
        </div>
      </div>
      <img src={bitcoinImg} alt="bitcoin" className="md:hidden" />
      <img src={bitcoinSM} alt="bitcoin" className="hidden md:block w-96" />
    </div>
  );
};

export default Header;
