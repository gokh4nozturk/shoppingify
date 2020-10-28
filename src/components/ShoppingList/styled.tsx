import styled from "styled-components";

export const SLContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;
  height: 978px;
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-rows: 295px 1fr 130px;
  background: #fff0de;
  height: 100%;
`;

export const ListAddItem = styled.div`
  grid-row: 1/2;
  display: grid;
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
  }
`;

export const ListNoItems = styled.div`
  grid-row: 2/3;
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin: 40px;
  margin-bottom: 0;

  .no-items-p {
    grid: 1/2;
    display: grid;
    place-items: center;
  }

  .no-items-logo {
    grid: 2/3;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 0;
    margin: 0;
  }
`;

export const ListSave = styled.div`
  grid-row: 3/4;
  display: grid;
  place-items: center;
  width: 100%;
  height: 130px;
  background: #fff;

  .save-container {
    display: flex;
    justify-content: center;
    width: 310px;
    height: 64px;
    border: 2px solid #c1c1c4;
    box-sizing: border-box;
    border-radius: ${({ theme }) => theme.radius.secondary};
  }

  .text-box-list {
    display: flex;
    width: 220px;
    height: 60px;
    border: 0;
    color: #bdbdbd;
    box-sizing: border-box;

    font-size: ${({ theme }) => theme.fontSizes.medium};
    border-radius: ${({ theme }) => theme.radius.secondary};
  }

  .btn-save-list {
    height: 35px;
    border: 0;
    width: 90px;
    height: 60px;
    color: #fff;
    box-sizing: border-box;
    background: #c1c1c4;

    border-radius: ${({ theme }) => theme.radius.secondary};
  }
`;

export const AddItemContainer = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr 190px 130px;
  height: 100%;

  .add-item-title {
    grid-row: 1/2;
    margin: 35px;
    text-align: left;
    font-weight: 500;
    font-size: 24px;
  }

  .add-item-form {
    grid-row: 2/3;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    font-weight: 500;
    box-sizing: border-box;

    font-size: ${({ theme }) => theme.fontSizes.medium};
  }

  .add-item-form input {
    height: 61.25px;
    width: 309.88665771484375px;
    border: 2px solid #bdbdbd;
    color: #bdbdbd;

    border-radius: ${({ theme }) => theme.radius.secondary};
  }

  .add-item-form input:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }

  .dropdown-categories {
    grid-row: 3/4;
    width: 82%;
    height: 90%;
    margin: 0 35px;
    border: 1px solid #e0e0e0;
    box-shadow: 0px 2px 12px 0px #000000 4%;
    box-sizing: border-box;
    padding: 10px 5px;
    overflow-y: auto;
    color: #828282;
    background: #fff;

    font-size: ${({ theme }) => theme.fontSizes.large};
    border-radius: ${({ theme }) => theme.radius.secondary};
  }

  .dropdown-categories p {
    padding: 10px 15px;
    margin: 0;

    border-radius: ${({ theme }) => theme.radius.secondary};
  }

  .dropdown-categories p:hover {
    background: #f2f2f2;
    color: #000;
    cursor: pointer;
  }

  .add-item-btn-container {
    grid-row: 4/5;
    display: flex;
    justify-content: center;
    align-items: center;

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
  }
`;
