import React from "react";

// Material UI Icon
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  return (
    <>
      <section className="footer-container">
        <div className="footer-text">
          <img src="https://cdn2.steamgriddb.com/file/sgdb-cdn/logo/4bcd537b6c034e297f0030cf08887426.png" alt="" />
          <div className="icon-container">
            <ul>
              <li>
                <a href="https://github.com/ega-erinovian?tab=repositories" target="_blank">
                  <GitHubIcon className="icon" />
                </a>
              </li>
              <li>
                <a href="https://app.netlify.com/teams/egaputra69/overview" target="_blank">
                  <LanguageIcon className="icon" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ega-erinovian-megananda-putra-562387176/" target="_blank">
                  <LinkedInIcon className="icon" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/egaerinovian/" target="_blank">
                  <InstagramIcon className="icon" />
                </a>
              </li>
            </ul>
          </div>
          <p>All content, image, video, and audio are properties of Riot Games</p>
          <p>Made to help myself and prolly other 2021</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
