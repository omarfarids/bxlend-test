import React from "react";
import portofolio1 from "../../assets/portfolio-1.png";
import portofolio2 from "../../assets/portfolio-2.png";
import portofolio3 from "../../assets/portfolio-3.png";
import BtnPrimary from "../../components/BtnPrimary";

const Portfolio = () => {
  return (
    <div className="text-text1 p-3 md:p-20">
      <div>
        <h1 className="text-xl font-bold md:text-3xl md:font-bold mb-2 text-text1">
          Build your own crypto portfolio
        </h1>
        <p>Start your first trade with these easy steps.</p>
      </div>
      <div className="my-10 md:my-20">
        <div className="text-lg font-bold md:text-2xl md:font-bold md:flex flex-row justify-start gap-10 items-center">
          <p className="text-4xl">1.</p>
          <div>
            <h2>Verify your identity.</h2>
            <p className="text-sm font-normal md:font-normal">
              Complete the identity verification process to secure your account
              and transactions.
            </p>
          </div>
          <img
            src={portofolio1}
            alt="portofolio1"
            className="w-44 mx-auto md:mx-0"
          />
        </div>
        <div className="text-lg font-bold md:text-2xl md:font-bold md:flex flex-row justify-start gap-10 items-center">
          <p className="text-4xl">2.</p>
          <div>
            <h2>Fund your account.</h2>
            <p className="text-sm font-normal md:font-normal">
              Add funds to your crypto account to start trading crypto. You can
              add funds with a variety of payment methods.
            </p>
          </div>
          <img src={portofolio2} alt="portofolio2" className="w-44 mx-auto" />
        </div>
        <div className="text-lg font-bold md:text-2xl md:font-bold md:flex flex-row justify-start gap-10 items-center">
          <p className="text-4xl">3.</p>
          <div>
            <h2>Start trading</h2>
            <p className="text-sm font-normal md:font-normal">
              You’re good to go! Buy/sell crypto, set up your account and
              discover what BxLend has to offer.
            </p>
          </div>
          <img
            src={portofolio3}
            alt="portofolio3"
            className="w-44 mx-auto md:mx-0"
          />
        </div>
      </div>
      <BtnPrimary label={"Get Started"} />
    </div>
  );
};

export default Portfolio;
