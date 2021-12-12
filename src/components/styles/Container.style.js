import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0;
  background-color: blue;
`;

export const UsersContainer = styled.div`
  width: calc(100% / 4);
  padding: 10px 0;

  position: relative;
  background-color: yellow;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-grow: 1;
  align-content: flex-start;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  background-color: green;
`;

export const BarContainer = styled.div`
  width: 3px;
  background-color: black;
`;
