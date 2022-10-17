import "./portfolio.css"
import { AiOutlineArrowRight } from "react-icons/ai"
import PWebPic1 from "../../assets/portfolio4.jpg"
import PWebPic2 from "../../assets/portfolio1.jpg"
import PWebPic4 from "../../assets/portfolio2.jpg"
import PWebPic3 from "../../assets/portfolio3.jpg"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


function Portfolio() {

    return (
        <section id='portfolio'>
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
                <SwiperSlide><div className="portfolio_content grid">
                    <img src={PWebPic1} alt="modern website" />

                    <div className="portfolio_data">
                        <h3>Personal Website</h3>
                        <p>Modern website built with React demonstrating personal skillset and UI/UX design </p>
                        <div className='btnContainer'>
                            <a href="" className="btn">Source  </a>
                            <a href="" className="btn">Demo<AiOutlineArrowRight className="arrow" /></a>
                        </div>
                    </div>
                </div>
                </SwiperSlide>

                {/* second project --------------------------------------------------- */}
                <SwiperSlide><div className="portfolio_content grid">
                    <img src={PWebPic2} alt="modern website" />

                    <div className="portfolio_data">
                        <h3>Personal Website</h3>
                        <p>Modern website built with React demonstrating personal skillset and UI/UX design </p>
                        <div className='btnContainer'>
                            <a href="" className="btn">Demo  </a>
                            <a href="" className="btn">Source<AiOutlineArrowRight className="arrow" /></a>
                        </div>
                    </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="portfolio_content grid">
                        <img src={PWebPic3} alt="modern website" />

                        <div className="portfolio_data">
                            <h3>Personal Website</h3>
                            <p>Modern website built with React demonstrating personal skillset and UI/UX design </p>
                            <div className='btnContainer'>
                                <a href="" className="btn">Demo  </a>
                                <a href="" className="btn">Source<AiOutlineArrowRight className="arrow" /></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide><div className="portfolio_content grid">
                    <img src={PWebPic4} alt="modern website" />

                    <div className="portfolio_data">
                        <h3>Personal Website</h3>
                        <p>Modern website built with React demonstrating personal skillset and UI/UX design </p>
                        <div className='btnContainer'>
                            <a href="" className="btn">Demo  </a>
                            <a href="" className="btn">Source<AiOutlineArrowRight className="arrow" /></a>
                        </div>
                    </div>
                </div>
                </SwiperSlide>

            </Swiper>
        </section>
    )
}

export default Portfolio