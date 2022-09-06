import React from "react";
import headerImg from "../../assets/headerImgs/header-img.png";

export default function Header() {
  return (
    <header className="header-container">
      <div>
        <h1>New to Udemy? Lucky you.</h1>
        <p>
          Courses start at E£169.99. Get your new-student offer before it
          expires.
        </p>
      </div>
      <img src={headerImg} alt="header image" />
    </header>
  );
}
