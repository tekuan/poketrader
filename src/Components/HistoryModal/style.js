import styled from "styled-components";

export const Modal = styled.div`
  background-color: #dcdcdc;
  width: 50rem;
  border-radius: 1rem;
  color: black;
  align-self: center;
  justify-content: center;
  box-shadow: 0 0 1em #000;
  position: absolute;
  z-index: 1;
  top: 5rem;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
  }
  button {
    background-color: transparent;
    border: none;
  }
  button:hover {
    color: #fbd743;
  }
`;
