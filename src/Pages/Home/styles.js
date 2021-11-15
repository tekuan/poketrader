import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-intems: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-intems: center;
`;
export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 134, 255, 0.5);
  align-self: flex-start;
  align-intems: center;
  align-content: center;
  width: 10rem;
  height: 100%;
  position: absolute;
  div {
    display: flex;
    flex-direction: column;
    align-self: center;
    position: relative;
    top: 8%;
  }
`;
export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 26, 26, 0.5);
  align-self: flex-end;
  width: 10rem;
  height: 100%;
  position: absolute;
  top: 0;

  div {
    display: flex;
    flex-direction: column;
    align-self: center;
    position: relative;
    top: 8%;
  }
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

export const ButtonBtm = styled.button`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  position: relative;
  width: 50rem;
  border: 0;
  background-color: white;
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
