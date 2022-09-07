import React from "react";
import cartIcon from "../../assets/navBarImgs/cart.svg";
import globeIcon from "../../assets/navBarImgs/globe.svg";
import listIcon from "../../assets/navBarImgs/list.svg";
import searchIcon from "../../assets/navBarImgs/search.svg";

export default function NavBar() {
  return (
    <nav className="nav-container">
      <div className="center menu-logo">
        <button>
          <img src={listIcon} alt="list icon" />
        </button>
      </div>
      <div className="center logo">
        <a href="./index.html">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            alt="udemy logo"
          />
        </a>
      </div>
      <div className="center nav-option">Categories</div>
      <form action="">
        <button type="button">
          <img src={searchIcon} alt="search icon" />
        </button>
        <input type="text" placeholder="Search for anything" name="search" />
      </form>
      <div className="center nav-option mq1-hide">Udemy Business</div>
      <div className="center nav-option mq2-hide">Teach on Udemy</div>
      <div className="center">
        <img className="nav-option-img" src={cartIcon} alt="cart icon" />
      </div>
      <div className="center a-button-light">
        <a href="">Log in</a>
      </div>
      <div className="center a-button-dark">
        <a href="">Sign up</a>
      </div>
      <div className="center a-button-light lang-button">
        <button className="center">
          <img src={globeIcon} alt="globe icon" />
        </button>
      </div>
    </nav>
  );
}
