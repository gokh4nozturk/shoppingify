import styled from "styled-components";
export const SearchBoxWrapper = styled.div`
  grid-column: 2/3;
  display: flex;
  justify-content: center;
  align-items: center;

  .search-box {
    transform: translate(-50% -50%);
    background: #e84118;
    height: 40px;
    border-radius: 40px;
    padding: 10px;
  }

  .search-box:hover > .search-txt {
    width: 240px;
    padding: 0 6px;
  }

  .search-box:hover > .search-btn {
    background-color: black;
  }

  .search-btn {
    color: #273746;
    float: right;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #e84118;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 21px;
    transition: 0.4s;
  }

  .search-txt {
    border: none;
    background: none;
    outline: none;
    padding: 0;
    float: left;
    color: white;
    text-transform: uppercase;
    font-size: 15px;
    transition: 0.6s;
    line-height: 40px;
    width: 0;
  }
`;

export const Search = styled.input``;
