import React from "react";
import { Input } from "antd";
import { searchCluster } from "@/api";

const { Search } = Input;
const SearchInput = props => {
  let { placeholder = "", width = "100%", searchRes } = props;
  let onSearch = val => {
    if(val.trim()==="") return;
    searchCluster(val).then(res => {
      searchRes(res)
    })
  };
  return (
    <div className="search_input">
      <Search
        placeholder={placeholder}
        onSearch={onSearch}
        style={{ width: width }}
      />
    </div>
  );
};

export default SearchInput;
