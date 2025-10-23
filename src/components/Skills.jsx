import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJava, FaGit, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiFlask, SiJavascript, SiGithub } from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: <FaReact />, level: 85 },
      { name: "HTML", icon: <FaHtml5 />, level: 95 },
      { name: "CSS", icon: <FaCss3Alt />, level: 90 },
      { name: "JavaScript", icon: <SiJavascript />, level: 88 }
    ]
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs />, level: 80 },
      { name: "Flask", icon: <SiFlask />, level: 75 },
      { name: "MongoDB", icon: <SiMongodb />, level: 78 },
      { name: "SQL", icon: <FaDatabase />, level: 72 }
    ]
  },
  {
    title: "AI / ML & Tools",
    items: [
      { name: "Python", icon: <FaPython />, level: 88 },
      { name: "Java", icon: <FaJava />, level: 65 },
      { name: "Git", icon: <FaGit />, level: 85 },
      { name: "GitHub", icon: <SiGithub />, level: 86 }
    ]
  }
];

export default function Skills() {
  return (
    <div>
      <motion.h3 className="text-2xl font-semibold mb-6" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
        Skills
      </motion.h3>

      <div className="grid gap-6 md:grid-cols-3">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            className="bg-gradient-to-br from-violet-900/45 to-violet-800/25 backdrop-blur-md p-5 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: ci * 0.08 }}
          >
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">{cat.title}</h4>
              <div className="text-xs text-gray-300">({cat.items.length})</div>
            </div>

            <div className="mt-4 space-y-3">
              {cat.items.map((it) => (
                <div
                  key={it.name}
                  className="flex items-center gap-3 p-2 rounded hover:scale-102 transition-transform"
                >
                  <div className="w-10 h-10 rounded-md bg-white/8 flex items-center justify-center text-2xl text-violet-300">
                    {it.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <div className="text-sm font-medium">{it.name}</div>
                      <div className="text-xs text-gray-300">{it.level}%</div>
                    </div>

                    <div className="mt-1 h-2 bg-white/8 rounded overflow-hidden">
                      <div
                        className="h-full bg-violet-600"
                        style={{ width: `${it.level}%`, transition: "width 800ms ease" }}
                        aria-hidden
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
