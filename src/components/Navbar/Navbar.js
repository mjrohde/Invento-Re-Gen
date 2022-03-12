import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);

  //Dynamically being called to update hook on resize
  function setDimensions() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", setDimensions);

    //Cleanup
    return () => window.removeEventListener("resize", setDimensions);
  }, [window.innerWidth]);

  return (
    <nav className={width > 1025 ? "navbar" : "navbar mobile"}>
      {width < 1025 && (
        <>
          {/** Hamburger Menu*/}
          <div
            id={showMenu ? "hamburgerActive" : "hamburger"}
            onClick={() => setShowMenu(!showMenu)}
          >
            <div className={showMenu ? "lines first active" : "lines first"} />
            <div
              className={showMenu ? "lines second active" : "lines second"}
            />
            <div className={showMenu ? "lines third active" : "lines third"} />
          </div>
        </>
      )}
      <span
        className={width < 1025 ? "navbar-links-mobile" : "navbar-links"}
        style={{ width: width < 1025 ? (showMenu ? "40%" : 0) : "50vw" }}
      >
        {/* Added spans within the a selector in order to get a background behind the text, using just the a 
        selector would have given a background exceeding the text*/}
        <a href="#/" onClick={() => setShowMenu(false)}>
          <span>Hjem</span>
        </a>
        <a href="/#/whatwedo" onClick={() => setShowMenu(false)}>
          <span>Hva vi gjør</span>
        </a>
        <a href="/#/resources" onClick={() => setShowMenu(false)}>
          <span>Ressurser</span>
        </a>
        <a href="/" onClick={() => setShowMenu(false)}>
          <span>Kontakt Oss</span>
        </a>
        <a href="/" onClick={() => setShowMenu(false)}>
          <span>Logg inn</span>
        </a>
      </span>
    </nav>
  );
}

export default Navbar;
