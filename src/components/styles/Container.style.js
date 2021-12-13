import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  margin: 0;

  display: flex;

  background-color: #9d0208;
  color: grey;

  @media (max-width: 480px) {
    display: inline;
  }
`;

export const UsersContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 10px 0;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-grow: 1;
  align-content: flex-start;

  position: relative;

  background-color: #9d0208;

  @media (max-width: 480px) {
    width: 100%;
    flex-flow: column;
    align-items: center;
  }
`;

export const InputContainer = styled.div`
  box-sizing: border-box;
  margin: 0;

  height: auto;

  display: flex;
  justify-content: space-around;

  position: relative;

  background-color: #6a040f;

  @media (max-width: 480px) {
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    z-index: 1;
    padding: 0;
  }
`;

export const BarContainer = styled.div`
  width: 3px;
  background-color: black;

  @media (max-width: 480px) {
    display: none;
  }
`;
