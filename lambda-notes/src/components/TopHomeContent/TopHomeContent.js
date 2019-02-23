import React, { useState } from "react";
import { connect } from "react-redux";
import {
  StyledInput,
  ButtonThatLooksLikeALink,
  SearchBarWrapper
} from "../../styles";
import {
  setSearchTerm,
  sortByTitleAToZ,
  sortByTitleZToA,
  sortByTitleNewest,
  sortByTitleOldest,
  removeSort
} from "../../actions";

const TopHomeContent = props => {
  const [value, setValue] = useState("");

  //on mount clear searc
  //zindex of modal
  return (
    <>
      {console.log(value)}
      <h2>Your Notes:</h2>

      <SearchBarWrapper>
        <StyledInput
          placeholder="Search?"
          onChange={event => {
            setValue(event.target.value);
            props.setSearchTerm(event.target.value);
          }}
          value={value}
        />
        <p>Sort By: </p>
        <ButtonThatLooksLikeALink onClick={props.sortByTitleAToZ}>
          a-z
        </ButtonThatLooksLikeALink>
        <ButtonThatLooksLikeALink onClick={props.sortByTitleZToA}>
          z-a
        </ButtonThatLooksLikeALink>
        <ButtonThatLooksLikeALink onClick={props.sortByTitleNewest}>
          newest
        </ButtonThatLooksLikeALink>
        <ButtonThatLooksLikeALink onClick={props.sortByTitleOldest}>
          oldest
        </ButtonThatLooksLikeALink>
        <ButtonThatLooksLikeALink onClick={props.removeSort}>
          default
        </ButtonThatLooksLikeALink>
      </SearchBarWrapper>

      <div>
        <ButtonThatLooksLikeALink onClick={props.logout}>
          logout
        </ButtonThatLooksLikeALink>
      </div>
    </>
  );
};

export default connect(
  null,
  {
    setSearchTerm,
    sortByTitleAToZ,
    sortByTitleZToA,
    sortByTitleNewest,
    sortByTitleOldest,
    removeSort
  }
)(TopHomeContent);
