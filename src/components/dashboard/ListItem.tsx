import React from "react";
import "./dashboard.css";
const item: (string | number | boolean)[] = [
  1,
  "2022-03-25",
  "Lupe Chang",
  "female",
  "2017-02-19T08:33:55 -09:00",
  "+1 (934) 483-3125",
  "lupechang@indexia.com",
  "CEPRENE",
  "779 Hull Street, Woodlake, Iowa, 324",
  // true,
];

const ListItem = () => {
  return (
    <tr className="ListItem">
      {item.map((item: string | number | boolean, index: number) => {
        return <td key={index}>{item} </td>;
      })}
      <div className="checkboxWrapper">
        <input type="checkbox"></input>
      </div>
    </tr>
  );
};

export default ListItem;
