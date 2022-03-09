import React, { useEffect, useState } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Helmet } from "react-helmet";
import { hamburgerMenu } from "./navbar-script";

function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);

  function setDimensions() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", setDimensions);

    return () => window.removeEventListener("resize", setDimensions);
  }, [window.innerWidth]);

  useEffect(() => {
    hamburgerMenu();
  }, []);

  return (
    <nav className={width > 1025 ? "navbar" : "navbar mobile"}>
      {width < 1025 && (
        <MenuIcon
          fontSize="large"
          id="hamburger"
          onClick={() => setShowMenu(!showMenu)}
        />
      )}
      <span
        className={width < 1025 ? "navbar-links-mobile" : "navbar-links"}
        style={{ width: width < 1025 ? (showMenu ? "40%" : 0) : "50vw" }}
      >
        <a href="/">
          <span>Hjem</span>
        </a>
        <a href="/">
          <span>Hvem vi er</span>
        </a>
        <a href="/">
          <span>Hva vi gjør</span>
        </a>
        <a href="/">
          <span>Ressurser</span>
        </a>
        <a href="/">
          <span>Kontakt Oss</span>
        </a>
        <a href="/">
          <span>Logg inn</span>
        </a>
      </span>
    </nav>
  );
}

export default Navbar;
