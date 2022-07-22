import ListItem from "./ListItem";
import React from "react";
import dummy from "./dummy.json";
import "./dashboard.css";

const TABLE_HEADER: string[] = [
  "번호",
  "지원날짜",
  "지원자명",
  "성별",
  "생년월일",
  "연락처",
  "이메일",
  "이용수단",
  "거주지",
  "당첨여부",
];

const List = () => {
  console.log(dummy);

  return (
    <div className="List">
      <table>
        <thead>
          <tr>
            {TABLE_HEADER.map((item: string, index: number) => {
              return <th key={index}>{item} </th>;
            })}
          </tr>
        </thead>
        <ListItem />
        <ListItem />
      </table>
    </div>
  );
};

export default List;
