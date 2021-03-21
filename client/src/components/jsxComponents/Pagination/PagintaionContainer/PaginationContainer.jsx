import React from 'react';
import {  useSelector } from 'react-redux';
import {PaginationStyle} from '../../../styledComponents/Pagination/Pagination';
import Pagination from '../Pagination';

const PaginationContainer = () => {
    const currentPage = useSelector(state => state.recipeReducer.currentPageExternalRecipes);
    const maxRecipes = useSelector(state => state.recipeReducer.maxRecipes);
    const recipesOnPageLimit = useSelector(state => state.recipeReducer.recipesOnPageLimit);
    
    return (
        <PaginationStyle>
            <Pagination currentPage={currentPage} maxRecipes={maxRecipes} recipesOnPageLimit={recipesOnPageLimit} />
        </PaginationStyle>
    );
}

export default PaginationContainer;
