import styled from "styled-components";

export const RecipesStyles = styled.div`
  & h1 {
    font-size: 2.5rem;
    margin: 50px 0 20px 0;
}
& p {
    font-size: 1.2rem;
    margin: 20px 0;
  }

  & .fallback-message {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    line-height: 1.5;
  }

  & .fallback-query {
    color: white;
    background-color: ${props => props.theme.mainGreen};
    border-radius: 10px;
    display: inline-block;
  }
`;
