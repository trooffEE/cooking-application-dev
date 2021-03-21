import styled from "styled-components";

export const PaginationStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const PaginationItem = styled.li`
  min-width: 15px;
  display: flex;
  justify-content: center;
  line-height: 1.3;
  align-items: center;
  font-size: 1.5rem;
  margin: 0 10px;
  padding: 0 2px;
  cursor: pointer;
`;

export const PaginationItemActive = styled(PaginationItem)`
  background-color: ${(props) => props.theme.mainGreen};
  color: white;
  border-radius: 2px;
`;
