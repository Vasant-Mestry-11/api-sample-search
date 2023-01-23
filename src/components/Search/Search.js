import React, { useState } from "react";
import ModuleCss from "./Search.module.css";

const Search = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <span className={ModuleCss.searchContainer}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={ModuleCss.input}
      />
      <i className="bx bx-search"></i>
    </span>
  );
};

export default Search;
