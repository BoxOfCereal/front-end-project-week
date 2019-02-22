import React, { useState } from "react";
import { StyledInput, ButtonThatLooksLikeALink } from "../../styles";

const TopHomeContent = props => {
  const [value, setValue] = useState("");

  return (
    <>
      {console.log(value)}
      <h2>Your Notes:</h2>

      <StyledInput
        placeholder="Search?"
        onChange={event => {
          setValue(event.target.value);
        }}
        value={value}
      />

      <div>
        <ButtonThatLooksLikeALink onClick={props.logout}>
          logout
        </ButtonThatLooksLikeALink>
      </div>
    </>
  );
};

export default TopHomeContent;
