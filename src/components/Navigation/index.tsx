import React from "react";
import { Logo } from "../icons/";

import { NavContainer } from "./styled";

const Navigation = () => {
  return (
    <NavContainer>
      <div className="nav-item">
        <Logo />
      </div>
      <div className="nav-item"></div>
      <div className="nav-item"></div>
    </NavContainer>
  );
};

export default Navigation;
