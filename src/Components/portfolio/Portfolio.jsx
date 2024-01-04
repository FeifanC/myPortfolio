import "./portfolio.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import PWebPic1 from "../../assets/map.jpg";
import PWebPic2 from "../../assets/circuit.jpg";
import PWebPic4 from "../../assets/dashboard.PNG";
import PWebPic5 from "../../assets/chat.jpg";
import PWebPic6 from "../../assets/rating.jpg"

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
            <img src={PWebPic2} alt="" />

            <div className="portfolio_data">
              <h3>Compiler in C</h3>
              <p>
              Design and development of compilers, assemblers, linkers, and loaders mimicking low level system functionality in C.{" "}
              </p>
              <div className="btnContainer">
                <a
                  href="https://github.com/FeifanC/schoolWork/tree/main/System_software"
                  target="blank"
                  className="btn"
                >
                  Source{" "}
                </a>
                <a
                  href="https://github.com/FeifanC/schoolWork/tree/main/System_software"
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
                Socket.io on the backend simulating real time chat communication.{" "}
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
        {/* second project --------------------------------------------------- */}
        <SwiperSlide>
          <div className="portfolio_content grid">
            <img src={PWebPic6} alt="" />

            <div className="portfolio_data">
              <h3>betweenShows</h3>
              <p>Implemented multiple APIs, server setup, client data storage/fetching on the Backend for the Show Ratings App in NodeJS, MongoDB.
              {" "}
              </p>
              <div className="btnContainer">
                <a
                  href="https://github.com/FeifanC/COP4331-Large-Project"
                  target="blank"
                  className="btn"
                >
                  Source{" "}
                </a>
                <a
                  href="https://github.com/FeifanC/COP4331-Large-Project"
                  className="btn"
                >
                  Demo
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
