import styled from "styled-components";

export const SLContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff0de;
  width: 390px;
  height: 978px;
`;

export const AddItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: #fff0de;
  padding: 20px;
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
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
  display: flex;
  justify-content: center;
  background: #fff;
  width: 100%;
  height: 100%;
`;
