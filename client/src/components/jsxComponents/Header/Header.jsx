import React from "react";
import {
  CakeLayout,
  Row,
} from "../../styledComponents/HandyComponents/HandyComponents";
import { HeaderStyle } from "../../styledComponents/Header/HeaderStyles";
import Wrapper from "../HandyComponents/Wrapper/Wrapper";
import Navigation from "./Navigation/Navigation";

const Header = (props) => {
  return (
    <HeaderStyle>
      <Wrapper>
        <CakeLayout>
          <Row>
            <Navigation {...props}/>
          </Row>
        </CakeLayout>
      </Wrapper>
    </HeaderStyle>
  );
};

export default Header;
