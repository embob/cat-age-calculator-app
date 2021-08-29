import React from "react";
import "./Header.scss";
import logo from "./logo.jpg";

export default function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        width="310"
        height="133"
        alt="Cat Age Calculator"
      />
    </header>
  );
}
