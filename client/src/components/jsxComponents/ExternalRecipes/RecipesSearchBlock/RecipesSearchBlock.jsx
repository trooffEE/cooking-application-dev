import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledInputContainerSearch, StyledButton } from "../../../styledComponents/FormRelatedComponents/FormRelatedComponents";
import { setSearchInputValue } from "../../../../redux/actionCreators/recipesExternalActionCreators";
import { Columns } from "../../../styledComponents/HandyComponents/HandyComponents";

const RecipesSearchBlock = (props) => {
  let input = useRef();
  let text = useSelector((state) => {
    return state.recipeReducer.searchValue;
  });
  let dispatch = useDispatch();

  const handleChange = useCallback((value) => {
    dispatch(setSearchInputValue(value));
  });

  return (
    <StyledInputContainerSearch>
        <form action="GET">
            <Columns template={[5, 1]} gap={10}>
                <input
                    type="text"
                    value={text}
                    onChange={() => handleChange(input.current.value)}
                    ref={input}
                    required={true}
                />
                <StyledButton>Find!</StyledButton>
            </Columns>
        </form>
    </StyledInputContainerSearch>
  );
};

export default RecipesSearchBlock;
