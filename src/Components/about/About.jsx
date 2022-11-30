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
              <small>0+ Years Working</small>
            </article>

            <article /*style={{display: "none"}}*/ className="about_card">
              <FaUsers className="about_icon" />
              <h5>Clients</h5>
              <small>0 For Now</small>
            </article>

            <article className="about_card project">
              <a href="#portfolio">
                <FaFolderOpen className="about_icon" />
                <h5>Projects</h5>
                <small>Coming Soon</small>
              </a>
            </article>
          </div>

          <p>
            College senior study computer science in University of Central
            Florida with enthusiasm and passion in software development. I
            strive to learn new skills and explore the unknown. With limited
            experience in Web development and Linux, I am looking forwarding to
            facing more challenges and meeting potential teammates.
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
