import React from "react";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FcFaq } from "react-icons/fc";
import { SiBloglovin } from "react-icons/si";
import BtnPrimary from "../../components/BtnPrimary";

const Help = () => {
  return (
    <div className="p-3 md:p-20 text-text1">
      <h1 className="text-xl font-bold md:text-3xl md:font-bold mb-5 text-text1">
        Need Help?
      </h1>
      <div className="text-xl md:text-3xl flex flex-col items-center md:flex-row justify-between gap-10 mx-5 my-20 text-center md:text-start">
        <div>
          <BsFillChatDotsFill className="bg-tableHeader p-6 mx-auto rounded-full w-20 h-20 mb-5" />
          <p>Chat support</p>
        </div>
        <div>
          <FcFaq className="bg-tableHeader p-6 mx-auto rounded-full w-20 h-20 mb-5" />
          <p>FAQ</p>
        </div>
        <div>
          <SiBloglovin className="bg-tableHeader p-6 mx-auto rounded-full w-20 h-20 mb-5" />
          <p>Blog</p>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold md:text-3xl md:font-bold mb-5 text-text1">
          Start earning today
        </h2>
        <BtnPrimary label={"Join us now"} />
      </div>
    </div>
  );
};

export default Help;
