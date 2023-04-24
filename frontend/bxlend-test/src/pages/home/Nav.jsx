import React, { useState } from "react";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
import { IoMdNotifications } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="relative flex flex-row justify-between bg-blue text-white h-16 py-4 xs:py-0">
      <img src={logo} alt="page logo" className="w-40 ml-2 xs:py-2" />
      <button onClick={() => setIsActive(!isActive)} className="xs:hidden mr-2">
        <GiHamburgerMenu />
      </button>
      <div
        className={`absolute flex flex-col-reverse xs:flex-row ${
          isActive ? "h-48 overflow-visible" : "h-0 overflow-hidden"
        } xs:relative xs:mt-0 w-full xs:h-16 transition-all bg-blue mt-10`}
      >
        <ul className="flex flex-col xs:flex-row">
          {["Market", "Trade", "Dashboard"].map((item, i) => {
            return (
              <li
                className="cursor-pointer hover:bg-lightBlue p-3 xs:px-5 xs:flex xs:justify-center xs:items-center"
                key={i}
              >
                {item}
              </li>
            );
          })}
        </ul>
        <div className="flex flex-row w-full justify-between items-center">
          <ul className="flex flex-row">
            {["Wallet", "Orders"].map((item, i) => {
              return (
                <li
                  className="cursor-pointer hover:bg-lightBlue p-3 xs:p-5 xs:h-full"
                  key={i}
                >
                  {item}
                </li>
              );
            })}
          </ul>
          <div className="flex flex-row items-center gap-3">
            <IoMdNotifications className="text-xl" />
            <img src={avatar} alt="avatar" className="w-10 h-10" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
