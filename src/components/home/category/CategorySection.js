import React from "react";
import CategoryCard from "./CategoryCard";

export default function CategorySection(props) {
  return (
    <section className="section-container">
      <h2>A broad selection of courses</h2>
      <p>
        Choose from 185,000 online video courses with new additions published
        every month
      </p>
      <ul>
        <li>
          <button className="b-1 section-container-dark-button">Python</button>
        </li>
        <li>
          <button className="b-2">Excel</button>
        </li>
        <li>
          <button className="b-3">Web Development</button>
        </li>
        <li>
          <button className="b-4">JavaScript</button>
        </li>
        <li>
          <button className="b-5">Data Science</button>
        </li>
        <li>
          <button className="b-6">AWS</button>
        </li>
        <li>
          <button className="b-7">Drawing</button>
        </li>
      </ul>
      <CategoryCard
        courseHeader={props.courseHeader}
        courseDescription={props.courseDescription}
        courseTitle={props.courseTitle}
        courseList={props.courseList}
      />
    </section>
  );
}
