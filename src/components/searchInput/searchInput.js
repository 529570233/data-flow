import React from "react";

import { Input } from "antd";

const { Search } = Input;
const SearchInput = props => {
  let { placeholder, width } = props;
  return (
    <div className="search_input">
      <Search
        placeholder={placeholder}
        onSearch={value => console.log(value)}
        style={{ width: width }}
      />
    </div>
  );
};

export default SearchInput;
