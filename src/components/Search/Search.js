import React from "react";
import ModuleCss from "./Search.module.css";

const Search = ({ value, handleChange, disabled }) => {
  return (
    <span className={ModuleCss.searchContainer}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={ModuleCss.input}
        disabled={disabled}
      />
      <i className="bx bx-search"></i>
    </span>
  );
};

export default Search;
