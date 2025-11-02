import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaUser,
  FaComment,
} from "react-icons/fa";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "rajeshelluru143@gmail.com",
      action: () => {
        window.location.href =
          "mailto:rajeshelluru143@gmail.com?subject=Let's Work Together&body=Hi Rajesh, I'd like to discuss a project with you...";
      },
      color: "from-red-500 to-pink-500",
      copyable: true,
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Nandyala, Andhra Pradesh, India",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+91 9346145244",
      action: () => {
        window.location.href = "tel:+919346145244";
      },
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      url: "https://github.com/rajeshlru",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/rajesh-elluru-97ba6b356",
      color: "from-blue-600 to-blue-800",
    },
  ];

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("rajeshelluru143@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendMessage = (e) => {
    e.preventDefault();

    const subject = `Message from ${formData.name} - Portfolio Contact`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}

---
This message was sent from your portfolio contact form.`;

    window.location.href = `mailto:rajeshelluru143@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via--900 to-slate-700 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-float delay-4000"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
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
            className="text-6xl text-blue-400 mt-5 md:mt-10 lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 bg-clip-text"
          >
            Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to bring your ideas to life? Let's connect and create
            something extraordinary together.
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-12"
          >
            <div className="space-y-8">
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Get In Touch
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.label}
                      variants={cardVariants}
                      whileHover="hover"
                      className="group cursor-pointer"
                      onClick={item.action}
                    >
                      <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl border border-white/10 p-6 shadow-2xl transition-all duration-300 group-hover:border-white/20">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div
                              className={`bg-gradient-to-br ${item.color} rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300`}
                            >
                              <item.icon className="text-2xl text-white" />
                            </div>
                            <div>
                              <div className="text-gray-400 text-sm font-medium">
                                {item.label}
                              </div>
                              <div className="text-white font-semibold text-lg">
                                {item.value}
                              </div>
                            </div>
                          </div>
                          {item.copyable && (
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={(e) => {
                                e.stopPropagation();
                                copyEmailToClipboard();
                              }}
                              className="bg-white/10 hover:bg-white/20 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300"
                            >
                              {copiedEmail ? "Copied!" : "Copy"}
                            </motion.button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-6 mt-10 text-center text-gray-300">
                  Connect With Me
                </h3>
                <div className="flex space-x-4 justify-center">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={cardVariants}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      className={`bg-gradient-to-br ${social.color} rounded-2xl p-4 border border-white/10 backdrop-blur-sm transition-all duration-300 shadow-2xl hover:shadow-xl`}
                    >
                      <social.icon className="text-2xl text-white" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent text-center">
                  Send Message
                </h2>

                <form onSubmit={sendMessage} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="flex items-center space-x-3 text-gray-300 mb-3 font-medium">
                      <FaUser className="text-cyan-400" />
                      <span>Your Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                      placeholder="Enter your full name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="flex items-center space-x-3 text-gray-300 mb-3 font-medium">
                      <FaEnvelope className="text-purple-400" />
                      <span>Email Address</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                      placeholder="Enter your email address"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="flex items-center space-x-3 text-gray-300 mb-3 font-medium">
                      <FaPhone className="text-green-400" />
                      <span>Phone Number</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-green-400/50 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                      placeholder="Enter your phone number (optional)"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="flex items-center space-x-3 text-gray-300 mb-3 font-medium">
                      <FaComment className="text-orange-400" />
                      <span>Your Message</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400/50 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 rounded-2xl py-5 px-8 text-white font-bold text-xl transition-all duration-300 shadow-2xl flex items-center justify-center space-x-4 group mt-6"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FaPaperPlane className="text-2xl" />
                    </motion.div>
                    <span>Send Message</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-orange-500/10 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
              <h3 className="text-3xl font-bold mb-4 text-white">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                Whether you have a project in mind or just want to say hello,
                I'd love to hear from you. Let's turn your ideas into reality
                with cutting-edge technology and stunning design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    (window.location.href = "mailto:rajeshelluru143@gmail.com")
                  }
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-2xl"
                >
                  Send Email Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
