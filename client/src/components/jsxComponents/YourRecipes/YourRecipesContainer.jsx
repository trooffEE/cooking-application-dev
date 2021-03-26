import React from 'react';
import YourRecipes from './YourRecipes';

// stateful comp
const YourRecipesContainer = (props) => {
    return (
        <YourRecipes {...props}/>
    );
}

export default YourRecipesContainer;
