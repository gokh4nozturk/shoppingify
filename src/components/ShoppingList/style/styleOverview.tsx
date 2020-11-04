import styled from "styled-components";

export const OverviewContainer = styled.div`
  display: grid;
  grid-template-rows: 3rem 1fr 5rem;
  grid-gap: 2rem;
  height: 100%;
  width: 100%;
  background: white;
  padding: 0 3em;
`;

export const BtnBack = styled.div`
  grid-row: 1/2;
  display: inline-flex;
  align-items: flex-end;
`;

export const BackButton = styled.button`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  width: 5rem;

  color: ${({ theme }) => theme.colors.primary};
`;

export const OverviewMain = styled.div`
  grid-row: 2/3;
  font-weight: 500;

  .product-labels {
    padding: 0;
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export const ProductImageContainer = styled.div`
  width: 100%;
  height: 15rem;
  margin-bottom: 3em;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  border-radius: ${({ theme }) => theme.radius.primary};
`;

export const ProductNameContainer = styled.div`
  margin-bottom: 3em;
`;

export const ProductName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xLarge};
`;

export const ProductCategoryContainer = styled.div`
  margin-bottom: 3em;
`;

export const ProductCategory = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

export const ProductNoteContainer = styled.div`
  height: 12em;
  margin-bottom: 3em;
`;

export const ProductNote = styled.p`
  height: 100%;
  overflow-y: auto;
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

export const BtnContainer = styled.div`
  grid-row: 3/4;
  display: inline-flex;
  align-items: flex-start;
  justify-content: center;
`;

export const DeleteButton = styled.button`
  display: inline-grid;
  place-items: center;
  background: none;
  border: none;
  width: 7rem;
  color: #000;
  font-weight: bold;
  height: 4rem;
  margin-right: 0.5em;
`;
export const AddToCartButton = styled.button`
  display: inline-grid;
  place-items: center;
  border: none;
  width: 7rem;
  color: #fff;
  font-weight: bold;
  height: 4rem;
  margin-left: 0.5em;

  border-radius: ${({ theme }) => theme.radius.secondary};
  background: ${({ theme }) => theme.colors.primary};
`;
