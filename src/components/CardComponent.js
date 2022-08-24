import React from "react";
import styles from "../styles/courseCardStyles.module.css";
import CourseCard from "./CourseCard";

function CardComponent(props) {
  return (
    <div className={styles.coursesWrapper}>
      <h3>{props.courseHeader}</h3>
      <p>{props.courseDescription}</p>
      <a href="" className={styles.aButtonLight}>
        {`Explore ${props.courseTitle}`}
      </a>
      <div className={styles.coursesList}>
        {props.courseList.map((course) => {
          return <CourseCard course={course} />;
        })}
      </div>
    </div>
  );
}

export default CardComponent;
