import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const ghBase = "https://github.com/manojmanoharan2005-dotGITHUB";

const projects = [
  {
    title: "Farming Assistant",
    desc: "Crop advice & management dashboard built with Flask, HTML/CSS and MongoDB. Includes sensor data ingestion and simple automation scripts.",
    img: "/src/assets/project-farming.jpg",
    tech: ["Flask", "HTML", "CSS", "MongoDB", "JS"],
    github: ghBase,
    live: "#"
  },
  {
    title: "Railway Reservation & Management",
    desc: "Full-stack reservation system using React frontend, Node.js backend and SQL database. Features booking, admin management and seat allocation.",
    img: "/src/assets/project-railway.jpg",
    tech: ["React", "Node.js", "SQL", "Express"],
    github: ghBase,
    live: "#"
  },
  {
    title: "AI Mental Health Chat & Mood Analyzer",
    desc: "NLP-driven chatbot and mood analyzer using deep learning models to provide conversational support and mood classification insights.",
    img: "/src/assets/project-mentalhealth.jpg",
    tech: ["Python", "NLP", "Deep Learning", "Flask"],
    github: ghBase,
    live: "#"
  }
];

export default function Projects() {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6">Projects</h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            className="bg-gradient-to-br from-violet-900/30 to-violet-800/20 rounded-2xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="w-full h-40 bg-gray-800">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between">
                <h4 className="font-bold">{p.title}</h4>
                <div className="text-sm text-gray-300">{/* optional tag */}</div>
              </div>

              <p className="text-sm text-gray-300 mt-2">{p.desc}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 bg-white/6 rounded-full text-gray-200">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3">
                <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-1 bg-gray-800 rounded hover:bg-gray-700">
                  <FaGithub /> <span className="text-sm">GitHub</span>
                </a>
                <a href={p.live} target="_blank" rel="noreferrer" className="px-3 py-1 bg-violet-600 rounded hover:bg-violet-500 text-sm">
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
