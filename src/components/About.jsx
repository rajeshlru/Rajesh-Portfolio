import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const getSkillIcon = (skillName) => {
    const icons = {
      "React.js": "⚛️",
      "Next.js": "▲",
      "JavaScript (ES6+)": "🟨",
      TypeScript: "🔷",
      "HTML5 & CSS3": "🌐",
      "Tailwind CSS": "💨",
      "Redux/State Management": "🔄",
      "Responsive Design": "📱",
      Firebase: "🔥",
      "Material-UI": "🧩",

      "Node.js": "🟢",
      "Express.js": "⚡",
      MongoDB: "🍃",
      "SQL Databases": "🗃️",
      "RESTful APIs": "🔗",
      "Authentication & Authorization": "🔐",
      "Server Deployment": "🚀",
      "API Integration": "🔌",

      "Figma UI/UX Design": "🎨",
      "Adobe Creative Suite": "✏️",
      Prototyping: "📐",
      "User Research": "🔍",
      Wireframing: "📝",
      "Design Systems": "🎯",
      "Interaction Design": "🖱️",
      "Visual Design": "✨",

      JavaScript: "🟨",
      Python: "🐍",
      Java: "☕",
      C: "©️",
      "C++": "⚙️",
      SQL: "🗃️",
      PHP: "🐘",
    };
    return icons[skillName] || "💼";
  };

  const getSkillDescription = (skillName) => {
    const descriptions = {
      "React.js":
        "Building dynamic and interactive user interfaces with modern React patterns",
      "Next.js": "Server-side rendering and full-stack React applications",
      "JavaScript (ES6+)":
        "Modern JavaScript features and advanced programming concepts",
      TypeScript: "Type-safe JavaScript development for better code quality",
      "HTML5 & CSS3":
        "Semantic markup and modern CSS features including Grid and Flexbox",
      "Tailwind CSS": "Utility-first CSS framework for rapid UI development",
      "Redux/State Management":
        "Managing application state with predictable state containers",
      "Responsive Design":
        "Creating websites that work perfectly on all devices",
      Firebase:
        "Google's platform for web and mobile app development with real-time database",
      "Material-UI":
        "React component library implementing Google's Material Design",

      "Node.js":
        "JavaScript runtime for building scalable server-side applications",
      "Express.js": "Fast, unopinionated web framework for Node.js",
      MongoDB: "NoSQL database for modern web applications",
      "SQL Databases": "Relational database management and query optimization",
      "RESTful APIs": "Designing and consuming REST APIs with best practices",
      "Authentication & Authorization":
        "Secure user authentication and access control systems",
      "Server Deployment":
        "Deploying applications to cloud platforms and servers",
      "API Integration":
        "Connecting and integrating third-party APIs and services",

      "Figma UI/UX Design": "Creating user-centered designs and prototypes",
      "Adobe Creative Suite":
        "Professional design tools for visual content creation",
      Prototyping: "Building interactive prototypes to test and validate ideas",
      "User Research":
        "Understanding user needs and behaviors through research methods",
      Wireframing: "Creating structural blueprints for digital products",
      "Design Systems": "Building consistent and scalable design frameworks",
      "Interaction Design":
        "Designing meaningful interactions between users and products",
      "Visual Design":
        "Creating aesthetically pleasing and functional visual interfaces",

      JavaScript:
        "Versatile programming language for web development, both frontend and backend",

      Python:
        "High-level programming language known for simplicity and versatility in web dev, data science, and automation",
      Java: "Object-oriented programming language for enterprise applications and Android development",
      C: "Powerful systems programming language for low-level operations and embedded systems",
      "C++":
        "Enhanced version of C with object-oriented features for system software and game development",
      SQL: "Structured Query Language for database management, querying, and operations",
      PHP: "Server-side scripting language specialized for web development and dynamic content",
    };
    return descriptions[skillName] || "Professional skill and expertise";
  };

  const frontendSkills = [
    { name: "React.js", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "HTML5 & CSS3", level: 95 },
    { name: "Redux/State Management", level: 88 },
    { name: "Responsive Design", level: 94 },
    { name: "Firebase", level: 82 },
    { name: "Material-UI", level: 85 },
  ];

  const backendSkills = [
    { name: "Node.js", level: 88 },
    { name: "Express.js", level: 85 },
    { name: "MongoDB", level: 82 },
    { name: "SQL Databases", level: 80 },
    { name: "RESTful APIs", level: 90 },
    { name: "Authentication & Authorization", level: 85 },
    { name: "Server Deployment", level: 83 },
    { name: "API Integration", level: 87 },
  ];

  const creativeSkills = [
    { name: "Figma UI/UX Design", level: 85 },
    { name: "Adobe Creative Suite", level: 78 },
    { name: "User Research", level: 75 },
    { name: "Wireframing", level: 88 },
    { name: "Design Systems", level: 80 },
    { name: "Interaction Design", level: 83 },
    { name: "Visual Design", level: 85 },
  ];
  const programmingLanguages = [
    { name: "JavaScript", level: 92 },
    { name: "Python", level: 78 },
    { name: "Java", level: 75 },
    { name: "C", level: 70 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white overflow-hidden relative">
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-slow delay-2000"></div>
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full blur-3xl animate-float-slow delay-4000"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl lg:text-7xl font-bold pt-14 mb-6 bg-orange-900 bg-clip-text text-transparent">
            About Me
          </h1>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="bg-gray-950 backdrop-blur-xl rounded-3xl border border-white/10 p-8 mb-12 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Professional Summary
            </h2>
            <p className="text-lg text-gray-300 text-center leading-relaxed max-w-4xl mx-auto">
              A passionate and innovative Full Stack Developer with expertise in
              modern web technologies. I specialize in creating responsive,
              user-centric applications with clean code and intuitive design.
              With a strong foundation in both frontend and backend development,
              I bring ideas to life through cutting-edge solutions and seamless
              user experiences. Always eager to learn new technologies and take
              on challenging projects that push the boundaries of what's
              possible.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="bg-gray-900 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl relative overflow-hidden min-h-[420px]"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/10 to-cyan-400/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-tr from-green-400/5 to-cyan-400/5 rounded-full blur-lg"></div>

                <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent relative">
                  Personal Information
                </h3>

                <div className="space-y-6 relative z-10">
                  <div className="group">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="text-gray-400 text-sm font-medium">
                        Name
                      </div>
                    </div>
                    <div className="text-white font-semibold text-lg pl-5 border-l-2 border-green-400/30 hover:border-green-400 transition-all duration-300">
                      Rajesh Elluru
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <div className="text-gray-400 text-sm font-medium">
                        Email
                      </div>
                    </div>
                    <div className="text-white font-semibold pl-5 border-l-2 border-cyan-400/30 hover:border-cyan-400 ">
                      rajeshelluru143@gmail.com
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="text-gray-400 text-sm font-medium">
                        Location
                      </div>
                    </div>
                    <div className="text-white font-semibold pl-5 border-l-2 border-blue-400/30 hover:border-blue-400 transition-all duration-300">
                      Nandyala, Andhra Pradesh, India
                      <div className="text-gray-400 text-sm mt-1 flex items-center"></div>
                    </div>
                  </div>

                  <div className="group pt-2">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <div className="text-gray-400 text-sm font-medium">
                        Education
                      </div>
                    </div>
                    <div className="text-white font-semibold pl-5 border-l-2 border-purple-400/30 hover:border-purple-400 transition-all duration-300">
                      Bachelor's in Computer Science & Engineering (Data
                      Science)
                    </div>
                  </div>
                  <div className="relative my-6">
                    <div className="w-full border-t border-dotted border-gray-600/40"></div>
                  </div>
                  <div className="pt-1">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 rounded-2xl relative overflow-hidden group hover:border-cyan-400/60 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 group-hover:from-cyan-500/15 group-hover:to-blue-500/15 transition-all duration-300"></div>
                      <span className="text-cyan-300 font-semibold text-sm relative z-10">
                        Available for Full-time Opportunities
                      </span>
                    </motion.div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full mt-6"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-900  backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl"
              >
                <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent ">
                  Education
                </h3>
                <div className="space-y-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="border-l-2 border-cyan-400 pl-4"
                  >
                    <div className="text-cyan-400 text-sm font-semibold">
                      2024 - 2028
                    </div>
                    <div className="text-white font-bold">
                      Rajeev Gandhi Memorial College of Engineering and
                      Technology
                    </div>
                    <div className="text-gray-400">
                      Bachelor's Degree in Computer Science & Engineering (Data
                      Science)
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="border-l-2 border-blue-400 pl-4 "
                  >
                    <div className="text-blue-400 text-sm font-semibold">
                      2022 - 2024
                    </div>
                    <div className="text-white font-bold">
                      Raos Junior College - Nandyal
                    </div>
                    <div className="text-gray-400">Intermediate Education</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="border-l-2 border-green-400 pl-4"
                  >
                    <div className="text-green-400 text-sm font-semibold">
                      2022
                    </div>
                    <div className="text-white font-bold">
                      Sri Guru Raja English Medium High School
                    </div>
                    <div className="text-gray-400">
                      Secondary School Certificate
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="bg-gray-900 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl"
              >
                <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent text-center">
                  Technical Skills
                </h3>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex space-x-2 mb-8 bg-white/5 rounded-2xl p-1"
                >
                  {["frontend", "backend", "programming", "creative"].map(
                    (tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                          activeTab === tab
                            ? `${
                                tab === "frontend"
                                  ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                                  : tab === "backend"
                                  ? "bg-gradient-to-r from-green-500 to-emerald-500"
                                  : tab === "programming"
                                  ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                                  : "bg-gradient-to-r from-purple-500 to-pink-500"
                              } text-white shadow-lg`
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    )
                  )}
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {(activeTab === "frontend"
                    ? frontendSkills
                    : activeTab === "backend"
                    ? backendSkills
                    : activeTab === "programming"
                    ? programmingLanguages
                    : creativeSkills
                  ).map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative group"
                    >
                      <div
                        className={`bg-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/10 transition-all duration-300 cursor-pointer h-32 flex flex-col items-center justify-center text-center ${
                          activeTab === "frontend"
                            ? "hover:border-cyan-400/30"
                            : activeTab === "backend"
                            ? "hover:border-green-400/30"
                            : activeTab === "programming"
                            ? "hover:border-yellow-400/30"
                            : "hover:border-purple-400/30"
                        }`}
                      >
                        <div
                          className={`text-3xl mb-2 ${
                            activeTab === "frontend"
                              ? "text-cyan-400"
                              : activeTab === "backend"
                              ? "text-green-400"
                              : activeTab === "programming"
                              ? "text-yellow-400"
                              : "text-purple-400"
                          }`}
                        >
                          {getSkillIcon(skill.name)}
                        </div>

                        <span className="font-semibold text-gray-200 text-sm">
                          {skill.name}
                        </span>
                      </div>

                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block z-10">
                        <div
                          className={`bg-gray-900 border rounded-lg p-3 shadow-2xl backdrop-blur-xl min-w-48 ${
                            activeTab === "frontend"
                              ? "border-cyan-400/30"
                              : activeTab === "backend"
                              ? "border-green-400/30"
                              : activeTab === "programming"
                              ? "border-yellow-400/30"
                              : "border-purple-400/30"
                          }`}
                        >
                          <div
                            className={`font-semibold text-sm mb-1 ${
                              activeTab === "frontend"
                                ? "text-cyan-300"
                                : activeTab === "backend"
                                ? "text-green-300"
                                : activeTab === "programming"
                                ? "text-yellow-300"
                                : "text-purple-300"
                            }`}
                          >
                            {skill.name}
                          </div>
                          <div className="text-gray-300 text-xs">
                            {getSkillDescription(skill.name)}
                          </div>

                          <div
                            className={`absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent ${
                              activeTab === "frontend"
                                ? "border-t-cyan-400/30"
                                : activeTab === "backend"
                                ? "border-t-green-400/30"
                                : activeTab === "programming"
                                ? "border-t-yellow-400/30"
                                : "border-t-purple-400/30"
                            }`}
                          ></div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-900 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl"
              >
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent text-center">
                  My Passion
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-4 text-center border border-cyan-400/20"
                  >
                    <div className="text-3xl mb-2">💻</div>
                    <h4 className="font-bold text-cyan-300 mb-2">Clean Code</h4>
                    <p className="text-gray-300 text-sm">
                      Writing maintainable and scalable solutions
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-4 text-center border border-purple-400/20"
                  >
                    <div className="text-3xl mb-2">🎨</div>
                    <h4 className="font-bold text-purple-300 mb-2">
                      Beautiful UI
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Creating visually stunning interfaces
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-4 text-center border border-green-400/20"
                  >
                    <div className="text-3xl mb-2">🚀</div>
                    <h4 className="font-bold text-green-300 mb-2">
                      Innovation
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Pushing boundaries with new technologies
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-4 text-center border border-orange-400/20"
                  >
                    <div className="text-3xl mb-2">🤝</div>
                    <h4 className="font-bold text-orange-300 mb-2">
                      Collaboration
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Working together to achieve great results
                    </p>
                  </motion.div>
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="text-center text-gray-300 mt-6 text-sm leading-relaxed"
                >
                  I believe in the power of technology to transform ideas into
                  reality. Every line of code is an opportunity to create
                  something meaningful.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
