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
    background-color: #dcdcdc;
    width: 10rem;
    height: 10rem;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 1em #000;
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
    position: relative;
  }
  p {
    margin: 0;
    text-align: center;
    top: 2rem;
    position: relative;
  }
`;
