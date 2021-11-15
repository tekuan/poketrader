import styled from "styled-components";

export const PokeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  width: 150px;
  padding: 10px;
  div {
    display: flex;
    flex-direction: row;
    width: 20px;
    border-radius: 100%;
    background-color: #fff;
    width: 150px;
    height: 150px;
    align-items: center;
    justify-content: space-between;
    box-shadow: inset 0 0 1em #000;
  }
  div:hover {
    background-color: rgba(251, 215, 67, 0.5);
  }
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  span {
    display: flex;
    align-self: center;
    top: 0;
  }
`;
