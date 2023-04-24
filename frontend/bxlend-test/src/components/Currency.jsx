import React from "react";

const Currency = (props) => {
  const formatNumber = (number) => {
    let x = number.slice(0, number.length - 1);
    x = Number(x);
    return x.toLocaleString("en-US");
  };

  return (
    <tr className="text-center font-semibold text-text1">
      <td className="flex flex-row gap-3 py-3 items-center">
        <img
          className="w-6"
          src={require(`../assets/${props.symbol}.png`)}
          alt="currency"
        />
        <p>{props.name}</p>
        <p className="opacity-70 text-sm">{props.symbol}</p>
      </td>
      <td>${formatNumber(props.price + "M")}</td>
      <td
        className={
          props["24h_change"].startsWith("-") ? "text-red" : "text-green"
        }
      >
        {props["24h_change"]}
      </td>
      <td>${formatNumber(props.market_cap)}M</td>
    </tr>
  );
};

export default Currency;
