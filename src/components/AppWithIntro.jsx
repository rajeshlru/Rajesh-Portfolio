import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./Home";

const PortfolioIntro = ({ onIntroComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [nameLetters, setNameLetters] = useState([]);
  const [titles, setTitles] = useState([]);

  const fullName = "Rajesh";
  const titleSequence = [
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
    "Data Science Enthusiast",
  ];

  useEffect(() => {
    if (currentStep <= fullName.length) {
      const timer = setTimeout(() => {
        if (currentStep < fullName.length) {
          setNameLetters((prev) => [
            ...prev,
            {
              letter: fullName[currentStep],
              id: currentStep,
              position: {
                x: Math.random() * window.innerWidth - 100,
                y: Math.random() * window.innerHeight - 50,
              },
            },
          ]);
        }
        setCurrentStep((prev) => prev + 1);
      }, 600);

      return () => clearTimeout(timer);
    } else if (currentStep === fullName.length + 1) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (
      currentStep > fullName.length + 1 &&
      currentStep <= fullName.length + 1 + titleSequence.length
    ) {
      const titleIndex = currentStep - (fullName.length + 2);
      if (titleIndex < titleSequence.length) {
        const timer = setTimeout(() => {
          setTitles((prev) => [
            ...prev,
            {
              text: titleSequence[titleIndex],
              id: titleIndex,
            },
          ]);
          setCurrentStep((prev) => prev + 1);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } else if (currentStep === fullName.length + 2 + titleSequence.length) {
      const timer = setTimeout(() => {
        onIntroComplete();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentStep, onIntroComplete]);

  const FloatingShapes = () => (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-3/4 w-64 h-64 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 z-50 overflow-hidden">
      <FloatingShapes />

      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence>
          {nameLetters.map((letterObj, index) => (
            <motion.div
              key={letterObj.id}
              className="absolute text-8xl md:text-9xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 bg-clip-text text-transparent"
              style={{
                left: letterObj.position.x,
                top: letterObj.position.y,
              }}
              initial={{
                opacity: 0,
                scale: 0,
                rotate: -180,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                x:
                  currentStep > fullName.length
                    ? -((index - fullName.length / 2) * 80)
                    : 0,
                y: currentStep > fullName.length ? -200 : 0,
              }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 200,
                delay: index * 0.1,
              }}
            >
              {letterObj.letter}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence>
          {titles.map((titleObj) => (
            <motion.div
              key={titleObj.id}
              className="absolute"
              initial={{
                opacity: 0,
                scale: 0,
                y: 100,
              }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0, 1.2, 1, 0],
                y: 0,
              }}
              transition={{
                duration: 2.5,
                times: [0, 0.2, 0.8, 1],
              }}
              onAnimationComplete={() => {
                if (titleObj.id === titleSequence.length - 1) {
                  setTimeout(() => {
                    onIntroComplete();
                  }, 200);
                }
              }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white text-center">
                {titleObj.text}
              </h2>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        whileHover={{ opacity: 1 }}
        onClick={onIntroComplete}
        className="absolute bottom-8 right-8 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white text-sm font-medium transition-all duration-300 hover:bg-white/20"
      >
        Skip Intro
      </motion.button>
    </div>
  );
};

const AppWithIntro = () => {
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

      {showPortfolio && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Home />
        </motion.div>
      )}
    </>
  );
};

export default AppWithIntro;
