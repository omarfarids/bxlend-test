import React from "react";
import BtnPrimary from "../../components/BtnPrimary";

const Stats = () => {
  return (
    <div className="p-3 md:p-20 text-text1">
      <h1 className="text-xl font-bold md:text-3xl md:font-bold mb-5 text-text1">
        BxLend is a crypto exchange for everyone.
      </h1>
      <div className="flex flex-col items-center md:flex-row justify-between gap-10 mx-5 my-20 text-center md:text-start">
        <div>
          <h2 className="text-4xl font-semibold mb-2">1M+</h2>
          <p className="text-xl font-semibold">Verified users</p>
        </div>
        <div>
          <h2 className="text-4xl font-semibold mb-2">99+</h2>
          <p className="text-xl font-semibold">Countries supported</p>
        </div>
        <div>
          <h2 className="text-4xl font-semibold mb-2">$99B+</h2>
          <p className="text-xl font-semibold">Quarterly trading volume</p>
        </div>
      </div>
      <BtnPrimary label={"Join us now"} />
    </div>
  );
};

export default Stats;
