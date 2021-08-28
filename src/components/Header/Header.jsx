import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={`images/logo.jpg`} alt="Cat Age Calculator" />
    </header>
  );
}
