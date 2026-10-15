import React from "react";
import "./Hero.css";
import profileImg from "../assets/profile.jpg";
import cvFile from "../assets/Marwa_CV.pdf"; // فایل CV خود را اینجا بگذارید

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Hi, I’m <span>Marwa</span></h1>
        <h2>Digital Marketer creating social media designs and videos that connect with people</h2>
        <p>
          I design content, edit videos, and plan campaigns that are clear, thoughtful, and made for real audiences.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="cta-button">Contact Me</a>
          <a href={cvFile} download className="download-button">Download CV</a>
        </div>
      </div>
      <div className="hero-image">
        <img src={profileImg} alt="Marwa Profile" />
      </div>
    </section>
  );
};

export default Hero;
