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
  grid-template-rows: 60px 1fr;
  height: 100%;
`;

export const TitleAddItem = styled.div`
  grid-row: 1/2;
  margin: 35px;
  text-align: left;
  font-weight: 500;
  font-size: 24px;
`;

export const FormContainer = styled.form`
  grid-row: 2/3;
  margin-top: 50px;
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
  margin-bottom: 4em;
`;

export const InputElement = styled.input`
  height: 61.25px;
  width: 309.88665771484375px;
  border: 2px solid #bdbdbd;
  color: #bdbdbd;
  margin-top: 1em;

  border-radius: ${({ theme }) => theme.radius.secondary};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SelectCategories = styled.select`
  height: 61.25px;
  width: 309.88665771484375px;
  border: 2px solid #bdbdbd;
  margin-top: 1em;

  border-radius: ${({ theme }) => theme.radius.secondary};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  font-size: ${({ theme }) => theme.fontSizes.large};
`;

export const OptionCategories = styled.option`
  padding: 10px 15px;
  margin: 0;

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
  }

  .btn-save {
    color: #fff;
    background: #f9a109;

    border-radius: ${({ theme }) => theme.radius.secondary};
  }
`;
