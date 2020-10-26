import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 965px;
  padding: 5px;

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
  .cart span {
    display: grid;
    place-items: center;
    width: 42px;
    height: 42px;
    border-radius: 20px;

    background: ${({ theme }) => theme.colors.primary};
  }
`;
