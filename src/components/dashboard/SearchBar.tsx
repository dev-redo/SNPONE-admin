import React from "react";
import "./dashboard.css";

type PropsType = {
  handleChagne: object;
  optionList1: any;
  optionList2: any;
};

const SearchBar = (props: PropsType) => {
  const handleInputChange = () => {};
  const handleClick = () => {};

  return (
    <div className="SearchBar">
      <input type="text" placeholder="지원자명" onChange={handleInputChange} />
      <button onClick={handleClick}>검색</button>

      <select name="" onChange={() => {}}>
        {props.optionList1.map((item: any, index: number) => {
          return (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          );
        })}
      </select>

      <select name="" onChange={() => {}}>
        {props.optionList2.map((item: any, index: number) => {
          return (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SearchBar;
