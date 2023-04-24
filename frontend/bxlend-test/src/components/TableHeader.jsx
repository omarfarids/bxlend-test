import React from "react";

const TableHeader = () => {
  return (
    <tr className=" text-fontGray bg-tableHeader font-medium">
      <th className="w-32 sm:w-auto rounded-s-lg py-3">Name</th>
      <th className="w-32 sm:w-auto">Price</th>
      <th className="w-32 sm:w-auto">24h change</th>
      <th className="w-32 sm:w-auto rounded-e-lg">Market Cap</th>
    </tr>
  );
};

export default TableHeader;
