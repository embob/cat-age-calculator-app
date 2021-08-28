import React from "react";
import "./Footer.css";
import FooterIcons from "../FooterIcons/FooterIcons";

export default function Footer() {
  const socialMedia = [
    { name: "Twitter", url: "https://twitter.com/embobmaria" },
    { name: "Github", url: "https://github.com/embob/cat-age-calculator-app" },
  ];
  return (
    <footer>
      <div>
        Created by <span className="footer__name">Emma Karayiannis</span>
      </div>

      <FooterIcons icons={socialMedia} />
    </footer>
  );
}
