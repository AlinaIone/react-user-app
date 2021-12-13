import styled from "styled-components";

export const Input = styled.input`
  margin: 10px;
  padding: 15px;
  width: 170px;
  height: 30px;

  display: inline-block;

  background-color: #370617;
  color: lightgrey;
  font-size: 1rem;

  &:focus {
    background-color: #03071e;
    color: lightgrey;
  }

  @media (min-width: 2000px) {
    width: 200px;
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    width: 80%;
    height: 30px;
    font-size: 1.3rem;
    position: sticky;
    top: 10px;
  }
`;
