import styled from "styled-components";
import bcg from "../../../../assets/food-background.jpg";

export const StyledYourRecipeHeader = styled.header`
  position: relative;
  height: 250px;
  margin-bottom: 20px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${bcg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 75%;
    filter: blur(3px);
    z-index: 1;
  }

  & .innerContent {
    color: white;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 50;
  }

  & h2 {
    font-size: 4rem;
    font-weight: 500;
  }

  & p {
    font-size: 3rem;
  }
`;

export const StyledYourRecipeItem = styled.div`
  display: grid;
  grid-template-columns: 208px 1fr;
  gap: 20px;
  margin-bottom: 30px;
  border: 3px solid ${(props) => props.theme.mainGreen};
`;

export const StyledYourRecipeImage = styled.div`
  width: 208px;
  height: 154px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-right: 3px solid ${(props) => props.theme.mainGreen};
`;

export const StyledYourRecipeDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px 5px 5px 0;
`;

export const StyledYourRecipeButtons = styled.div`
  align-self: flex-end;
  justify-self: flex-end;
`;
