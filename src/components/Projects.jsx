import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaFire,
  FaFilm,
  FaYoutube,
  FaHeart,
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaRocket,
  FaStar,
  FaShieldAlt,
  FaBolt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiJest,
  SiFirebase,
  SiGoogle,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "FoodOrdering App",
      description:
        "🍔 A dynamic food delivery platform built with React and Parcel, fetching real-time restaurant and menu data from Swiggy APIs. It offers a lightning-fast, seamless ordering experience with optimized routing, an intuitive shopping cart, and smooth state management — fully tested with Jest and React Testing Library.",
      tech: ["React", "Parcel", "Swiggy API", "Jest", "RTL"],
      icons: [FaReact, FaBolt, SiJest],
      github: "https://github.com/rajeshlru/FoodOrderingApp",
      live: "#",
      color: "from-orange-500 to-red-500",
      accent: "orange",
      features: [
        "Real-time Data",
        "Optimized Routing",
        "Shopping Cart",
        "Fully Tested",
      ],
      stats: { performance: 95, complexity: 80, impact: 90 },
      achievements: ["Zero dependencies", "Lightning fast", "Production ready"],
      image:
        "https://raw.githubusercontent.com/rajeshlru/Namaste-React/refs/heads/main/Home%20page.png",
    },
    {
      id: 2,
      title: "Movies GPT",
      description:
        "🎬 Movies-GPT – A Netflix-style web app to discover, watch, and get AI-powered movie recommendations. Built with TMDB API, Firebase, and Gemini AI, featuring search debouncing for fast, optimized results. Enjoy a seamless, intelligent, and personalized movie experience like never before.",
      tech: ["React", "TMDB API", "Firebase", "Gemini AI", "Tailwind"],
      icons: [FaFilm, SiFirebase, SiGoogle, SiTailwindcss],
      github: "https://github.com/rajeshlru/Movies-GPT",
      live: "#",
      color: "from-purple-500 to-pink-500",
      accent: "purple",
      features: [
        "AI Recommendations",
        "Search Debouncing",
        "Netflix-style UI",
        "Personalized",
      ],
      stats: { performance: 88, complexity: 85, impact: 92 },
      achievements: ["AI Integration", "Real-time Search", "Movie Discovery"],
      image:
        "https://raw.githubusercontent.com/rajeshlru/Movies-GPT/refs/heads/main/HOME%20PAGE.png",
    },
    {
      id: 3,
      title: "My YouTube",
      description:
        "📺 Not your average YouTube clone! A fully functional YouTube clone built with React JS & Tailwind — features real-time search with debouncing, live chat using API polling, and nested comments. Powered by the YouTube Data API.",
      tech: ["React", "Tailwind", "YouTube API", "Real-time Chat"],
      icons: [FaYoutube, SiTailwindcss, FaBolt, FaCode],
      github: "https://github.com/rajeshlru/My-Youtube",
      live: "#",
      color: "from-red-500 to-red-700",
      accent: "red",
      features: [
        "Real-time Search",
        "Live Chat",
        "Nested Comments",
        "YouTube API",
      ],
      stats: { performance: 90, complexity: 75, impact: 85 },
      achievements: ["API Polling", "Debounced Search", "Nested Comments"],
      image:
        "https://raw.githubusercontent.com/rajeshlru/My-Youtube/refs/heads/main/WhatsApp%20Image%202025-07-20%20at%2018.13.20_0282fc02.jpg",
    },
    {
      id: 4,
      title: "DevTinder Backend",
      description:
        "🚀 The powerful, scalable, and secure backend engine that fuels the DevTinder platform. Built with Node.js & Express. A robust, RESTful API server that handles everything from user authentication and profile management to the core 'swipe' logic and real-time matching system.",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
      icons: [FaNodeJs, SiExpress, SiMongodb, FaShieldAlt],
      github: "https://github.com/rajeshlru/Devtinder-Backend",
      live: "#",
      color: "from-green-500 to-emerald-500",
      accent: "green",
      features: [
        "Authentication",
        "Real-time Matching",
        "RESTful API",
        "Scalable",
      ],
      stats: { performance: 92, complexity: 90, impact: 88 },
      achievements: ["Secure Auth", "Scalable Architecture", "Real-time Logic"],
      image:
        "https://raw.githubusercontent.com/rajeshlru/Devtinder-Backend/refs/heads/main/render-bkd.jpg",
    },
    {
      id: 5,
      title: "DevTinder Frontend",
      description:
        "🎯 DevTinder – A Tinder-style web app for developers to connect, chat, and match based on skills and interests. Built with React, Redux, Tailwind CSS, and Axios, featuring swipe cards, real-time chat, and responsive design.",
      tech: ["React", "Redux", "Tailwind", "Axios", "WebSockets"],
      icons: [FaReact, SiRedux, SiTailwindcss, FaMobileAlt],
      github: "https://github.com/rajeshlru/DevTinder-Frontend",
      live: "#",
      color: "from-blue-500 to-cyan-500",
      accent: "blue",
      features: ["Swipe Cards", "Real-time Chat", "Redux State", "Responsive"],
      stats: { performance: 87, complexity: 82, impact: 95 },
      achievements: ["Tinder-style UI", "Real-time Features", "Modern Stack"],
      image:
        "https://raw.githubusercontent.com/rajeshlru/DevTinder-Frontend/main/DevTinder-Login.jpg",
    },
  ];

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

  const scrollVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via--900 to-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-float delay-4000"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl lg:text-6xl mt-5 md:mt-10 font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 bg-clip-text text-transparent"
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Crafting digital experiences that blend innovative technology with
            stunning design. Each project tells a story of passion, precision,
            and performance.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-8"
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="group cursor-pointer"
              onClick={() => {
                setActiveProject(index);
                setIsModalOpen(true);
              }}
            >
              <div className="bg-black/70 backdrop-blur-xl rounded-3xl border border-white/10 p-6 shadow-2xl h-full transition-all duration-300 group-hover:border-white/20 overflow-hidden">
                <div className="relative h-48 rounded-2xl mb-6 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x200/1f2937/ffffff?text=${encodeURIComponent(
                        project.title
                      )}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-0"></div>
                  <div className="absolute top-4 left-4 flex space-x-2">
                    {project.icons.map((Icon, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white/20 backdrop-blur-sm rounded-lg p-2"
                      >
                        <Icon className="text-white text-lg" />
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center"
                  >
                    <div className="text-green-500 text-lg font-semibold text-center px-4">
                      Click to View Details
                    </div>
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400/90 mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 hover:bg-cyan-950 bg-white/10 rounded-full text-xs font-medium text-gray-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-green-500/35 hover:bg-white/20 border border-white/10 rounded-xl py-3 px-4 text-center transition-all duration-300 flex items-center justify-center space-x-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub className="text-lg" />
                    <span className="font-semibold">Code</span>
                  </motion.a>

                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-400 hover:from-cyan-600 hover:to-blue-600 rounded-xl py-3 px-4 text-center transition-all duration-300 flex items-center justify-center space-x-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    <span className="font-semibold">Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="bg-gradient-to-r from-cyan-500 to-purple-400 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-2xl flex items-center space-x-3 mx-auto"
            >
              <span>{showAllProjects ? "Show Less" : "Show More"}</span>
              {showAllProjects ? <FaChevronUp /> : <FaChevronDown />}
            </motion.button>
          </motion.div>
        )}

        <motion.div
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:w-1/2 mx-auto bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-orange-500/10 backdrop-blur-xl rounded-3xl border border-white/10 p-8 mb-16"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Let's collaborate to turn your ideas into exceptional digital
              experiences that make an impact.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gray-900 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 border border-transparent bg-clip-padding group"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/rajesh-elluru-97ba6b356/")
              }
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 p-0.5 -m-0.5"></div>
              <div className="absolute inset-0 rounded-2xl bg-gray-900 group-hover:bg-transparent transition-all duration-300"></div>
              <span className="relative z-10 flex items-center space-x-3">
                <FaRocket className="text-lg" />
                <span>Start a Project Together</span>{" "}
                <FaHeart className="text-lg" />
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-gray-900/95 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl max-w-6xl w-full max-h-[85vh] overflow-y-auto custom-scrollbar relative"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(239, 68, 68, 0.2)",
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsModalOpen(false)}
                className="sticky top-4 right-4 ml-auto bg-red-500/20 hover:bg-red-500/30 border border-red-400/30 rounded-2xl w-12 h-12 flex items-center justify-center text-white text-2xl font-light transition-all duration-300 backdrop-blur-sm z-50 float-right m-4"
                style={{ position: "sticky", top: "1rem", right: "1rem" }}
              >
                ×
              </motion.button>

              {projects[activeProject] && (
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative h-120 rounded-t-3xl overflow-hidden"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url('${projects[activeProject].image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-gray-900/40"></div>
                    </div>

                    <div className="relative z-10 h-full flex flex-col justify-end p-8">
                      <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl font-bold text-white mb-4 leading-tight drop-shadow-2xl"
                      >
                        {projects[activeProject].title}
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-400 text-lg leading-relaxed max-w-3xl drop-shadow-2xl"
                      >
                        {projects[activeProject].description}
                      </motion.p>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="absolute top-6 right-6 flex space-x-3"
                    >
                      {projects[activeProject].icons.map((Icon, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{
                            delay: 0.6 + index * 0.2,
                            type: "spring",
                          }}
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          className="bg-white/20 backdrop-blur-lg rounded-2xl p-3 border border-white/30 shadow-2xl"
                        >
                          <Icon className="text-2xl text-white" />
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>

                  <div className="p-8">
                    <div className="grid xl:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 }}
                          className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl border border-white/10 px-8 py-2 pt-4 shadow-2xl relative overflow-hidden group hover:border-cyan-400/30 transition-all duration-500"
                        >
                          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-cyan-500 to-purple-500  "></div>
                          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-sm opacity-0 "></div>
                          <h3 className="text-2xl font-bold mb-6 text-red-400 flex items-center relative z-10">
                            <FaBolt className="text-cyan-700 mr-3 group-hover:scale-110 transition-transform duration-300" />
                            Key Features
                          </h3>
                          <div className=" relative z-10">
                            {projects[activeProject].features.map(
                              (feature, index) => (
                                <motion.div
                                  key={feature}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.8 + index * 0.1 }}
                                  className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 group/feature border border-transparent hover:border-cyan-400/20"
                                >
                                  <motion.div
                                    whileHover={{ scale: 1.3, rotate: 180 }}
                                    transition={{ duration: 0.4 }}
                                    className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0"
                                  ></motion.div>
                                  <span className="text-gray-200 text-lg leading-relaxed group-hover/feature:text-white transition-colors duration-300">
                                    {feature}
                                  </span>
                                </motion.div>
                              )
                            )}
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.9 }}
                          className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl border border-white/10  px-8 py-2 pt-4 shadow-2xl relative overflow-hidden group hover:border-yellow-400/30 transition-all duration-500"
                        >
                          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-yellow-500 to-orange-500 "></div>
                          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl blur-sm opacity-0 "></div>
                          <h3 className="text-2xl font-bold mb-6 text-green-300 flex items-center relative z-10">
                            <FaStar className="text-yellow-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
                            Key Achievements
                          </h3>
                          <div className="space-y-1 relative z-10">
                            {projects[activeProject].achievements.map(
                              (achievement, index) => (
                                <motion.div
                                  key={achievement}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 1.0 + index * 0.1 }}
                                  className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 group/achievement border border-transparent hover:border-yellow-400/20"
                                >
                                  <motion.div
                                    whileHover={{ scale: 1.5, rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                  >
                                    <FaStar className="text-yellow-400 text-sm mt-1 flex-shrink-0" />
                                  </motion.div>
                                  <span className="text-gray-200 text-lg leading-relaxed group-hover/achievement:text-white transition-colors duration-300">
                                    {achievement}
                                  </span>
                                </motion.div>
                              )
                            )}
                          </div>
                        </motion.div>
                      </div>

                      <div className="space-y-6">
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 }}
                          className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl border border-white/10 p-8 pt-4 shadow-2xl relative overflow-hidden group hover:border-green-400/30 transition-all duration-500"
                        >
                          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-green-500 to-emerald-500 group-hover:from-green-400 "></div>
                          <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-sm opacity-0 "></div>
                          <h3 className="text-2xl font-bold mb-6 text-orange-300 flex items-center relative z-10">
                            <FaCode className="text-green-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
                            Technology Stack
                          </h3>
                          <div className="flex flex-wrap gap-4 relative z-10">
                            {projects[activeProject].tech.map((tech, index) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.9 + index * 0.1 }}
                                whileHover={{ scale: 1.15, y: -5 }}
                                className="px-5 py-3 bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 rounded-2xl text-base font-semibold text-gray-200 border border-white/10 backdrop-blur-sm transition-all duration-300 cursor-default shadow-lg hover:shadow-2xl hover:border-green-400/30"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.1 }}
                          className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-3xl border border-cyan-400/20 p-8 text-center group hover:border-cyan-400/40 transition-all duration-500 relative overflow-hidden"
                        >
                          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-sm opacity-0 "></div>
                          <div className="flex items-center justify-center space-x-4 mb-4 relative z-10">
                            <motion.div
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.7, 1, 0.7],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              className="w-4 h-4 bg-green-400 rounded-full"
                            ></motion.div>
                            <span className="text-cyan-300 font-bold text-xl">
                              Live Demo Available
                            </span>
                          </div>
                          <p className="text-gray-300 text-lg relative z-10">
                            Click the Live Demo button to experience the project
                            in action
                          </p>
                        </motion.div>
                      </div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                      className="flex space-x-4 mt-8"
                    >
                      <motion.a
                        href={projects[activeProject].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-gray-900/80 border border-gray-600/50 hover:border-cyan-400/40 rounded-xl py-4 px-6 text-center transition-all duration-300 flex items-center justify-center space-x-3 group backdrop-blur-sm shadow-lg"
                      >
                        <motion.div
                          whileHover={{ rotate: 12 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaGithub className="text-xl text-gray-300 group-hover:text-cyan-400 transition-colors duration-300" />
                        </motion.div>
                        <span className="font-semibold text-lg text-gray-200 group-hover:text-white transition-colors duration-300">
                          Source Code
                        </span>
                      </motion.a>

                      <motion.a
                        href={projects[activeProject].live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-xl py-4 px-6 text-center transition-all duration-300 flex items-center justify-center space-x-3 group shadow-lg"
                      >
                        <motion.div
                          whileHover={{ x: 2 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <FaExternalLinkAlt className="text-xl text-white" />
                        </motion.div>
                        <span className="font-semibold text-lg text-white">
                          Live Demo
                        </span>
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
