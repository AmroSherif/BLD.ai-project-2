import React from "react";
import CourseCard from "./course/CourseCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Navigation } from "swiper";

export default function CardComponent(props) {
  return (
    <div className="courses-wrapper">
      <h3>{props.courseHeader}</h3>
      <p>{props.courseDescription}</p>
      <a href="" className="a-button-light">
        {`Explore ${props.courseTitle}`}
      </a>
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={20}
        navigation={true}
        breakpoints={{
          600: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {props.courseList.map((course) => {
          return (
            <SwiperSlide>
              <CourseCard course={course} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
