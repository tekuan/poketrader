import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-intems: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CenterBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-self: center;
  justify-content: center;
  width: 70%;
  height: 30rem;

  img {
    width: 100px;
  }
`;

export const ButtonBtm = styled.button`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  position: relative;
  width: 50rem;
  border: 0;
  background-color: transparent;
  margin-top: 7.5rem;
  button {
    width: 8rem;
    height: 4rem;
    background-color: #fbd743;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
  }
  div {
    display: flex;
    align-itens: center;
    justify-content: center;
    width: 8rem;
    height: 4rem;
    border: 1px solid #262626;
    border-radius: 10px;
  }
`;
