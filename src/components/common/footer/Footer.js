import React from "react";
import UpperFooter from "./UpperFooter";
import LowerFooter from "./LowerFooter";

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <UpperFooter />
        <LowerFooter />
      </div>
    </footer>
  );
}
