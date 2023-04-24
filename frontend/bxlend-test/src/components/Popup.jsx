import React, { useContext, useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { AppContext } from "../context/context";

const Popup = () => {
  const { isLogin } = useContext(AppContext);

  return (
    <div
      className={`flex ${
        !isLogin ? "invisible" : ""
      } flex-row gap-2 mx-auto mt-5 bg-white items-center top-50 left-50 w-60 p-4 border shadow-xl rounded-lg border-b-4 border-b-green`}
    >
      <BsCheck2Circle className="text-3xl text-green" />
      <p className="text-text1 font-semibold">Logged in successfully!</p>
    </div>
  );
};

export default Popup;
