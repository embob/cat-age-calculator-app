import React from "react";
import "./Header.css";
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
