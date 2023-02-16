import "./portfolio.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import PWebPic1 from "../../assets/map.jpg";
import PWebPic2 from "../../assets/signup.jpg";
import PWebPic3 from "../../assets/signin.jpg";
import PWebPic4 from "../../assets/dashboard.PNG";
import PWebPic5 from "../../assets/chat.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

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

        {/* fourth project --------------------------------------------------- */}
        <SwiperSlide>
          <div className="portfolio_content grid">
            <img src={PWebPic4} alt="data control" />

            <div className="portfolio_data">
              <h3>Data Dashboard</h3>
              <p>
                Using sample data from Microsoft AdventureWork to extract
                specific reports with SQL, which are utilized by Power BI to
                build an interactive dashboard{" "}
              </p>
              <div className="btnContainer">
                <a
                  href="https://github.com/FeifanC/data-dashboard"
                  target="blank"
                  className="btn"
                >
                  Source{" "}
                </a>
                <a
                  href="https://github.com/FeifanC/data-dashboard"
                  className="btn"
                >
                  Demo
                  <AiOutlineArrowRight className="arrow" />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio_content grid">
            <img src={PWebPic5} alt="chat app" />

            <div className="portfolio_data">
              <h3>Chat App</h3>
              <p>
                chat app implemented with React on the frontend, NodeJS and
                Socket.io on the backend.{" "}
              </p>
              <div className="btnContainer">
                <a
                  href="https://github.com/FeifanC/ChatApp.git"
                  className="btn"
                  target="blank"
                >
                  Demo{" "}
                </a>
                <a
                  href="https://github.com/FeifanC/ChatApp.git"
                  className="btn"
                  target="blank"
                >
                  Source
                  <AiOutlineArrowRight className="arrow" />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Portfolio;
