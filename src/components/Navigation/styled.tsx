import styled from "styled-components";

export const NavContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  height: 100%;
  width: 100%;

  .nav-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .screens {
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;

    .screen-item {
    }
  }
  .cart div {
    display: inline-grid;
    place-items: center;
    width: 42px;
    height: 42px;
    border-radius: 20px;

    background: ${({ theme }) => theme.colors.primary};
  }
  .nav-links {
    text-decoration: none;
    color: #454545;
  }

  .cart {
    position: relative;
  }

  .cart-badge {
    display: inline-grid;
    place-items: center;
    position: absolute;
    width: 19px;
    height: 18px;
    color: #fff;
    border-radius: 5px;
    left: 46px;
    top: 0;

    background: ${({ theme }) => theme.colors.red};
  }
`;
