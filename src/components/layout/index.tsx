import React from "react";
import styled from "styled-components";

import Navigation from "../../components/Navigation";
import ShoppingList from "../../components/ShoppingList";
import { Container } from "./styled";

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <Container>
      <div className="part-nav home-item">
        <Navigation />
      </div>
      <div className="part-products home-item">{children}</div>
      <div className="part-shopping-list home-item">
        <ShoppingList />
      </div>
    </Container>
  );
};

export default Layout;

// interface Props {
//   onClick: () => {};
// }

// const Button: React.FC<StyleProps & Props> = ({
//   children,
//   onClick,
//   type = "Default",
//   ...styleProps
// }) => {
//   return (
//     <ButtonStyled {...styleProps} type={Sizes.big} onClick={onClick}>
//       {children}
//     </ButtonStyled>
//   );
// };

// type Size = "small" | "big";

// type Type = "Warning" | "Error" | "Success" | "Default";

// interface StyleProps {
//   size: Size;
//   type?: Type;
// }

// const Sizes = {
//   small: "8px",
//   big: "16px",
// };

// const ButtonStyled = styled.button<StyleProps>`
//   padding: ${({ size, theme }) => theme.button[size]};
// `;
