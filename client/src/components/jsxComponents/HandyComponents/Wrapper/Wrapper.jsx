import React from 'react';
import { WrapperStyle} from '../../../styledComponents/HandyComponents/HandyComponents.jsx';

const Wrapper = (props) => {

    return (
        <WrapperStyle>
            {props.children}
        </WrapperStyle>
    );
}

export default Wrapper;
