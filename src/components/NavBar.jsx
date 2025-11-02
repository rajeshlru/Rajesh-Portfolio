import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsClosing(false);
    }, 400);
  };

  const mobileLinks = [
    {
      label: "Home",
      to: "/",
      hover: "hover:text-blue-400",
      dot: "bg-blue-400",
      gradient: "from-blue-400 to-indigo-600",
    },
    {
      label: "About",
      to: "/about",
      hover: "hover:text-green-400",
      gradient: "from-emerald-400 to-teal-600",
    },
    {
      label: "Projects",
      to: "/projects",
      hover: "hover:text-pink-500",
      gradient: "from-pink-500 to-purple-600",
    },
    {
      label: "Contact",
      to: "/contact",
      hover: "hover:text-orange-400",
      gradient: "from-amber-400 to-orange-600",
    },
  ];

  const getNavbarBackground = () => {
    if (!isHomePage) {
      return "bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 shadow-xl border-b border-gray-800";
    }

    if (isScrolled) {
      return "bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 shadow-xl border-b border-gray-800 backdrop-blur-xl";
    }

    return "bg-transparent";
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${getNavbarBackground()}`}
    >
      {(!isHomePage || isScrolled) && (
        <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-indigo-900/30 via-gray-900/10 to-black/70 mix-blend-overlay" />
      )}

      <div className="mx-auto px-4 sm:px-10 lg:px-16 w-full">
        <div className="flex items-center md:justify-center h-20 md:gap-130">
          <div className="flex items-center md:relative md:left-20 absolute left-[15%]">
            <Link to="/" className="">
              <span className="text-4xl font-bold">
                <span className="variant1">Rajesh Elluru</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4 pr-4 lg:pr-12">
            {[
              {
                label: "Home",
                to: "/",
                gradient: "from-blue-400 to-indigo-600",
                hoverText: "text-indigo-400",
              },
              {
                label: "About",
                to: "/about",
                gradient: "from-emerald-400 to-teal-600",
                hoverText: "text-teal-400",
              },
              {
                label: "Projects",
                to: "/projects",
                gradient: "from-pink-500 via-purple-600 to-indigo-700",
                hoverText: "text-purple-400",
              },
              {
                label: "Contact",
                to: "/contact",
                gradient: "from-amber-400 to-orange-600",
                hoverText: "text-orange-400",
              },
            ].map((nav) => (
              <Link
                key={nav.label}
                to={nav.to}
                className={`relative text-[16px] texfont-medium px-6 py-2 rounded-xl transition-all duration-300 hover:scale-110 overflow-hidden group ${
                  isHomePage && !isScrolled
                    ? "text-cyan-400"
                    : "text-green-200 hover:text-white"
                }`}
              >
                <span
                  className={`absolute left-0 bottom-0 h-1 w-full bg-gradient-to-r ${nav.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                />
                <span className="relative z-10">{nav.label}</span>
              </Link>
            ))}
          </div>

          <div className="md:hidden ml-auto pr-2 absolute right-4 top-4 text-xl">
            <button
              type="button"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className={`inline-flex items-center justify-center h-12 w-12 p-3 rounded-lg transition-all duration-300 shadow-lg focus:outline-none ${
                isHomePage && !isScrolled
                  ? "bg-white/10 text-yellow-300 hover:text-yellow-200 hover:bg-white/20"
                  : "bg-gray-800 text-yellow-400 hover:text-yellow-200 hover:bg-gray-700"
              }`}
            >
              {!isMobileMenuOpen && (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {(isMobileMenuOpen || isClosing) && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 z-50"
          onClick={handleCloseMenu}
        >
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            style={{
              animation: !isClosing
                ? "fadeIn 0.3s ease-out forwards"
                : "fadeOutLove 0.4s ease-in forwards",
            }}
          />

          <div
            className="absolute right-0 top-20 w-full bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 border-t border-gray-700 shadow-2xl"
            style={{
              animation: !isClosing
                ? "slideInTopLove 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards"
                : "slideOutTopLove 0.4s cubic-bezier(0.4, 0, 0.6, 1) forwards",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseMenu}
              className="absolute right-6 -top-14 p-2 text-gray-400 hover:text-white transition-all duration-500 hover:scale-110 hover:bg-white/10 rounded-lg group"
              style={{
                animation: !isClosing
                  ? "bounceInLove 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both"
                  : "bounceOutLove 0.5s cubic-bezier(0.4, 0, 0.6, 1) both",
              }}
            >
              <svg
                className="w-8 h-8 group-hover:rotate-180 transition-transform duration-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="px-4 sm:px-1  flex flex-col gap items-center">
              {mobileLinks.map((nav, index) => (
                <Link
                  key={nav.label}
                  to={nav.to}
                  onClick={handleCloseMenu}
                  className="w-full max-w-xs"
                  style={{
                    animationDelay: !isClosing
                      ? `${index * 0.1}s`
                      : `${index * 0.06}s`,
                    animation: !isClosing
                      ? "slideInUpLove 0.6s cubic-bezier(0.4, 0, 0.2, 1) both"
                      : "slideOutDownLove 0.4s cubic-bezier(0.4, 0, 0.6, 1) both",
                  }}
                >
                  <div
                    className={`flex items-center justify-center text-white  rounded-xl text-[20px] font-bold transition-all duration-500 group
                hover:scale-[1.06] hover:translate-y-[-2px] hover:bg-white/5
                hover:ring-4 hover:ring-white/15 hover:ring-offset-2 hover:ring-offset-gray-900/80 hover:shadow-lg hover:shadow-black/30
                border border-transparent hover:border-white/10 active:scale-95`}
                  >
                    <span
                      className={`bg-gradient-to-r ${nav.gradient} bg-clip-text text-transparent my-10
                  group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]
                  transition-all duration-500`}
                    >
                      {nav.label}
                    </span>

                    <svg
                      className="w-4 h-4 ml-2 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:rotate-45"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }

            @keyframes fadeOutLove {
              0% {
                opacity: 1;
              }
              50% {
                opacity: 0.7;
              }
              100% {
                opacity: 0;
              }
            }

            @keyframes slideInTopLove {
              0% {
                transform: translateY(-100%) scale(0.9);
                opacity: 0;
              }
              60% {
                transform: translateY(10%) scale(1.02);
                opacity: 0.8;
              }
              100% {
                transform: translateY(0) scale(1);
                opacity: 1;
              }
            }

            @keyframes slideOutTopLove {
              0% {
                transform: translateY(0) scale(1);
                opacity: 1;
              }
              40% {
                transform: translateY(-10%) scale(1.05);
                opacity: 0.8;
              }
              100% {
                transform: translateY(-100%) scale(0.8);
                opacity: 0;
              }
            }

            @keyframes slideInUpLove {
              0% {
                transform: translateY(400px) scale(0.8);
                opacity: 0;
              }
              60% {
                transform: translateY(-5px) scale(1.05);
                opacity: 0.9;
              }
              100% {
                transform: translateY(0) scale(1);
                opacity: 1;
              }
            }

            @keyframes slideOutDownLove {
              0% {
                transform: translateY(0) scale(1);
                opacity: 1;
              }
              40% {
                transform: translateY(30px) scale(1.1);
                opacity: 0.7;
              }
              100% {
                transform: translateY(230px) scale(0.7);
                opacity: 0;
              }
            }

            @keyframes bounceInLove {
              0% {
                opacity: 0;
                transform: scale(0.2) rotate(-180deg);
              }
              40% {
                opacity: 1;
                transform: scale(1.3) rotate(20deg);
              }
              60% {
                transform: scale(0.9) rotate(-10deg);
              }
              80% {
                transform: scale(1.1) rotate(5deg);
              }
              100% {
                opacity: 1;
                transform: scale(1) rotate(0deg);
              }
            }

            @keyframes bounceOutLove {
              0% {
                opacity: 1;
                transform: scale(1) rotate(0deg);
              }
              20% {
                transform: scale(1.2) rotate(10deg);
                opacity: 0.9;
              }
              50% {
                transform: scale(0.8) rotate(-15deg);
                opacity: 0.7;
              }
              80% {
                transform: scale(1.1) rotate(5deg);
                opacity: 0.3;
              }
              100% {
                opacity: 0;
                transform: scale(0.3) rotate(90deg);
              }
            }
          `}</style>
        </div>
      )}

      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Inter:wght@300;700&display=swap");
        .neon-text {
          font-family: "Dancing Script", cursive;
          text-shadow:
            0 0 4px rgba(255, 174, 66, 0.25),
            0 0 8px rgba(243, 236, 120, 0.15),
            0 0 12px rgba(252, 96, 118, 0.15);
        }
        @keyframes animate-fade-in {
          from { opacity: 0; transform: translateY(-16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: animate-fade-in 0.3s ease; }
        @keyframes animate-slide-in {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in { animation: animate-slide-in 0.3s ease; }
        .variant1 {
          font-family: 'Dancing Script', cursive;
          color: white;
          text-shadow: 0 0 3px rgba(255, 255, 255, 0.4);
        }
        .variant2 {
          font-family: 'Dancing Script', cursive;
          background: linear-gradient(90deg, #00c6ff, #0072ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 10px rgba(0, 114, 255, 0.45);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
