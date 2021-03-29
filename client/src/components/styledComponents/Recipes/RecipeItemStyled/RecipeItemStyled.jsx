import styled from "styled-components";

export const RecipeItemStyled = styled.figure`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.mainGreen};
  border-radius: 6px;
`;

export const RecipeItemCaption = styled.figcaption`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  font-size: 1.1rem;
  padding: 5px 5px 5px 5px;
  min-height: 50px;
`;

export const RecipeItemButton = styled.button`
    transition: width ease-in-out 250ms, background-color ease-in-out 150ms;
    position: absolute;
    width: 0;
    bottom: 0;
    right: 0;
    border: none;
    background-color:  ${(props) => props.theme.mainGreen};
    color: white;
    font-family: "Hind", sans-serif;
    font-weight: lighter;
    letter-spacing: 1px;
    padding: 5px 15px;
    font-size: 1.3rem;
    // make it invisible
    visibility: hidden;
    overflow-x: hidden;

    &:active {
        background-color: white;
        color: ${props => props.theme.mainGreen};
    }

    &.visible {
        visibility: visible;
        width: 100%;
    }

    &.anim {
        animation: buttonAnim 300ms ease-in-out;
    }

    &:hover {
        cursor: pointer;
    }

    @keyframes buttonAnim {
        0% {
            width: 100%;
            right: 0;
            visibility: visible;
        }
        100% {
            width: 0;
            right: 0;
            visibility: hidden;
            color: transparent;
        }
    }
`;
