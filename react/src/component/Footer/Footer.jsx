import githublogo from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import "./Footer.css";
import React from "react";

export default function Footer(props) {
  const { footer } = props.data;
  return (
    <div>
      <footer className="footer">
        <div className="footer-links">
          <p className="footer-desc">{footer} </p>
          <a href="https://www.instagram.com/rlaehd_/">
            <img className="footer-img" src={instagram} alt="instagram" />
          </a>
          <a href="https://github.com/wwweric12">
            <img className="footer-img" src={githublogo} alt="github image" />
          </a>
        </div>
      </footer>
    </div>
  );
}
