import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Body from "./components/Body";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import PortfolioIntro from "./components/PortfolioIntro";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setTimeout(() => setShowPortfolio(true), 500);
  };

  return (
    <>
      <AnimatePresence>
        {showIntro && <PortfolioIntro onIntroComplete={handleIntroComplete} />}
      </AnimatePresence>

      <AnimatePresence>
        {showPortfolio && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <Router>
              <Routes>
                <Route path="/" element={<Body />}>
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="projects" element={<Projects />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="achievements" element={<Achievements />} />
                </Route>
              </Routes>
            </Router>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
