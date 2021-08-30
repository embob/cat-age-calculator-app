import React from "react";
import { SocialIcon } from 'react-social-icons';
import "./FooterIcons.scss"

export default function FooterIcons({icons}) {
  return (
    <div className="footer-icons">
      <SocialIcon url="https://twitter.com/embobmaria" style={{ height: 40, width: 40 }} />
      <SocialIcon url="https://github.com/embob/cat-age-calculator-app" style={{ height: 40, width: 40 }} />
    </div>
  )
}
