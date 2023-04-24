import React from "react";

const BtnPrimary = ({ label }) => {
  return (
    <div className="btn-primary flex justify-center items-center font-bold rounded-full md:w-40 py-2 w-full cursor-pointer hover:shadow-lg">
      {label}
    </div>
  );
};

export default BtnPrimary;
