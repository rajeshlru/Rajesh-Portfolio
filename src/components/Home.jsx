import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white pt-0">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="min-h-screen flex justify-center items-center">
        <div className="relative z-10 container px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-center">
            <div className="w-full max-w-6xl">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
                <div className="flex-1 flex justify-center items-center order-1 lg:order-2 animate-fade-in-up mt-25 lg:mt-0">
                  <div className="relative group">
                    <div className="absolute inset-0 animate-spin-slow">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-gradient-to-r from-blue-300/40 to-cyan-200/40 rounded-full"
                          style={{
                            top: `${
                              50 + 45 * Math.cos((i * 120 * Math.PI) / 180)
                            }%`,
                            left: `${
                              50 + 45 * Math.sin((i * 120 * Math.PI) / 180)
                            }%`,
                          }}
                        />
                      ))}
                    </div>

                    <div className="absolute inset-0">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-gradient-to-br from-blue-200/30 to-cyan-100/30 rounded-full animate-float-slow"
                          style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${20 + Math.random() * 60}%`,
                            animationDelay: `${i * 0.8}s`,
                            animationDuration: `${4 + Math.random() * 3}s`,
                          }}
                        />
                      ))}
                    </div>

                    <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/10 via-purple-400/5 to-cyan-400/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-1000"></div>

                    <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-full animate-soft-pulse"></div>

                    <div className="relative rounded-full bg-gradient-to-br from-gray-800/90 via-gray-900/90 to-black/90 p-1 shadow-2xl border border-white/5 group-hover:border-cyan-300/20 transition-all duration-700 transform group-hover:scale-[1.02]">
                      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-transparent via-blue-400/5 to-transparent opacity-30 animate-rotate-slow"></div>

                      <div className="relative rounded-full overflow-hidden">
                        <img
                          src="https://media.licdn.com/dms/image/v2/D4E03AQE0ygsSZV0J0g/profile-displayphoto-crop_800_800/B4EZo.Lkq3HEAM-/0/1761979813369?e=1763596800&v=beta&t=13JT5bLOqVHx9cWCkMqvHGW5BhXzhGEG5trqKK8rwdw"
                          alt="Rajesh Elluru"
                          className="w-80 h-80 rounded-full lg:w-96 lg:h-96 object-cover shadow-2xl border border-white/5 group-hover:border-cyan-200/20 transition-all duration-500 transform group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full flex items-end justify-center pb-8">
                          <span className="text-black font-semibold text-lg bg-blue-300 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-4">
                            Rajesh Elluru
                          </span>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      </div>
                    </div>

                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div
                        className="absolute w-24 h-24 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full blur-md transition-transform duration-100"
                        style={{
                          transform:
                            "translate(var(--mouse-x), var(--mouse-y))",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in-up max-w-2xl order-2 lg:order-1 pt-2 lg:pt-40">
                  <div className="space-y-6">
                    <div className="space-y-1 ">
                      <h1 className="text-red-200 ">Welcome to my Portfolio</h1>
                      <h1 className=" text-[42px] pt-2 font-bold leading-tight">
                        Hi, I'm
                      </h1>{" "}
                      <div className="text-6xl  font-bold text-emerald-100 creative-font">
                        Rajesh Elluru
                        <style>{`
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
  .creative-font {
    font-family: 'Comfortaa', cursive;
    letter-spacing: 1px;
  }
`}</style>
                      </div>
                    </div>

                    <div className="space-y-4 ">
                      <p className="text-lg text-gray-400/80 max-w-2xl mx-auto">
                        An aspiring Full Stack Developer with experience in
                        building interactive and scalable web applications by
                        connecting powerful backends to dynamic frontends. I
                        love turning ideas into seamless digital experiences and
                        solving real-world problems through code.
                      </p>

                      <p className="text-xl text-emerald-300 font-semibold text-center">
                        Clean • Creative • Modern
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link
                      to="/contact"
                      className="group relative bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-3.5 rounded-lg font-medium text-white transition-all duration-400 hover:from-blue-600 hover:to-blue-700 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 border border-blue-400/20"
                    >
                      <span className="relative">Get In Touch</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </Link>

                    <a
                      href="https://drive.google.com/file/d/1nRHPybL8zXtSq-n9_mYbxRI9GFUckFfF/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative bg-white/5 backdrop-blur-sm px-8 py-3.5 rounded-lg font-medium text-white transition-all duration-400 hover:bg-white/10 border border-white/20 hover:border-white/30 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                    >
                      <span className="relative">View Resume</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </a>
                  </div>

                  <div className="flex gap-4 justify-center lg:justify-start pt-6">
                    {[
                      {
                        name: "LinkedIn",
                        icon: (
                          <svg
                            className="w-6 h-6 group-hover:text-blue-400 transition-colors duration-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        ),
                        url: "https://www.linkedin.com/in/rajesh-elluru-97ba6b356/",
                        message: "Let's build professional connections! 👔",
                        color: "from-blue-600 to-cyan-400",
                        popupColor: "from-blue-400 to-cyan-400",
                        iconColor: "group-hover:text-blue-400",
                      },
                      {
                        name: "GitHub",
                        icon: (
                          <svg
                            className="w-6 h-6 group-hover:text-purple-400 transition-colors duration-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        ),
                        url: "https://github.com/rajeshlru",
                        message: "Check out my latest projects! 💻",
                        color: "from-purple-600 to-pink-500",
                        popupColor: "from-purple-400 to-pink-400",
                        iconColor: "group-hover:text-purple-400",
                      },
                      {
                        name: "Email",
                        icon: (
                          <svg
                            className="w-6 h-6 group-hover:text-red-400 transition-colors duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        ),
                        url: "mailto:your-email@example.com",
                        message: "Ready to collaborate? 📧",
                        color: "from-red-500 to-orange-400",
                        popupColor: "from-red-400 to-orange-400",
                        iconColor: "group-hover:text-red-400",
                      },
                      {
                        name: "Portfolio",
                        icon: (
                          <svg
                            className="w-6 h-6 group-hover:text-emerald-400 transition-colors duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"
                            />
                          </svg>
                        ),
                        url: "#projects",
                        message: "Discover my creative work! 🎨",
                        color: "from-emerald-500 to-green-400",
                        popupColor: "from-emerald-400 to-green-400",
                        iconColor: "group-hover:text-emerald-400",
                      },
                    ].map((social) => (
                      <div key={social.name} className="relative group">
                        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-gray-700 to-black border border-gray-600/50 text-white text-sm px-4 py-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none whitespace-nowrap z-50 shadow-2xl backdrop-blur-sm scale-95 group-hover:scale-100 group-hover:-translate-y-1">
                          <div className="flex items-center gap-2">
                            <span
                              className={`font-medium bg-gradient-to-r ${social.popupColor} bg-clip-text text-transparent`}
                            >
                              {social.message}
                            </span>
                            <div
                              className={`w-1 h-1 bg-gradient-to-r ${social.popupColor} rounded-full animate-pulse`}
                            ></div>
                          </div>
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-gray-900 to-black border-b border-r border-gray-600/50 rotate-45"></div>
                        </div>
                        <a
                          href={social.url}
                          target={
                            social.name !== "Portfolio" ? "_blank" : "_self"
                          }
                          rel={
                            social.name !== "Portfolio"
                              ? "noopener noreferrer"
                              : ""
                          }
                          className="block relative group"
                        >
                          <div className="relative group">
                            <div
                              className={`absolute -inset-1 bg-gradient-to-r ${social.color} rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}
                            ></div>
                            <div className="relative p-3 bg-gray-900/90 backdrop-blur-xl border border-gray-700 rounded-xl text-gray-300 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                              {social.icon}
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
};

export default Home;
