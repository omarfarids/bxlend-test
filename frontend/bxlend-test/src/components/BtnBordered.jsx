import React from "react";

const BtnBordered = ({ label }) => {
  return (
    <div className="flex justify-center items-center font-bold rounded-full md:w-40 py-2 border-2 border-black w-full cursor-pointer hover:shadow-lg">
      {label}
    </div>
  );
};

export default BtnBordered;
