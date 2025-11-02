import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaArrowUp,
  FaCode,
  FaCoffee,
  FaRegSmile,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/rajeshlru",
      label: "GitHub",
      color: "hover:text-purple-400",
      bgColor: "hover:bg-purple-500/20",
      delay: 0.1,
    },
    {
      icon: FaLinkedin,
      url: "https://linkedin.com/in/rajesh-elluru-97ba6b356",
      label: "LinkedIn",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/20",
      delay: 0.2,
    },
    // {
    //   icon: SiLeetcode,
    //   url: "#",
    //   label: "LeetCode",
    //   color: "hover:text-orange-400",
    //   bgColor: "hover:bg-orange-500/20",
    //   delay: 0.3,
    // },

    {
      icon: FaEnvelope,
      url: "mailto:rajeshelluru143@gmail.com",
      label: "Email",
      color: "hover:text-red-400",
      bgColor: "hover:bg-red-500/20",
      delay: 0.5,
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <footer className="relative md:px-25 bg-gradient-to-br from-gray-950 via-gray-950 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-float delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/3 w-28 h-28 bg-green-500/10 rounded-full blur-3xl animate-float delay-4000"></div>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
          >
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <motion.h3 className="text-3xl px-5 font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Rajesh Elluru
              </motion.h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-md">
                Full Stack Developer passionate about creating digital
                experiences that blend innovative technology with stunning
                design. Let's build something amazing together!
              </p>
              <div className="flex items-center space-x-4 text-gray-400">
                <motion.div
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaCode className="text-cyan-400" />
                  <span>With</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaCoffee className="text-orange-400" />
                  <span>&</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaHeart className="text-red-400 animate-pulse" />
                  <span>By Rajesh</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li key={link.name} whileHover={{ x: 5 }}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center space-x-2 group"
                      onClick={() => window.scrollTo(0, 0)} // Scroll to top on click
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span>{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-6 text-white">
                Let's Connect
              </h4>
              <p className="text-gray-300 mb-6">
                Ready to start your next project? Let's create something
                extraordinary together!
              </p>

              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true }}
                    transition={{ delay: social.delay }}
                    className={`bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/10 transition-all duration-300 ${social.color} ${social.bgColor} shadow-lg`}
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="mailto:rajeshelluru143@gmail.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 shadow-lg"
              >
                <FaEnvelope />
                <span>Get In Touch</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-white/10 pt-8 mt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-300">
                <span>&copy; {currentYear} Rajesh Elluru</span>
                <div className="flex items-center space-x-1">
                  <span>Made with</span>
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaHeart className="text-red-400" />
                  </motion.div>
                  <span>in India</span>
                  <FaRegSmile className="text-yellow-400 ml-1" />
                </div>
              </div>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center space-x-2 bg-white/10 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/30 rounded-2xl py-3 px-6 text-gray-300 hover:text-cyan-400 transition-all duration-300 backdrop-blur-sm shadow-lg"
              >
                <span>Back to Top</span>
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowUp className="text-sm" />
                </motion.div>
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-4 right-4 opacity-20">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-6xl"
          >
            🚀
          </motion.div>
        </div>

        <div className="absolute top-4 left-4 opacity-20">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="text-4xl"
          >
            ⚡
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 opacity-60"></div>
    </footer>
  );
};

export default Footer;
