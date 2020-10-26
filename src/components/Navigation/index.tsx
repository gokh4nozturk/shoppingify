import React from "react";
import { Logo } from "../icons/";

import { NavContainer } from "./styled";
import { MdList, MdReplay, MdShoppingCart } from "react-icons/md";
import { BiStats } from "react-icons/bi";

const Navigation = () => {
  return (
    <NavContainer>
      <div className="nav-item logo">
        <Logo />
      </div>
      <div className="nav-item screens">
        <MdList size="1.5em" className="screen-item" />
        <MdReplay size="1.5em" className="screen-item" />
        <BiStats size="1.5em" className="screen-item" />
      </div>
      <div className="nav-item cart">
        <span>
          <MdShoppingCart size="1.5em" />
        </span>
      </div>
    </NavContainer>
  );
};

export default Navigation;
