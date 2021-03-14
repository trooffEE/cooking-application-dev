import React from 'react';
import Image from '../../HandyComponents/Image/Image';
import image from './hand-whisk.png'
import {CenterText} from "../../../styledComponents/HandyComponents/HandyComponents";

const RecipesBriefInfo = () => {
    return (
        <CenterText>
            <h1>On this page you can find recipes and add em to your collection from external API</h1>
            <Image image={image} size={150} acc={"hand whisk"} />
            <p>To try basic functionality simply use search section bellow or add item in the list</p>
        </CenterText>
    );
}

export default RecipesBriefInfo;
