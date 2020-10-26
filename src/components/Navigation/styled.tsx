import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 965px;
  padding: 5px;
  background: #000;

  .nav-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .screens {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;

    .screen-item {
    }
  }
  .cart div {
    display: grid;
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
    display: grid;
    place-items: center;
    position: absolute;
    width: 19px;
    height: 18px;
    color: #fff;
    border-radius: 5px;
    left: 28px;
    top: 0;

    background: ${({ theme }) => theme.colors.red};
  }
`;
