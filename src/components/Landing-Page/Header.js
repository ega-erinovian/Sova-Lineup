import React from "react";
import BGVideo from "../../media/video/agent-background-generic.mp4";

const Header = () => {
  return (
    <section className="header-container">
      <video autoPlay muted loop id="my-video" src={BGVideo}></video>
      <div className="content-container">
        <div className="header-title">
          <h1>SOVA LINEUP</h1>
          <p>Hard to remembering sova lineup? We here to help you. Just open this web while playing valorant and search lineup you want to use! GG sova lineup, let’s win this up!</p>
        </div>
        <div className="agent-img">
          <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf11234f4775729b7/5ebf2c275e73766852c8d5d4/V_AGENTS_587x900_ALL_Sova_2.png" />
        </div>
      </div>
    </section>
  );
};

export default Header;
