import React from "react";
import LineupBtn from "./lineupBtn";
import LineupLinkA from "../Resource/LineupLinkA";

const ListBtnAtt = (props) => {
  let lineupBtn = [];
  for (let i = 0; i < LineupLinkA[props.url].length; i++) {
    lineupBtn.push(<LineupBtn dart={LineupLinkA[props.url][i].key} name={LineupLinkA[props.url][i].name} link={LineupLinkA[props.url][i].link} />);
  }
  return (
    <>
      <div className="attacker">{lineupBtn}</div>
    </>
  );
};

export default ListBtnAtt;
