import styled from "styled-components";

export const HeaderStyle = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: white;
  background-color: #83b551;
`;

export const NavigationStyles = styled.div`
  text-align: center;
  height: 100%;

  & a {
    text-align: center;
    font-size: 1.3rem;
    padding: 0 1.2rem;
  }

  &:last-child {
    display: flex;
    justify-content: flex-end;
    text-align: right;
  }

  & a span {
    position: relative;
  }

  & a span::before {
    content: "";
    transition: all 250ms ease-in-out;
    position: absolute;
    bottom: 2px;
    left: 50%;
    width: 0;
    height: 2px;
    border-radius: 2px;
    background-color: white;
  }

  & a:hover span::before {
    width: 100%;
    left: 0;
  }
`;
