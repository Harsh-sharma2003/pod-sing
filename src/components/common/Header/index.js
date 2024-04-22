import React from "react";
import "./styles.css";
import { Link , useLocation } from "react-router-dom"; 
// import { Link, useLocation } from "react-router-dom";: Imports the Link component and the useLocation hook from the react-router-dom library. These are used for navigation and to get the current URL path.

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  /* const location = useLocation();: Calls the useLocation hook to get the current location object, which contains information about the current URL.
     const currentPath = location.pathname;: Extracts the pathname property from the location object, representing the current URL path.
     jsx 
  */

  return (
    
    <div className="navbar">
      <div className="gradient"></div>
      <div className="links">
        <Link to="/" className={currentPath == "/" ? "active" : ""}>
          Signup
        </Link>
        <Link
          to="/podcasts"
          className={currentPath == "/podcasts" ? "active" : ""}>
          Podcasts
        </Link>
        <Link
          to="/create-a-podcast"
          className={currentPath == "/create-a-podcast" ? "active" : ""}>
          Start A Podcast
        </Link>
        <Link
          to="/profile"
          className={currentPath == "/profile" ? "active" : ""}>
          Profile
        </Link>
      </div>
    </div>
  );
}

export default Header;
