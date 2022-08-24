import React from "react";
import fStar from "../assets/starImgs/starFill.svg";
import hStar from "../assets/starImgs/starHalf.svg";
import eStar from "../assets/starImgs/star.svg";

function CourseRatingStars(props) {
  if (props.rate >= 1) {
    return <img src={fStar} />;
  } else if (props.rate > 0) {
    return <img src={hStar} />;
  } else {
    return <img src={eStar} />;
  }
}

export default CourseRatingStars;
