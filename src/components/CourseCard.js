import React from "react";
import CourseRatingStars from "./CourseRatingStars";
import styles from "../styles/courseCardStyles.module.css";

function CourseCard(props) {
  // Concatenate instructors names together
  let instructors = "";
  for (let i = 0; i < props.course.instructors.length; i++) {
    instructors += props.course.instructors[i].name;
    if (i != props.course.instructors.length - 1) {
      instructors += ", ";
    }
  }

  return (
    <div className={styles.course}>
      <img src={props.course.image} />
      <h4>
        <a href="">{props.course.title}</a>
      </h4>
      <div className={styles.courseAuthor}>{instructors}</div>
      <div className={styles.courseRating}>
        <div className={styles.ratingNumber}>
          {parseFloat(props.course.rating.toFixed(1))}
        </div>
        <div className={styles.ratingStarWrapper}>
          <CourseRatingStars rate={props.course.rating.toFixed(1)} />
          <CourseRatingStars rate={props.course.rating.toFixed(1) - 1} />
          <CourseRatingStars rate={props.course.rating.toFixed(1) - 2} />
          <CourseRatingStars rate={props.course.rating.toFixed(1) - 3} />
          <CourseRatingStars rate={props.course.rating.toFixed(1) - 4} />
        </div>
        <div
          className={styles.votingsCount}
        >{`(${props.course.num_reviews.toLocaleString()})`}</div>
      </div>
      <div className={styles.coursePrice}>{`E£ ${props.course.price}`}</div>
    </div>
  );
}

export default CourseCard;
