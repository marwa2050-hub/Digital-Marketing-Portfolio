// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";
import "./Home.css";
const certificateModules = import.meta.glob("../assets/certificates/*.{jpg,jpeg,png}", { eager: true, import: "default" });
const certificates = Object.values(certificateModules);

const Home = () => {
  const quotes = [
  "Good design gets attention, and clear words keep it.",
  "A strong campaign starts with knowing who you are talking to.",
  "Every post should give people a reason to stop scrolling.",
  "Consistency builds trust, and trust builds a brand."
];
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <Hero />

      <motion.section
        className="quote-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="quote-text">“{quote}”</p>
      </motion.section>

      {/* Certificates */}
      <motion.section
        className="certificates-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>My Certificates</h2>
        <div className="certificates-grid">
         {certificates.map((img, i) => (
            <div key={i} className="certificate-card">
              <img src={img} alt={`Certificate ${i+1}`} />
            </div>
          ))}
        </div>
      </motion.section>

      {/* Services */}
      <motion.section
        className="services-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2>What I Do</h2>
        <div className="services-grid">
        <div className="service-card">🎨 Social Media Design</div>
<div className="service-card">🎬 Video Editing & Reels</div>
<div className="service-card">📈 Content & Campaign Strategy</div>
        </div>
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        className="techstack-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2>Tech Stack</h2>
        <div className="tech-grid">
         <div className="tech-card">Canva</div>
<div className="tech-card">Adobe Express</div>
<div className="tech-card">Adobe Premiere Pro</div>
<div className="tech-card">CapCut</div>
<div className="tech-card">Figma</div>
<div className="tech-card">Meta Business Suite</div>
<div className="tech-card">Google Analytics</div>
<div className="tech-card">AI Tools</div>
        </div>
      </motion.section>

      {/* Fun Facts */}
      <motion.section
        className="funfacts-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="funfact-card">🕒 3+ Years of Experience</div>
        <div className="funfact-card">🚀 15+ Completed Projects</div>
        <div className="funfact-card">☕ 1000+ Cups of Coffee</div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="cta-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2>Interested in working together?</h2>
        <a href="#contact" className="cta-button">Contact Me</a>
      </motion.section>
    </div>
  );
};

export default Home;
