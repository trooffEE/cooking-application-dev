import styled from "styled-components";

export const StyledInputContainerSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 30px;

  & > div {
    width: 100%;
  }

  & input {
    font-family: "Hind", sans-serif;
    width: 100%;
    border: 3px solid ${(props) => props.theme.mainGreen};
    border-radius: 5px;
    font-size: 1.4rem;
    padding: 10px 5px 5px 5px;
  }
`;

export const StyledButton = styled.button.attrs((props) => ({
  type: props.submit === false ? "button" : "submit",
  disabled: props.disabled,
}))`
  background-color: ${({ theme }) => theme.mainGreen};
  border: none;
  color: white;
  font-family: "Hind", sans-serif;
  font-size: 1.2rem;
  border-radius: 5px;
  padding: ${({ padding }) => {
    if (!padding) return;

    return padding.map((pad) => pad + "px").join(" ");
  }};

  &:hover {
    cursor: pointer;
  }
`;

export const StyledForm = styled.div`
  form {
    margin-top: 50px;
    padding: 0;
    display: grid;
    gap: 20px;
    max-width: 350px;
  }

  & textarea {
    width: 100%;
    height: 200px;
    resize: none;
    border: 3px solid ${(props) => props.theme.mainGreen};
    font-family: "Hind", sans-serif;
    letter-spacing: 1px;
    padding: 7px 5px;
  }

  & p.warning {
    color: #b53636;
  }

  & input {
    font-size: 1.5rem;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid ${(props) => props.theme.mainGreen};
    font-family: "Hind", sans-serif;
    outline: none;
  }
  
  & a {
    font-style: italic;
    text-decoration: underline;
  }

  & h1 {
    margin: 0;
  }

  & input::selection {
    color: white;
    background-color: ${(props) => props.theme.mainGreen};
  }

  & label {
    display: flex;
    flex-direction: column;
  }
`;
