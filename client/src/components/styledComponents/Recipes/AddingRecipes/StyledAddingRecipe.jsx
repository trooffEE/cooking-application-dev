import styled from "styled-components";

export const StyledAddingNewRecipe = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  & form {
  }

  & input {
    border: none;
    background-color: transparent;
    border-bottom: 2px solid ${(props) => props.theme.mainGreen};
    font-family: "Hind", sans-serif;
    outline: none;
  }

  & button {
    margin-top: 20px;
  }

  & label,
  & input,
  & h3 {
    font-size: 1.5rem;
  }

  & label,
  & h3 {
    font-weight: 400;
  }

  & .innerContent {
    margin-top: 20px;
  }

  & textarea {
    width: 100%;
    height: 500px;
    resize: none;
    border: 3px solid ${(props) => props.theme.mainGreen};
    font-family: "Hind", sans-serif;
    letter-spacing: 1px;
    padding: 7px 5px;
  }
`;
