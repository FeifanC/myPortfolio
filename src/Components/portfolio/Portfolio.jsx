import "./portfolio.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import PWebPic1 from "../../assets/map.jpg";
import PWebPic2 from "../../assets/signup.jpg";
import PWebPic3 from "../../assets/signin.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import PWebPic4 from "../../assets/learn.jpg";
import ins from "../../assets/ins.pdf";
import rp from "../../assets/Research Proposal.docx";
import r from "../../assets/Feifan Cao.doc";
import r2 from "../../assets/deletp.jpg";
import cl from "../../assets/cover letter.docx";
import d2 from "../../assets/dele2.jpg";

function Portfolio() {
  return (
    <section id="portfolio">
      <h2>What Has He Done</h2>

      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* deleting project ---------------------------------------------------- */}
        <SwiperSlide>
          <div className="portfolio_content grid">
            <img src={PWebPic4} alt="" />

            <div className="portfolio_data">
              <h3>Instruction</h3>
              <p>
                For the people who are willing to try cutting their own hair at
                the comfort of their home. The Following instructions include
                the required tools, beginner tips, and expectations, and the
                general guidelines for hair shortening.
              </p>
              <div className="btnContainer">
                <a href={ins} className="btn btn2" target="blank">
                  Instruction <AiOutlineArrowRight className="arrow" />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* deleting project2 ---------------------------------------------------- */}
        <SwiperSlide>
          <div className="portfolio_content grid">
            <img src={r2} alt="" />

            <div className="portfolio_data">
              <h3>Research Proposal</h3>
              <p>
                The research proposal is applied for the research of a variety
                of ways our privacy is being invaded by IoT and to help
                costomers gain better understanding on proctecting personal data
              </p>
              <div className="btnContainer">
                <a href={rp} className="btn btn2">
                  Research Proposal <AiOutlineArrowRight className="arrow" />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* deleting project3 ---------------------------------------------------- */}
        <SwiperSlide>
          <div className="portfolio_content grid">
            <img src={d2} alt="" />

            <div className="portfolio_data">
              <h3>Resume Package</h3>
              <p>
                The following files contain the resume, cover letter and mini
                interview for a potential job
              </p>
              <div className="btnContainer">
                <a href={r} className="btn btn2">
                  Resume
                </a>
                <a href={cl} className="btn btn2">
                  Cover Letter
                </a>
                <a
                  href="https://youtube.com/shorts/CXYs--elLDg?feature=share"
                  target="blank"
                  className="btn btn2"
                >
                  Mini Interview Video
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* fist project ---------------------------------------------------- */}
        <SwiperSlide>
          <div className="portfolio_content grid">
            <img src={PWebPic1} alt="Location App" />

            <div className="portfolio_data">
              <h3>Danger Sighting</h3>
              <p>
                {" "}
                "Bear Sighting" React Location App where Google Maps, Google
                Places, and browser geolocation are implemented with React hooks
                and packages{" "}
              </p>
              <div className="btnContainer">
                <a
                  href="https://github.com/FeifanC/map.git"
                  target="blank"
                  className="btn"
                >
                  Source{" "}
                </a>
                <a href="https://github.com/FeifanC/map.git" className="btn">
                  Demo
                  <AiOutlineArrowRight className="arrow" />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* second project --------------------------------------------------- */}
        <SwiperSlide>
          <div className="portfolio_content grid">
            <img src={PWebPic2} alt="Sign up page" />

            <div className="portfolio_data">
              <h3>Simple Sign-Up</h3>
              <p>
                Simple Sign up Application with ReactJS on the front and
                Express.js, MongoDB on the back{" "}
              </p>
              <div className="btnContainer">
                <a
                  href="https://github.com/FeifanC/VerySimpleSignUp.git"
                  target="blank"
                  className="btn"
                >
                  Source{" "}
                </a>
                <a
                  href="https://github.com/FeifanC/VerySimpleSignUp.git"
                  className="btn"
                >
                  Demo
                  <AiOutlineArrowRight className="arrow" />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* third project --------------------------------------------------- */}
        <SwiperSlide>
          <div className="portfolio_content grid">
            <img src={PWebPic3} alt="Sign In API" />

            <div className="portfolio_data">
              <h3>Sign In API</h3>
              <p>
                Sign-In and Sign-Up API(front end not connected yet) utilizing
                Express.js and MongoDB with Authetication(JSON Web Token){" "}
              </p>
              <div className="btnContainer">
                <a
                  href="https://github.com/FeifanC/Sign-In-Up.git"
                  target="blank"
                  className="btn"
                >
                  Source{" "}
                </a>
                <a
                  href="https://github.com/FeifanC/Sign-In-Up.git"
                  className="btn"
                >
                  Demo
                  <AiOutlineArrowRight className="arrow" />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>
          <div className="portfolio_content grid">
            <img src={PWebPic4} alt="modern website" />

            <div className="portfolio_data">
              <h3>Personal Website</h3>
              <p>
                Modern website built with React demonstrating personal skillset
                and UI/UX design{" "}
              </p>
              <div className="btnContainer">
                <a href="" className="btn">
                  Demo{" "}
                </a>
                <a href="" className="btn">
                  Source
                  <AiOutlineArrowRight className="arrow" />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
}

export default Portfolio;
