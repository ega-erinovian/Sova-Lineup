import React from "react";
import { useParams } from "react-router-dom";

import MapImg from "../Resource/MapImg";
import ListBtnAtt from "./ListBtnAtt";
import ListBtnDef from "./ListBtnDef";

import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

const VidList = () => {
  const params = useParams();
  return (
    <>
      <section className="video-container" style={{ backgroundImage: `url(${MapImg[params["id"]].img})` }}>
        <Link to={"/"}>
          <button className="home-btn">
            <HomeIcon className="home-icon" />
          </button>
        </Link>
        <div className="side-container">
          <ListBtnAtt url={params["id"]} />
          <ListBtnDef url={params["id"]} />
        </div>
      </section>
    </>
  );
};

export default VidList;
