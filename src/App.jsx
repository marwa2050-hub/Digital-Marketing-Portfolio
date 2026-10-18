import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Graphics from "./pages/Graphics";
import ContactForm from "./components/ContactForm";
import FeedbackForm from "./components/FeedbackForm";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Confetti from "./components/Confetti";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [showConfetti, setShowConfetti] = useState(false);
  const location = useLocation();

  // اعمال تم روی html و ذخیره در localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Confetti برای تم Ocean
  useEffect(() => {
    if (theme === "ocean") {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [theme]);

  return (
    <>
      {showConfetti && <Confetti />}
      <div className="app">
        <Navbar theme={theme} onThemeChange={setTheme} />
        <main className="main-content">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <Home />
                  </motion.div>
                }
              />
              <Route
                path="/about"
                element={
                  <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <AboutPage />
                  </motion.div>
                }
              />
              <Route
                path="/projects"
                element={
                  <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <Projects />
                  </motion.div>
                }
              />
              <Route
                path="/projects/:id"
                element={
                  <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <ProjectDetails />
                  </motion.div>
                }
              />
              <Route
                path="/graphics"
                element={
                  <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <Graphics />
                  </motion.div>
                }
              />
              <Route
                path="/contact"
                element={
                  <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <ContactForm />
                  </motion.div>
                }
              />
              <Route
                path="/feedback"
                element={
                  <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <FeedbackForm />
                  </motion.div>
                }
              />
              <Route
                path="*"
                element={
                  <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <NotFound />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
