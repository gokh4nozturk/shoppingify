import styled from "styled-components";

export const Container = styled.div`
  z-index: 20;
  position: absolute;
  width: 32rem;
  height: 13.75em;
  left: 560px;
  top: 380px;

  padding: 0 2em;

  background: #ffffff;
  border-radius: 24px;

  grid-template-columns: 1em 1fr 1fr;
`;

export const CloseBtn = styled.button`
  grid-column: 1/2;
  border: none;
  color: #828282;
  margin: 0.5em;
  background: none;
`;

export const Title = styled.p`
  grid-column: 2/3;
  width: 100%;

  font-weight: 500;
  color: #34333a;

  font-size: ${({ theme }) => theme.fontSizes.xLarge};
`;

export const BtnContainer = styled.div`
  grid-column: 3/4;
  width: 100%;
  display: inline-flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const CancelBtn = styled.button`
  background: none;
  border: none;
  font-weight: bold;
  color: #34333a;
  padding: 1em 1.5em;
  margin-right: 0.1em;
`;

export const YesBtn = styled.button`
  background: #eb5757;
  color: white;
  border: none;
  font-weight: bold;
  padding: 1em 1.5em;
  margin-left: 0.1em;

  font-size: ${({ theme }) => theme.fontSizes.primary};
  border-radius: ${({ theme }) => theme.radius.secondary};
`;
