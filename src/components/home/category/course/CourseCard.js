import React from "react";
import CourseRatingStars from "./CourseRatingStars";
import Popup from "reactjs-popup";
import CourseTooltip from "./CourseTooltip";

import "reactjs-popup/dist/index.css";

export default function CourseCard(props) {
  // Concatenate instructors names together
  let instructors = "";
  for (let i = 0; i < props.course.visible_instructors.length; i++) {
    instructors += props.course.visible_instructors[i].title;
    if (i != props.course.visible_instructors.length - 1) {
      instructors += ", ";
    }
  }

  return (
    <Popup
      trigger={
        <div className="course">
          <img src={props.course.image_480x270} />
          <h4>
            <a href="">{props.course.title}</a>
          </h4>
          <div className="course-author">{instructors}</div>
          <div className="course-rating">
            <div className="rating-number">
              {parseFloat(props.course.rating.toFixed(1))}
            </div>
            <div className="rating-star-wrapper">
              <CourseRatingStars rate={props.course.rating.toFixed(1)} />
              <CourseRatingStars rate={props.course.rating.toFixed(1) - 1} />
              <CourseRatingStars rate={props.course.rating.toFixed(1) - 2} />
              <CourseRatingStars rate={props.course.rating.toFixed(1) - 3} />
              <CourseRatingStars rate={props.course.rating.toFixed(1) - 4} />
            </div>
            <div className="votings-count">{`(${props.course.num_reviews.toLocaleString()})`}</div>
          </div>
          <div className="course-price">{`E£ ${props.course.is_paid}`}</div>
        </div>
      }
      on={"hover"}
      position={[
        "right center",
        "left center",
        "bottom center",
        "bottom left",
        "bottom right",
      ]}
      mouseEnterDelay={0}
      mouseLeaveDelay={0}
      keepTooltipInside=".main-container"
    >
      <CourseTooltip
        title={props.course.title}
        last_update_date={props.course.last_update_date}
        content_info={props.course.content_info}
        instructional_level={props.course.instructional_level}
        subtitles={props.course.subtitles}
        headline={props.course.headline}
        objectives_summary={props.course.objectives_summary}
      />
    </Popup>
  );
}
