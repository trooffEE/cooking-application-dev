import styled from "styled-components";

export const StyledInputContainerSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 30px;

  & form {
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
  type: "submit",
}))`
  background-color: ${(props) => props.theme.mainGreen};
  border: none;
  color: white;
  font-family: "Hind", sans-serif;
  font-size: 1.2rem;
  border-radius: 5px;
`;
