import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Map from "./Map";

const MapMenu = () => {
  return (
    <>
      <Carousel infiniteLoop={true} className="carousel">
        <Map id={0} />
        <Map id={1} />
        <Map id={2} />
        <Map id={3} />
        <Map id={4} />
        <Map id={5} />
      </Carousel>
    </>
  );
};

export default MapMenu;
