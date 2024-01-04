import React from "react";
import "./about.css";
import pic from "../../assets/mee.webp";
import { TbAward } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h2>Who's This GUY</h2>
      <div className="container about_container">
        <div className="about_me">
          <img src={pic} alt="me again " />
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <TbAward className="about_icon" />
              <h5>Experience</h5>
              <small> 1+ Years Working</small>
            </article>

            <article /*style={{display: "none"}}*/ className="about_card">
              <FaUsers className="about_icon" />
              <h5>Clients</h5>
              <small>maybe</small>
            </article>

            <article className="about_card project">
              <a href="#portfolio">
                <FaFolderOpen className="about_icon" />
                <h5>Projects</h5>
                <small>Check it Out!</small>
              </a>
            </article>
          </div>

          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Graduated with Bachelor of Computer Science from
            University of Central Florida, Seeking to emphasize my enthusiasm and passion in
            software development. <br />
            &nbsp;&nbsp;&nbsp;&nbsp; Looking forward to thriving in collaborative, agile environments, consistently delivering high-quality solutions that contribute to the company's technological advancements.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's get familiar
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
