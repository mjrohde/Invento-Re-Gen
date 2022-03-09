import React, { useEffect, useState } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { hamburgerMenu } from "./navbar-script";

function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);

  //Dynamically being called to update hook on resize
  function setDimensions() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    hamburgerMenu();
    window.addEventListener("resize", setDimensions);

    //Cleanup
    return () => window.removeEventListener("resize", setDimensions);
  }, [window.innerWidth]);

  return (
    <nav className={width > 1025 ? "navbar" : "navbar mobile"}>
      {width < 1025 && (
        <>
          {/** Hamburger Menu*/}
          <div id="hamburger" onClick={() => setShowMenu(!showMenu)}>
            <div className="lines first"></div>
            <div className="lines second"></div>
            <div className="lines third"></div>
          </div>
        </>
      )}
      <span
        className={width < 1025 ? "navbar-links-mobile" : "navbar-links"}
        style={{ width: width < 1025 ? (showMenu ? "40%" : 0) : "50vw" }}
      >
        {/* Added spans within the a selector in order to get a background behind the text, using just the a 
        selector would have given a background exceeding the text*/}
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
