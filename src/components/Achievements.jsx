import React from "react";

const Achievements = () => {
  const achievements = [
    {
      platform: "HackerRank",
      badge: "5★ Problem Solving",
      status: "Verified",
      username: "rajeshelluru143",
      description: "Achieved 5-star rating in Problem Solving category",
      icon: "⭐",
      color: "from-blue-500 via-purple-500 to-purple-600",
      glow: "blue",
      tags: ["Coding", "Algorithms", "Data Structures"],
      verifyLink: "https://www.hackerrank.com/profile/rajeshelluru143",
      uniqueStyle: "hover:rotate-1",
    },
    {
      platform: "Eduskills Portal",
      badge: "Security Contribution",
      status: "Bug Report Accepted",
      username: "rajeshelluru143",
      description:
        "Identified and reported an OTP verification edge-case, leading to a fix that enhanced user authentication reliability",
      icon: "🔍",
      color: "from-green-500 via-teal-500 to-emerald-600",
      glow: "green",
      tags: ["Security", "Testing", "Authentication"],
      uniqueStyle: "hover:skew-y-1",
    },
  ];

  const GlowEffect = ({ color }) => (
    <div
      className={`absolute -inset-1 bg-gradient-to-r ${color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200`}
    ></div>
  );

  const handleVerify = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 mt-6">
            <span className="text-6xl">🏆</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-300 to-purple-200 bg-clip-text text-transparent mb-6">
            Achievements
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Showcasing my technical accomplishments and contributions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`relative group ${achievement.uniqueStyle} transition-transform duration-300`}
            >
              <div
                className={`relative bg-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden shadow-lg hover:shadow-xl ${achievement.animation}`}
              >
                <div
                  className={`relative bg-gradient-to-r ${achievement.color} p-8`}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="text-4xl filter drop-shadow-lg ">
                          {achievement.icon}
                        </span>
                        <div>
                          <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                            {achievement.platform}
                          </h3>
                          <p className="text-white/80 text-sm mt-1">
                            @{achievement.username}
                          </p>
                        </div>
                      </div>
                      <span className="bg-white/20 backdrop-blur-lg text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
                        {achievement.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="text-3xl font-bold text-white mb-4 leading-tight animate-pulse">
                      {achievement.badge}
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {achievement.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {achievement.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700/50 backdrop-blur-sm hover:scale-105 transition-transform duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-700/50">
                    <div className="flex items-center space-x-2">
                      <span className="text-yellow-400 animate-spin-slow">
                        ✨
                      </span>
                      <span className="text-gray-400 text-sm">
                        Verified Achievement
                      </span>
                    </div>

                    {achievement.platform === "HackerRank" && (
                      <button
                        onClick={() => handleVerify(achievement.verifyLink)}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
                      >
                        Verify ✅
                      </button>
                    )}

                    {achievement.platform !== "HackerRank" && (
                      <div className="text-gray-500 text-sm">
                        {new Date().getFullYear()}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
