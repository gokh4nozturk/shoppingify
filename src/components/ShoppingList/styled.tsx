import styled from "styled-components";

export const SLContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;
  height: 978px;
`;

export const AddItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-rows: 295px 1fr 130px;
  background: #fff0de;
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
