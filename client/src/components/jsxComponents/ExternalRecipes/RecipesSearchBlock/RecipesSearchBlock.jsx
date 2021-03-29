import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyledInputContainerSearch,
  StyledButton,
} from "../../../styledComponents/FormRelatedComponents/FormRelatedComponents";
import { setSearchInputValue, setViewableRecipesAsync } from "../../../../redux/actionCreators/recipesExternalActionCreators";
import { Columns } from "../../../styledComponents/HandyComponents/HandyComponents";

const RecipesSearchBlock = (props) => {
  let dispatch = useDispatch();
  let input = useRef();

  let text = useSelector((state) => state.recipeReducer.searchValue);

  const handleChange = (value) => {
    dispatch(setSearchInputValue(value));
  };

  const handleClick = () => {
    dispatch(setViewableRecipesAsync(`/recipes/complexSearch?&number=20&titleMatch=${text}`));
  }

  return (
    <StyledInputContainerSearch>
        <Columns template={[5, 1]} gap={10}>
          <input
            type="text"
            value={text}
            onChange={() => handleChange(input.current.value)}
            ref={input}
            required={true}
          />
          <StyledButton onClick={handleClick}>Find!</StyledButton>
        </Columns>
    </StyledInputContainerSearch>
  );
};

export default RecipesSearchBlock;
