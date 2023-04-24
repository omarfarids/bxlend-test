import React from "react";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-blue text-white py-14 px-3">
      <div className="flex flex-col gap-5 justify-evenly md:flex-row">
        <div className="md:w-96">
          <img src={logo} alt="page logo" className="w-40 ml-2 xs:py-2" />
          <p>
            Find the right Investment for you. Choose from many currancies,
            rates, and Cryptos. Join millions of Cryptos investors from around
            the world already investing on Bxlend. Lifetime Access.
          </p>
        </div>
        <div className="justify-evenly flex flex-col">
          {[
            "Bxlend Business",
            "Get the app",
            "Need help",
            "About us",
            "Contact us",
          ].map((link, index) => {
            return (
              <a
                className="hover:text-perfCrimson hover:underline"
                key={index}
                href="/"
              >
                {link}
              </a>
            );
          })}
        </div>
        <div className="justify-evenly flex flex-col">
          {[
            "Careers",
            "Blog",
            "Help and Support",
            "Affiliate",
            "Investors",
          ].map((link, index) => {
            return (
              <a
                className="hover:text-perfCrimson hover:underline"
                key={index}
                href="/"
              >
                {link}
              </a>
            );
          })}
        </div>
        <div className="flex flex-col gap-1">
          <AiFillFacebook className="cursor-pointer" />
          <AiOutlineTwitter className="cursor-pointer" />
          <AiFillYoutube className="cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
