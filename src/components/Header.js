import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

class Header extends React.Component {
  render() {
    const isLoggedIn = true;
    const headerLink = isLoggedIn ? (
      <Link to="/profile">profile</Link>
    ) : (
      <Link to="/sign-up">sign up</Link>
    );
    return (
      <div id="header">
        <Link to="/" id="logo">
          los angeles bucket list
        </Link>
        <div id="header_links">
          <Link to="/about">about us</Link>
          {headerLink}
        </div>
      </div>
    );
  }
}

export default Header;
