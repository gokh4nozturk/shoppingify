import styled from "styled-components";

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-top: 2em;
`;

export const Title = styled.div`
  margin: 2em 0;
`;

export const SubTitle = styled.p`
  color: #34333a;

  font-size: ${({ theme }) => theme.fontSizes.xLarge};
`;

export const PName = styled.p`
  grid-column: 1/2;
  padding: 0 0.3em;
`;

export const PPieces = styled.p`
  grid-column: 2/3;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary};
`;
