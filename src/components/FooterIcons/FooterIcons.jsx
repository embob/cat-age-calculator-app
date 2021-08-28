import React from "react";
import "./FooterIcons.css"

export default function FooterIcons({icons}) {

  const footerIcons = icons.map((icon, index) =>
    <a key={index} className="footer-icons__icon" href={icon.url}>
      <img className="footer__icon" src={`images/${icon.name}.svg`} alt={`${icon.name} logo`} />
    </a>
  );

  return (
    <div className="footer-icons">
      { footerIcons }
    </div>
  )
}
