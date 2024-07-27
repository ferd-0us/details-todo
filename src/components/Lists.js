import React from "react";

function Lists(props) {
  return (
    <div className="list">
      <div className="listItem">
        <ul>{props.fName}</ul>
        <ul>{props.programe}</ul>
        <ul>{props.subject}</ul>
        <ul>{props.nid}</ul>
      </div>
    </div>
  );
}

export default Lists;
