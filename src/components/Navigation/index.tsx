import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../icons";

import { MdList, MdReplay, MdShoppingCart } from "react-icons/md";
import { BiStats } from "react-icons/bi";
import { Shopping } from "../../context";
import { NavContainer } from "./styled";

const Navigation = () => {
  const { cart } = useContext(Shopping);
  return (
    <NavContainer>
      <div className="nav-item logo">
        <Logo />
      </div>
      <div className="nav-item screens">
        <Link to={"/"} className="nav-links">
          <div className="tooltip">
            <MdList size="1.5em" className="screen-item" />
            <span className="tooltiptext">items</span>
          </div>
        </Link>
        <Link to={"/history"} className="nav-links">
          <div className="tooltip">
            <MdReplay size="1.5em" className="screen-item" />
            <span className="tooltiptext">history</span>
          </div>
        </Link>
        <Link to={"/statistics"} className="nav-links">
          <div className="tooltip">
            <BiStats size="1.5em" className="screen-item" />
            <span className="tooltiptext">statistics</span>
          </div>
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
