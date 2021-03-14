import React from "react";
import {
  CakeLayout,
  Row,
} from "../../styledComponents/HandyComponents/HandyComponents";
import { HeaderStyle } from "../../styledComponents/Header/HeaderStyles";
import Wrapper from "../HandyComponents/Wrapper/Wrapper";
import Navigation from "./Navigation/Navigation";

const Header = () => {
  return (
    <HeaderStyle>
      <Wrapper>
        <CakeLayout>
          <Row>
            <Navigation />
          </Row>
        </CakeLayout>
      </Wrapper>
    </HeaderStyle>
  );
};

export default Header;
