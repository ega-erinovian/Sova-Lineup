import React from "react";

const lineupBtn = (props) => {
  const dartType = [
    "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltebf4f748f87b2222/5eaf85dc4398082ffe24018f/TX_Sova_Q.png",
    "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5084114604f20525/5eaf85b108d37e6d82ef74ef/TX_Sova_E.png",
  ];
  return (
    <>
      <a href={props.link} target="_blank" rel="noreferrer">
        <button className="dart-btn">
          <img src={dartType[props.dart]} alt="dart-icon" />
          <h1>{props.name}</h1>
        </button>
      </a>
    </>
  );
};

export default lineupBtn;
