import "./Content.css";
import mountains from "../img/mock/img_mountains_wide.jpg";
import wide from "../img/mock/img_nature_wide.jpg";
import snow from "../img/mock/img_snow_wide.jpg";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Content = () => {
  return (
    <>
      <div className="content_container">
        <div className="highlightSlider">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="highlightSlider"
          >
            <SwiperSlide>
              <img src={mountains} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={wide} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={snow} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="content_full">
          <div className="section_slide_wrap">
            <div className="chart_container">
              <div className="chart_title">
                <a className="th_title">ชาร์ตเพลงฮิต</a>
                <a className="icon_right">&gt;</a>
              </div>
            </div>
            <div className="content_contain">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={3}
                navigation
                loop={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  <div className="MediaWrap">
                    <div className="jsx_track">
                      <img src={wide} className="thumnail" />
                      <div className="track_dsc">
                        <a className="track_title">Thailand Top 100</a>
                        <div className="top_chart_list">
                          <div className="playlist">
                            <a className="count">1</a>
                            <a className="music">รักแรก (First Love)</a>
                          </div>
                          <div className="playlist">
                            <a className="count">2</a>
                            <a className="music">ไม่เป็นรอง - Cocktail</a>
                          </div>
                          <div className="playlist">
                            <a className="count">3</a>
                            <a className="music">ยินดี (เพลงประกอบละคร</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a className="jsx_desc">ฟังเพลงจากชาร์ตเพลง Thailand Top 100 อัพเดทเพลงฮิต ทุกสัปดาห์</a>         
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="MediaWrap">
                    <div className="jsx_track">
                      <img src={wide} className="thumnail" />
                      <div className="track_dsc">
                        <a className="track_title">Top 50 International</a>
                        <div className="top_chart_list">
                          <div className="playlist">
                            <a className="count">1</a>
                            <a className="music">รักแรก (First Love)</a>
                          </div>
                          <div className="playlist">
                            <a className="count">2</a>
                            <a className="music">ไม่เป็นรอง - Cocktail</a>
                          </div>
                          <div className="playlist">
                            <a className="count">3</a>
                            <a className="music">ยินดี (เพลงประกอบละคร</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a className="jsx_desc">ฟังเพลงจากชาร์ตเพลง Top 50 International อัพเดทเพลงฮิต ทุกสัปดาห์</a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="MediaWrap">
                    <div className="jsx_track">
                      <img src={wide} className="thumnail" />
                      <div className="track_dsc">
                        <a className="track_title">Top 100 ลูกทุ่ง | ไทบ้าน</a>
                        <div className="top_chart_list">
                          <div className="playlist">
                            <a className="count">1</a>
                            <a className="music">รักแรก (First Love)</a>
                          </div>
                          <div className="playlist">
                            <a className="count">2</a>
                            <a className="music">ไม่เป็นรอง - Cocktail</a>
                          </div>
                          <div className="playlist">
                            <a className="count">3</a>
                            <a className="music">ยินดี (เพลงประกอบละคร</a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a className="jsx_desc">ฟังเพลงจากชาร์ตเพลง Thailand Top 100 อัพเดทเพลงฮิต ทุกสัปดาห์</a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="MediaWrap">
                    <div className="jsx_track">
                      <img src={wide} className="thumnail" />
                      <div className="track_dsc">
                        <a className="track_title">Top 100 ลูกทุ่ง | ไทบ้าน</a>
                        <div className="top_chart_list">
                          <div className="playlist">
                            <a className="count">1</a>
                            <a className="music">รักแรก (First Love)</a>
                          </div>
                          <div className="playlist">
                            <a className="count">2</a>
                            <a className="music">ไม่เป็นรอง - Cocktail</a>
                          </div>
                          <div className="playlist">
                            <a className="count">3</a>
                            <a className="music">ยินดี (เพลงประกอบละคร</a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a className="jsx_desc">ฟังเพลงจากชาร์ตเพลง Thailand Top 100 อัพเดทเพลงฮิต ทุกสัปดาห์</a>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
