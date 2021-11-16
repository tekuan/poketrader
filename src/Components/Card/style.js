import styled from "styled-components";

export const PokeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  width: 10rem;
  margin: 0.5rem;
  div {
    display: flex;
    flex-direction: row;
    border-radius: 100%;
    background-color: #fff;
    width: 10rem;
    height: 10rem;
    align-items: center;
    justify-content: space-between;
    box-shadow: inset 0 0 1em #000;
  }
  div:hover {
    background-color: rgba(251, 215, 67, 0.5);
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
  }
  span {
    display: flex;
    align-self: center;
    top: 0;
    box-shadow: inset 0 0 1em #fbd743;
    border-radius: 0.1rem;
  }
`;
