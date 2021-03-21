import React from 'react';
import {  useDispatch } from 'react-redux';
import { setCurrentPage } from '../../../redux/actionCreators/recipesExternalActionCreators';
import { PaginationItem, PaginationItemActive, PaginationStyle } from '../../styledComponents/Pagination/Pagination';


const Pagination = ({currentPage, maxRecipes, recipesOnPageLimit}) => {
    const dispatch = useDispatch();

    const createPagination = () => {
        let pagesAmount = Math.floor(maxRecipes / recipesOnPageLimit);
        let pages = [], maxPaginationToShow = 3;

        for (let i = 1; i <= pagesAmount; i++) {
            pages.push(i);
        }
    
        pages = pages.filter(page => {
            if (Math.abs(page - currentPage) < maxPaginationToShow) {
                return page;
            }
        }).map((page, index) => {
            return currentPage === page ? 
                    <PaginationItemActive key={index}>{page}</PaginationItemActive>
                    : <PaginationItem key={index}
                        onClick={() => {
                            dispatch(setCurrentPage(page));
                        }}>{page}</PaginationItem>
        });

        return pages;
    };
    
    return (
        <PaginationStyle>
            {createPagination()}
        </PaginationStyle>
    );
}

export default Pagination;
