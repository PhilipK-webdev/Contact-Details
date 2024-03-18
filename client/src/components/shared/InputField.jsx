import React from "react";
import Icon from "./Icon";
const InputField = ({ handleChange }) => {
  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="search in contacts..."
        onChange={handleChange}
      />
      <Icon divClass={"search-icon"} iconClass={"fa fa-search"} />
    </div>
  );
};

export default InputField;
