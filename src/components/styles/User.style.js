import styled from "styled-components";

export const User = styled.div`
  width: 200px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border: 2px solid black;
  border-radius: 3%;
  background-color: rgb(239, 239, 245);

  padding: 15px;
  margin-bottom: 10px;

  &:hover {
    animation-name: oneshine;
    animation-duration: 1s;

    @keyframes oneshine {
      0% {
        transform: scale(1);
        background-color: none;
        border: 2px solid black;
      }
      50% {
        transform: scale(1.1);
        border: 2px outset grey;
        border-radius: 5%;
        background-color: blue;
      }
    }

    & button {
      visibility: visible;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const RemoveButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  visibility: hidden;
  border: none;
  font-size: 1rem;
`;
