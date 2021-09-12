import React from "react";
import LineupBtn from "./lineupBtn";
import LineupLinkD from "../Resource/LineupLinkD";

const ListBtnDef = (props) => {
  let lineupBtn = [];
  for (let i = 0; i < LineupLinkD[props.url].length; i++) {
    lineupBtn.push(<LineupBtn dart={LineupLinkD[props.url][i].key} name={LineupLinkD[props.url][i].name} link={LineupLinkD[props.url][i].link} />);
  }
  return (
    <>
      <div className="defender">{lineupBtn}</div>
    </>
  );
};

export default ListBtnDef;
