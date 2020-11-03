import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../icons/";

import { NavContainer } from "./styled";
import { MdList, MdReplay, MdShoppingCart } from "react-icons/md";
import { BiStats } from "react-icons/bi";
import { Shopping } from "../../context";

const Navigation = () => {
  const { cart } = useContext(Shopping);
  return (
    <NavContainer>
      <div className="nav-item logo">
        <Logo />
      </div>
      <div className="nav-item screens">
        <Link to={"/"} className="nav-links">
          <MdList size="1.5em" className="screen-item" />
        </Link>
        <Link to={"/history"} className="nav-links">
          <MdReplay size="1.5em" className="screen-item" />
        </Link>
        <Link to={"/statistics"} className="nav-links">
          <BiStats size="1.5em" className="screen-item" />
        </Link>
      </div>
      <div className="nav-item cart">
        <div>
          <MdShoppingCart size="1.5em" />
        </div>
        <span className="cart-badge">{cart.length}</span>
      </div>
    </NavContainer>
  );
};

export default Navigation;
