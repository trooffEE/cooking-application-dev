import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../../redux/actionCreators/recipesExternalActionCreators";
import {
  PaginationItem,
  PaginationItemActive,
  PaginationStyle,
} from "../../styledComponents/Pagination/Pagination";

const Pagination = ({ currentPage, maxRecipes, recipesOnPageLimit }) => {
  const dispatch = useDispatch();
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    setEmpty(false);
  }, [maxRecipes, recipesOnPageLimit]);

  const createPagination = () => {
    let pagesAmount = Math.floor(maxRecipes / recipesOnPageLimit);

    if (pagesAmount < 1) {
      setEmpty(true);
      return;
    }

    let pages = [],
      maxPaginationToShow = 3;

    for (let i = 1; i <= pagesAmount; i++) {
      pages.push(i);
    }

    pages = pages
      .filter((page) => {
        if (Math.abs(page - currentPage) < maxPaginationToShow) return page;
      })
      .map((page, index) => {
        return currentPage === page ? (
          <PaginationItemActive key={index}>{page}</PaginationItemActive>
        ) : (
          <PaginationItem
            key={index}
            onClick={() => {
              dispatch(setCurrentPage(page));
            }}
          >
            {page}
          </PaginationItem>
        );
      });

    return pages;
  };

  return (
    <>
      {!empty ? (
        <PaginationStyle>
          <PaginationItem onClick={() => dispatch(setCurrentPage(1))}>
            &#11013;
          </PaginationItem>
          {createPagination()}
          <PaginationItem
            onClick={() =>
              dispatch(
                setCurrentPage(Math.floor(maxRecipes / recipesOnPageLimit))
              )
            }
          >
            &#10145;
          </PaginationItem>
        </PaginationStyle>
      ) :  null}
    </>
  );
};

export default Pagination;
