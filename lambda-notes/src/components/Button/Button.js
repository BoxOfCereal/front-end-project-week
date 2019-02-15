import React from "react";
import { StyleButton } from "../../styles";

const Button = props => {
  return <StyleButton {...props}>{props.children}</StyleButton>;
};

export default Button;
