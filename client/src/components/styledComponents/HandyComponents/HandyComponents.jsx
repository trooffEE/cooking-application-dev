import styled from "styled-components";

export const WrapperStyle = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;

  & main {
    min-height: calc(100vh - 50px);
  }
`;

export const AppStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f5e7d0;
  font-family: "Hind", sans-serif;
  letter-spacing: 1px;
`;

export const CakeLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  width: 100%;
`;

export const Columns = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  ${(props) =>
    props.amount
      ? `grid-template-columns: repeat(${props.amount}, 1fr);`
      : `grid-template-columns: ${props.template
          .map((item) => item + "fr")
          .join(" ")};`}
  gap: ${(props) => props.gap}px;
`;

export const ColumnItem = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const CenterText = styled.div`
  text-align: center;
`;

export const StyledImage = styled.img.attrs((props) => ({
  src: props.image,
  alt: props.acc || "placeholder",
}))`
  width: ${(props) => props.size || props.width}px;
  height: ${(props) => props.size || props.height}px;
  max-width: 100%;
`;

export const Grid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 20px;
    margin: 40px 0;
    padding: 0px 20px;
`
