import React, { useContext, memo } from "react";
import TableHeader from "../../components/TableHeader";
import { AppContext } from "../../context/context";
import Currency from "../../components/Currency";

const PopularCrypto = () => {
  const { currencies } = useContext(AppContext);

  return (
    <div className="p-3 md:p-20 text-text1">
      <h1 className="text-xl font-bold md:text-3xl md:font-bold mb-5 text-text1">
        Popular Cryptocurrencies
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full table-fixed">
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            {currencies?.map((currency, i) => {
              return <Currency {...currency} key={i} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default memo(PopularCrypto);
