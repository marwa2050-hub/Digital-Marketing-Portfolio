import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer" aria-label="Footer with social links">
      <div className="social">
        <a href="https://github.com/marwa2050-hub" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/marwa-noorestani-b8573a2a8" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://www.instagram.com/marwa.design.studio/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
        <a href="https://www.youtube.com/@MarwaNoorestani" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
        <a href="https://www.tiktok.com/@marwa.design.studio" target="_blank" rel="noreferrer" aria-label="TikTok"><FaTiktok /></a>
        <a href="mailto:marwanurestani@gmail.com" aria-label="Email"><FaEnvelope /></a>
      </div>
      <p>© {year} Marwa | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
