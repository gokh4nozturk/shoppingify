import styled from "styled-components";

export const CartAddItem = styled.div`
  grid-row: 1/2;
  display: inline-grid;
  grid-template-columns: 120px 1fr;
  place-items: center;
  position: relative;
  background: #80485b;
  height: 130px;
  width: 300px;
  margin: 40px;

  border-radius: ${({ theme }) => theme.radius.primary};

  .add-item-space {
    grid: 1/2;
  }

  .add-item-logo {
    position: absolute;
    bottom: 3px;
    left: 0px;
  }

  .add-item-btn-p {
    grid: 2/3;

    .p-add-item {
      color: #fff;
    }

    .btn-add-item {
      height: 2rem;
      width: 6rem;
      border-radius: 12px;
      border: 0px;
      background: #fff;

      border-radius: ${({ theme }) => theme.radius.secondary};
      font-size: ${({ theme }) => theme.fontSizes.small};
    }

    .btn-add-item:hover {
      cursor: pointer;
    }
  }
`;

export const AddItemContainer = styled.div`
  display: inline-grid;
  grid-template-rows: 3rem 3rem 1fr;
  height: 100%;
  width: 100%;
`;

export const TitleAddItem = styled.div`
  grid-row: 2/3;
  display: inline-flex;
  align-items: flex-start;
  width: 9em;
  height: 100%;

  margin: 0 2.2rem;
  text-align: left;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.xLarge};
`;

export const FormContainer = styled.form`
  grid-row: 3/4;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  box-sizing: border-box;

  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const InputContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 3em;
`;

export const InputElement = styled.input`
  height: 4rem;
  width: 20rem;
  border: 2px solid #bdbdbd;
  color: #bdbdbd;
  margin-top: 1em;

  border-radius: ${({ theme }) => theme.radius.secondary};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const InputElementArea = styled.textarea`
  width: 20rem;
  border: 2px solid #bdbdbd;
  color: #bdbdbd;
  margin-top: 1em;
  padding: 1.5em 0;
  min-height: 4rem;
  max-height: 220px;
  resize: vertical;

  border-radius: ${({ theme }) => theme.radius.secondary};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const DatalistCategories = styled.datalist`
  height: 4rem;
  width: 20rem;
  border: 2px solid #bdbdbd;
  margin-top: 1em;

  border-radius: ${({ theme }) => theme.radius.secondary};
  font-size: ${({ theme }) => theme.fontSizes.large};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const OptionCategories = styled.option`
  padding: 10px 15px;
  margin: 0;
  background: #fff;

  border-radius: ${({ theme }) => theme.radius.secondary};
`;

export const BtnContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-top: 4em;

  .buttons {
    height: 61px;
    width: 88px;
    border: 0;

    font-weight: 700;
  }
  .buttons:hover {
    cursor: pointer;
    font-size: 18px;
    transition-delay: 15ms;
  }

  .btn-cancel {
    color: #34333a;
    background: none;
    text-align: left;
    margin-right: 0.2em;
  }

  .btn-save {
    color: #fff;
    background: #f9a109;
    margin-left: 0.2em;

    border-radius: ${({ theme }) => theme.radius.secondary};
  }
`;
