import React, { useState, useEffect } from "react";
import "./AboutPage.css";
import profilePic from "../assets/profile2.jpg";

const statsData = [
  { id: 1, label: "Projects", value: 3 },
  { id: 2, label: "Clients", value: 2 },
  { id: 3, label: "Experience (yrs)", value: 1 },
];

const skills = [
  { name: "Canva", level: 90 },
  { name: "Photoshop", level: 80 },
  { name: "Adobe Express", level: 85 },
  { name: "Premiere Pro", level: 70 },
  { name: "Social Media Design", level: 85 },
  { name: "Video Editing", level: 75 },
  { name: "Copywriting", level: 75 },
  { name: "AI Tools", level: 80 },
];

const hobbies = [
  { name: "Design", emoji: "🎨" },
  { name: "Home Aesthetics", emoji: "🏡" },
  { name: "Skincare & DIY Beauty", emoji: "🧴" },
  { name: "Learning New Tools", emoji: "💡" },
];

const timeline = [
  { year: "2025", event: "Completed a web development bootcamp" },
  { year: "2025", event: "Designed Amazon listing visuals for Urban London and Cassia London" },
  { year: "2026", event: "Joined the WRF Digital Marketing and AI Fellowship" },
  { year: "2026", event: "Created the Marwa Coffee brand concept and Marwa Design Studio on Instagram" },
];
const AboutPage = () => {
  const [animatedStats, setAnimatedStats] = useState(statsData.map(() => 0));
  const [animatedSkills, setAnimatedSkills] = useState(skills.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedStats(statsData.map(s => s.value)), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedSkills(skills.map(s => s.level)), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="about-page">
      <div className="about-grid">
        {/* Left Column */}
        <div className="about-left">
          <h2 className="title">About Me</h2>
         <p className="intro">
  Hi, I'm Marwa, a digital marketer and designer. I create social media content, product visuals and brand designs, and I edit short videos. I taught myself graphic design, and I enjoy turning an idea into something people want to look at.
</p>
<p className="goals">
  <strong>Goals:</strong> Grow as a digital marketer, take on more brand and e-commerce projects, and keep improving my design, video and strategy skills.
</p>

          {/* Stats */}
          <div className="stats-grid">
            {statsData.map((stat, i) => (
              <div key={stat.id} className="stat-card">
                <span className="stat-value">{animatedStats[i]}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Skills */}
          <h3 className="subtitle">Skills</h3>
          <div className="skills-circle-grid">
            {skills.map((skill, i) => (
              <div key={i} className="skill-circle">
                <svg>
                  <circle className="circle-bg" cx="40" cy="40" r="36"></circle>
                  <circle
                    className="circle"
                    cx="40"
                    cy="40"
                    r="36"
                    strokeDasharray={`${(animatedSkills[i] / 100) * 226} 226`}
                  ></circle>
                  <text x="40" y="42">{skill.level}%</text>
                </svg>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>

          {/* Hobbies */}
          <h3 className="subtitle">Hobbies</h3>
          <div className="hobbies-grid">
            {hobbies.map((hobby, i) => (
              <div key={i} className="hobby-card">
                <span className="emoji">{hobby.emoji}</span>
                <span>{hobby.name}</span>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <h3 className="subtitle">Timeline</h3>
          <ul className="timeline">
            {timeline.map((t, i) => (
              <li key={i}>
                <span className="timeline-year">{t.year}</span>
                <span className="timeline-event">{t.event}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div className="about-right">
          <img src={profilePic} alt="Marwa" className="profile-pic"/>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
