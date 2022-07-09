import React from "react";

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className="footer__nav">
          <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
          <ul className="footer__links">
            <li className="footer__link-item">
              <a href="#" className="footer__link">Яндекс.Практикум</a>
            </li>
            <li className="footer__link-item">
              <a href="#" className="footer__link">Github</a>
            </li>
            <li className="footer__link-item">
              <a href="#" className="footer__link">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
