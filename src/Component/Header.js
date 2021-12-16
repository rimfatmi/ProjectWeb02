import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = (props) => {
  const [Menu, setMenu] = useState(false);
  const [Scroll, setScroll] = useState(false);

  const handleMenu = () => {
    setMenu(!Menu);
    setScroll(!Scroll);
  };
  const handleChange = () => {
    setMenu(false);
    setScroll(false);
  };

  const checkDimensions = () => {
    if (window.innerWidth > 1024) {
      setMenu(false);
      setScroll(false);
    }
  };
  window.addEventListener("resize", checkDimensions);

  if (Menu) {
    document.querySelector("html").classList.add("Menu-active");
  } else {
    document.querySelector("html").classList.remove("Menu-active");
  }
  if (Scroll) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "";
  }
  return (
    <div className="menu">
      <div className="menu-wrapper">
        <NavBar Change={handleChange} />
        <Search Change={handleChange} />
      </div>
    </div>
  );
};

export default Header;
