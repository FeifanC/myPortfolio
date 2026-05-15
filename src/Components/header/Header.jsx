import React from "react";
import "./header.css";
import "./CTA";
import CTA from "./CTA";
import ME from "../../assets/me.jpg";
import HeaderSocial from "./HeaderSocial";

function Header() {
  return (
    <header id="header">
      <div className="container">
        <div className="container2">
          <h3>Hello I'm</h3>
          <h1>Feifan Pontello</h1>
          <h3 className="textlight">Software Developer</h3>
          <HeaderSocial />
          <CTA />
        </div>
        {/* <div className="me">
          <img src={ME} alt="me and myself" />
        </div> */}
      </div>
    </header>
  );
}

export default Header;
