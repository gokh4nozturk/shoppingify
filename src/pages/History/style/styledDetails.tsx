import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1em 1fr 3em 1fr;
  grid-gap: 1em;
  margin-top: 2em;

  .btn-back {
    grid-row: 1/2;
  }
`;

export const Title = styled.div`
  grid-row: 2/3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2em 0;

  .complete-state {
    grid-column: 1/2;
    width: fit-content;
  }
  .sub-title-date {
    grid-column: 1/2;
    display: inline-flex;
    justify-content: flex-start;
    margin: 1em 0;
  }
`;

export const SubTitle = styled.p`
  grid-column: 1/2;
  color: #34333a;

  font-size: ${({ theme }) => theme.fontSizes.xLarge};
`;

export const CompleteContainer = styled.div`
  grid-column: 2/3;
  display: inline-flex;
  justify-content: flex-end;
  width: 100%;
  padding: 0.5em 1em;
`;

export const CompleteCancelBtn = styled.button`
  margin-right: 0.1em;
  border: 1px solid #eb5757;
  background: #fff;
  padding: 0.2em 0.4em;

  border-radius: ${({ theme }) => theme.radius.secondary};
`;

export const CompleteBtn = styled.button`
  margin-left: 0.1em;
  border: none;
  background: #56ccf2;
  color: #fff;
  padding: 0.2em 0.4em;

  border-radius: ${({ theme }) => theme.radius.secondary};
`;

export const CompleteDeleteBtn = styled.button`
  margin-right: 0.1em;

  border: none;
  background: none;
  padding: 0.2em 0.4em;
  color: #eb5757;
`;

export const ProductsCategories = styled.div`
  grid-row: 3/4;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
  border-radius: 2em;
`;

export const ProductsCategory = styled.div`
  padding: 0.5em 1em;
  border-radius: 12px;
  &:hover {
    cursor: pointer;
    background: #c1c1c4;
  }
`;

export const ProductsView = styled.div`
  grid-row: 4/5;
  display: inline-grid;
  grid-gap: 1.2rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  height: 5em;
`;

export const ContainerProduct = styled.div`
  display: inline-grid;
  grid-template-columns: minmax(120px, 30%) 1fr;
  align-items: center;
  width: 100%;
  height: 4rem;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
`;

export const PName = styled.p`
  grid-column: 1/2;
  padding: 0 0.5em;
`;

export const PPieces = styled.p`
  grid-column: 2/3;
  display: inline-flex;
  justify-content: flex-end;
  padding: 0.5em;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary};
`;
export const Transparent = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.75);
  filter: blur(2px);
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
