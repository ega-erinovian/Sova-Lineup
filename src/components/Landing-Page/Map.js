import React from "react";
import MapImg from "../Resource/MapImg";

import { Link } from "react-router-dom";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const Map = (props) => {
  return (
    <>
      <section className="map-container" style={{ backgroundImage: `url(${MapImg[props.id].img})` }}>
        <div className="desc-container">
          <div className="text-container">
            <h1>{MapImg[props.id].name}</h1>
            <p>{MapImg[props.id].desc}</p>
          </div>
          <Link to={`/vidlist/${props.id}`}>
            <button className="map-btn">
              <PlayArrowIcon className="play-icon" />
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Map;
