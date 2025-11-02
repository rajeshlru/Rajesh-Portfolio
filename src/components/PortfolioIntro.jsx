import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PortfolioIntro = ({ onIntroComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [nameLetters, setNameLetters] = useState([]);
  const [titles, setTitles] = useState([]);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(-1);
  const [showFinalTransition, setShowFinalTransition] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const fullName = "Rajesh";
  const titleSequence = [
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
    "Data Science Enthusiast",
  ];

  const titleColors = [
    {
      from: "#22d3ee",
      to: "#3b82f6",
      glow: "0 0 40px rgba(34, 211, 238, 0.6)",
    },
    {
      from: "#10b981",
      to: "#059669",
      glow: "0 0 40px rgba(16, 185, 129, 0.6)",
    },
    {
      from: "#8b5cf6",
      to: "#a855f7",
      glow: "0 0 40px rgba(139, 92, 246, 0.6)",
    },
    {
      from: "#f59e0b",
      to: "#d97706",
      glow: "0 0 40px rgba(245, 158, 11, 0.6)",
    },
  ];

  useEffect(() => {
    const hasSeenIntroThisSession = sessionStorage.getItem(
      "portfolioIntroShown"
    );
    const nav = performance.getEntriesByType("navigation")[0];
    const isReload = nav && nav.type === "reload";

    if (hasSeenIntroThisSession && isReload) {
      onIntroComplete();
      return;
    }

    sessionStorage.setItem("portfolioIntroShown", "true");

    if (currentStep <= fullName.length) {
      const timer = setTimeout(() => {
        if (currentStep < fullName.length) {
          setNameLetters((prev) => [
            ...prev,
            {
              letter: fullName[currentStep],
              id: currentStep,
              startPosition: {
                x: (Math.random() - 0.5) * window.innerWidth,
                y: (Math.random() - 0.5) * window.innerHeight,
              },
              finalPosition: {
                x:
                  (currentStep - (fullName.length - 1) / 2) *
                  (window.innerWidth < 768 ? 50 : 70),
                y: 0,
              },
            },
          ]);
        }
        setCurrentStep((prev) => prev + 1);
      }, 700);

      return () => clearTimeout(timer);
    } else if (currentStep === fullName.length + 1) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (currentStep > fullName.length + 1) {
      const titleStep = currentStep - (fullName.length + 2);

      if (titleStep < titleSequence.length * 2) {
        const timer = setTimeout(
          () => {
            if (titleStep % 2 === 0) {
              const newIndex = titleStep / 2;
              setCurrentTitleIndex(newIndex);
              setTitles((prev) => [
                ...prev,
                {
                  text: titleSequence[newIndex],
                  id: newIndex,
                },
              ]);
            } else {
              setCurrentTitleIndex(-1);
            }

            if (titleStep === titleSequence.length * 2 - 1) {
              setShowFinalTransition(true);
              setIsRedirecting(true);
              setTimeout(() => {
                onIntroComplete();
              }, 3000);
            }

            setCurrentStep((prev) => prev + 1);
          },
          titleStep % 2 === 0 ? 1000 : 2000
        );
        return () => clearTimeout(timer);
      }
    } else if (currentStep === fullName.length + 2 + titleSequence.length * 2) {
      const timer = setTimeout(() => {
        setShowFinalTransition(true);
        setIsRedirecting(true);
        setTimeout(() => {
          onIntroComplete();
        }, 3000);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentStep, onIntroComplete]);
  const EnhancedBackground = () => (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-black"></div>

      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-purple-900/20 to-transparent"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-blue-900/20 to-transparent"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-900/15 to-pink-900/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          x: [-50, 50, -50],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-blue-900/15 to-cyan-900/15 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [30, -30, 30],
          y: [20, -20, 20],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-white/5 text-2xl md:text-3xl font-mono"
          style={{
            left: `${5 + i * 8}%`,
            top: `${15 + Math.random() * 70}%`,
          }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 180, 360],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.7,
          }}
        >
          {["</>", "{}", "[]", "()", "++", "==>"][i % 6]}
        </motion.div>
      ))}

      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              background: `radial-gradient(circle, 
                rgba(255,255,255,0.9) 0%, 
                rgba(255,255,255,0.3) 30%, 
                transparent 70%)`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.3, 1.3, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
            }}
          />
        ))}
      </div>

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 30}%`,
          }}
          animate={{
            x: [0, 800],
            y: [0, 800],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 1.5 + Math.random(),
            repeat: Infinity,
            delay: i * 4 + Math.random() * 6,
          }}
        />
      ))}

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black">
      <EnhancedBackground />

      <AnimatePresence>
        {isRedirecting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 backdrop-blur-3xl flex items-center justify-center"
          >
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ duration: 6, repeat: Infinity, delay: 2 }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 w-56 h-56 bg-orange-500/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{ duration: 10, repeat: Infinity, delay: 4 }}
              />
            </div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 1.5,
              }}
              className="text-center p-8 relative z-10"
            >
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Welcome
                </span>
              </motion.h1>

              <motion.h2
                className="text-xl md:text-3xl lg:text-4xl font-light text-white/80 mb-6"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                to My Portfolio
              </motion.h2>

              <motion.div
                className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8 rounded-full mt-6"
                initial={{ width: 0 }}
                animate={{ width: "8rem" }}
                transition={{ delay: 1.2, duration: 1 }}
              />

              <motion.p
                className="text-lg md:text-xl md:mt-32 text-white/60 mb-8 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                Crafting digital experiences...
              </motion.p>

              <motion.div
                className="flex justify-center space-x-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
              >
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
                    animate={{
                      y: [0, -15, 0],
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>

              <motion.p
                className="text-sm text-white/40 mt-6 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.1 }}
              >
                Loading my experience...
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div className="relative flex justify-center items-center">
          <AnimatePresence>
            {nameLetters.map((letterObj, index) => (
              <motion.div
                key={letterObj.id}
                className="absolute"
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: letterObj.startPosition.x,
                  y: letterObj.startPosition.y,
                  rotate: -360,
                  filter: "blur(20px)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: letterObj.finalPosition.x,
                  y: letterObj.finalPosition.y,
                  rotate: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  x: letterObj.finalPosition.x - 200,
                  y: -300,
                  opacity: 0,
                  scale: 0.5,
                }}
                transition={{
                  type: "spring",
                  damping: 15,
                  stiffness: 120,
                  delay: index * 0.3,
                }}
                style={{
                  transform: `translateX(${
                    currentStep > fullName.length
                      ? -(
                          (index - (fullName.length - 1) / 2) *
                          (window.innerWidth < 768 ? 50 : 70)
                        )
                      : 0
                  }px) translateY(${
                    currentStep > fullName.length
                      ? window.innerWidth < 768
                        ? -80
                        : -120
                      : 0
                  }px)`,
                }}
              >
                <motion.span
                  className={`font-bold text-white
                    ${
                      window.innerWidth < 768
                        ? "text-6xl"
                        : window.innerWidth < 1024
                        ? "text-8xl"
                        : "text-9xl"
                    }`}
                  style={{
                    textShadow: `
                      0 0 20px rgba(168, 85, 247, 0.8),
                      0 0 40px rgba(245, 158, 11, 0.6),
                      0 0 60px rgba(168, 85, 247, 0.4)
                    `,
                    letterSpacing: "0.05em",
                  }}
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, 3, -3, 0],
                    scale: [1, 1.12, 1],
                    textShadow: [
                      "0 0 20px rgba(168, 85, 247, 0.8), 0 0 40px rgba(245, 158, 11, 0.6), 0 0 60px rgba(168, 85, 247, 0.4)",
                      "0 0 30px rgba(168, 85, 247, 0.9), 0 0 50px rgba(245, 158, 11, 0.8), 0 0 70px rgba(168, 85, 247, 0.6)",
                      "0 0 20px rgba(168, 85, 247, 0.8), 0 0 40px rgba(245, 158, 11, 0.6), 0 0 60px rgba(168, 85, 247, 0.4)",
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    scale: 1.4,
                    rotate: 12,
                    filter:
                      "brightness(1.5) drop-shadow(0 0 50px rgba(168, 85, 247, 0.8))",
                  }}
                >
                  {letterObj.letter}
                </motion.span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="absolute inset-0 flex items-start justify-center pt-24 md:pt-36">
        <AnimatePresence mode="wait">
          {titles.map(
            (titleObj) =>
              currentTitleIndex === titleObj.id && (
                <motion.div
                  key={titleObj.id}
                  className="text-center px-4 max-w-4xl mx-auto"
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                    y: 100,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.1,
                    y: -50,
                  }}
                  transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 100,
                  }}
                  onAnimationComplete={() => {
                    if (titleObj.id === titleSequence.length - 1) {
                      setTimeout(() => {
                        setShowFinalTransition(true);
                        setIsRedirecting(true);
                        setTimeout(onIntroComplete, 3000);
                      }, 300);
                    }
                  }}
                >
                  <motion.h2
                    className={`font-bold text-center mb-8
                      ${
                        window.innerWidth < 768
                          ? "text-3xl"
                          : window.innerWidth < 1024
                          ? "text-5xl"
                          : "text-6xl"
                      }`}
                    style={{
                      background: `linear-gradient(45deg, ${
                        titleColors[titleObj.id].from
                      }, ${titleColors[titleObj.id].to})`,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      textShadow: `${titleColors[titleObj.id].glow}, 0 0 60px ${
                        titleColors[titleObj.id].from
                      }40`,
                    }}
                    initial={{ letterSpacing: "2em", opacity: 0, y: 60 }}
                    animate={{ letterSpacing: "0.05em", opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1.5 }}
                  >
                    {titleObj.text}
                  </motion.h2>

                  <div className="flex justify-center space-x-4 mt-10">
                    {titleSequence.map((_, idx) => (
                      <motion.div
                        key={idx}
                        className="w-4 h-4 rounded-full"
                        style={{
                          background:
                            idx <= titleObj.id
                              ? `linear-gradient(45deg, ${titleColors[idx].from}, ${titleColors[idx].to})`
                              : "rgba(255,255,255,0.1)",
                          boxShadow:
                            idx <= titleObj.id
                              ? `0 0 15px ${titleColors[idx].from}`
                              : "none",
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: idx * 0.2 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ delay: 1.5 }}
        whileHover={{
          opacity: 1,
          scale: 1.05,
          backgroundColor: "rgba(255,255,255,0.2)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          sessionStorage.setItem("portfolioIntroShown", "true");
          setIsRedirecting(true);
          setTimeout(() => onIntroComplete(), 1000);
        }}
        className="absolute bottom-6 right-6 px-5 py-2.5 bg-white/15 backdrop-blur-lg border border-white/40 rounded-xl text-white text-sm font-medium transition-all duration-300 shadow-lg flex items-center space-x-2 hover:shadow-cyan-500/30 hover:border-cyan-400/70"
      >
        <span>Skip</span>
        <motion.span
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          →
        </motion.span>
      </motion.button>

      <motion.div
        className="absolute bottom-6 left-6 text-white/90 text-sm backdrop-blur-lg bg-white/15 rounded-xl px-4 py-2 border border-white/30"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        {currentStep > fullName.length + 1 && (
          <div className="flex items-center space-x-3">
            <div className="w-24 bg-white/25 rounded-full h-2">
              <motion.div
                className="h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full shadow-lg"
                initial={{ width: "0%" }}
                animate={{
                  width: `${
                    ((currentStep - fullName.length - 2) /
                      (titleSequence.length * 2)) *
                    100
                  }%`,
                }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <span className="text-xs font-semibold">
              {Math.round(
                ((currentStep - fullName.length - 2) /
                  (titleSequence.length * 2)) *
                  100
              )}
              %
            </span>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default PortfolioIntro;
