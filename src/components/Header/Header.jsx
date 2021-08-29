import React from "react";
import "./Header.css";
import logo from './logo2-big.jpg';

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Cat Age Calculator" />
    </header>
  );
}
