import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const timeline = [
    { title: "B.Tech — AI-ML", meta: "SRI SHAKTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY • 2023 - 2027", desc: "Focused on algorithms, ML fundamentals and full-stack projects." },

  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 items-start">
      {/* profile card */}
      <motion.div
        className="md:col-span-1 bg-gradient-to-br from-violet-900/50 to-violet-800/30 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <img
          src="/src/assets/profile.jpg"
          alt="Manoj Kumar"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover ring-2 ring-violet-500/40 shadow-lg"
        />
        <h3 className="mt-4 text-lg font-semibold">Manoj Kumar M</h3>
        <p className="text-sm text-gray-300 mt-1">AI &amp; ML Enthusiast • Full Stack Developer</p>

        <div className="mt-4 flex gap-2 w-full justify-center">
          <a
            href="/resume.pdf"
            className="px-3 py-2 bg-violet-600 hover:bg-violet-500 rounded text-sm"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-3 py-2 border border-violet-400 rounded text-sm hover:bg-white/3"
          >
            Contact
          </a>
        </div>

        <div className="mt-4 w-full text-sm text-gray-400">
          <div className="flex justify-between px-2">
            <div>
              <div className="text-xs text-gray-300">Experience</div>
              <div className="font-medium">FRESHER</div>
            </div>
            <div>
              <div className="text-xs text-gray-300">Location</div>
              <div className="font-medium">COIMBATORE</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* content column */}
      <div className="md:col-span-2 space-y-4">
        <motion.div
          className="bg-gradient-to-br from-violet-900/45 to-violet-800/25 backdrop-blur-md p-6 rounded-2xl shadow-lg"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <h4 className="text-xl font-semibold">About Me</h4>
          <p className="mt-3 text-sm text-gray-300 leading-relaxed">
            I build responsive web applications and prototype ML models. I work across the stack with Python, Flask, Node.js and modern frontend tooling. I enjoy turning ideas into production-ready projects and exploring new technologies.
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-violet-900/45 to-violet-800/25 backdrop-blur-md p-6 rounded-2xl shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h4 className="text-xl font-semibold">Education &amp; Timeline</h4>

          <div className="mt-4 space-y-4">
            {timeline.map((t, idx) => (
              <motion.div
                key={t.title}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * idx }}
              >
                <div className="flex flex-col items-center">
                  <span className="w-3 h-3 rounded-full bg-violet-400 mt-1" />
                  {idx < timeline.length - 1 && <span className="w-px h-12 bg-white/8 mt-1" />}
                </div>

                <div>
                  <div className="text-sm font-medium">{t.title}</div>
                  <div className="text-xs text-gray-400">{t.meta}</div>
                  <div className="text-sm text-gray-300 mt-1">{t.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-violet-900/45 to-violet-800/25 backdrop-blur-md p-6 rounded-2xl shadow-lg"
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h4 className="text-lg font-semibold">Quick Skills</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {/* keep these brief; update as needed */}
            <span className="px-2 py-1 text-xs bg-violet-700/40 rounded">Python</span>
            <span className="px-2 py-1 text-xs bg-violet-700/40 rounded">React</span>
            <span className="px-2 py-1 text-xs bg-violet-700/40 rounded">Node.js</span>
            <span className="px-2 py-1 text-xs bg-violet-700/40 rounded">MongoDB</span>
            <span className="px-2 py-1 text-xs bg-violet-700/40 rounded">Flask</span>
            <span className="px-2 py-1 text-xs bg-violet-700/40 rounded">ML</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
