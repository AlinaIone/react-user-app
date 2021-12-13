import styled from "styled-components";

export const User = styled.div`
  width: calc(100% / 5);
  height: 30px;
  padding: 15px;
  margin-bottom: 10px;

  border: 2px solid #370617;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 3%;

  background-color: #6f1d1b;
  color: gray;

  &:hover {
    animation-name: oneshine;
    animation-duration: 1s;

    @keyframes oneshine {
      0% {
        transform: scale(1);
        background-color: none;
        border: 2px solid #370617;
      }
      50% {
        transform: scale(1.1);
        border: 2px outset grey;
        border-radius: 5%;
        background-color: #370617;
      }
    }

    & button {
      visibility: visible;

      animation-name: oneshinebutton;
      animation-duration: 1s;

      @keyframes oneshinebutton {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);

          border-radius: 5%;
          background-color: #370617;
          color: white;
        }
      }
    }
  }

  @media (min-width: 2000px) {
    width: calc(100% / 7);
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 90%;
    font-size: 1.5rem;
  }
`;

// Styling the remove button inside the user element
export const RemoveButton = styled.button`
  width: 35px;
  height: 35px;
 border: none;

  border-radius: 50%;

  visibility: hidden;
 
  font-size: 1rem;

  background-color: #6f1d1b;
  color:gray;

  &:hover {
    visibility: visible;
    color: white;
  }

  @media (min-width: 2000px) {
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    
    }
  }
`;
