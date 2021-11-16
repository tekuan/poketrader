import styled from "styled-components";

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 134, 255, 0.5);
  align-self: flex-start;
  align-items: center;
  align-content: center;
  width: 12rem;
  height: 45rem;
  position: absolute;
  top: 3.6rem;
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  div:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 26, 26, 0.5);
  align-self: flex-end;
  align-items: center;
  align-content: center;
  width: 12rem;
  height: 45rem;
  position: absolute;
  top: 3.6rem;
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  div:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
