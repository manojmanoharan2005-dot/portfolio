import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative animated background (rocket -> moon) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {/* moon (destination) */}
        <div className="moon" />
        {/* rocket with flame */}
        <div className="rocket" role="img" aria-label="rocket">
          <svg viewBox="0 0 64 64" className="rocket-svg" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path d="M32 2c0 0 8 4 12 8s8 12 8 12-8 4-12 8S32 42 32 42 24 38 20 34 8 22 8 18 24 2 32 2z" fill="#fff" opacity="0.95"/>
              <rect x="28" y="18" width="8" height="10" rx="2" fill="#0f172a" />
              <path d="M18 42c3 6 12 12 12 12s9-6 12-12c-6-3-18-3-24 0z" fill="#c026d3" opacity="0.9"/>
            </g>
          </svg>
          <div className="flame" />
        </div>
      </div>

      {/* actual hero content on top */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 py-12">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Hi, I'm Manoj Kumar M
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-xl md:text-2xl text-violet-200"
          >
            AI &amp; ML Enthusiast | Full Stack Developer | Tech Explorer
          </motion.h2>

          <p className="mt-6 text-gray-300 max-w-xl">
            Building modern web apps and ML prototypes. I enjoy turning ideas into production code.
          </p>

          <div className="mt-6 flex gap-4">
            <a href="#projects" className="px-4 py-2 bg-violet-600 rounded hover:bg-violet-500">View Projects</a>
            <a href="#contact" className="px-4 py-2 border border-violet-400 rounded hover:bg-violet-800">Contact Me</a>
          </div>
        </div>
      </div>

      {/* inline CSS for the rocket -> moon animation */}
      <style>{`
        /* moon styling - target landing spot top-right */
        .moon{
          position: absolute;
          right: 8%;
          top: 6%;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #f8fafc 0%, #e6e7ee 30%, #cbd2e1 60%, #a3a9be 100%);
          box-shadow: 0 8px 30px rgba(0,0,0,0.6), inset -12px -8px 24px rgba(0,0,0,0.08);
          opacity: 0.95;
          transform: translateZ(0);
        }
        .moon::after{
          content: "";
          position: absolute;
          left: 22%;
          top: 30%;
          width: 24px;
          height: 12px;
          border-radius: 6px;
          background: rgba(0,0,0,0.07);
          transform: rotate(-15deg);
        }
        .moon::before{
          content: "";
          position: absolute;
          left: 55%;
          top: 50%;
          width: 16px;
          height: 10px;
          border-radius: 6px;
          background: rgba(0,0,0,0.06);
          transform: rotate(10deg);
        }

        /* rocket base position: centered at bottom */
        .rocket{
          position: absolute;
          left: 50%;
          bottom: 6%;
          width: 64px;
          height: 64px;
          display:flex;
          align-items:center;
          justify-content:center;
          transform-origin: center;
          opacity:1;
          /* start after 3s, loop forever */
          animation: rocket-loop 8s ease-in-out 3s infinite;
          will-change: transform, opacity;
          /* ensure initial centering */
          transform: translate(-50%, 0) rotate(0deg) scale(0.95);
        }
        .rocket-svg{
          width:100%;
          height:100%;
          display:block;
          filter: drop-shadow(0 6px 10px rgba(0,0,0,0.45));
        }

        /* flame */
        .flame{
          position:absolute;
          bottom:-14%;
          left:50%;
          transform:translateX(-50%);
          width:18px;
          height:28px;
          border-radius:10px;
          background: radial-gradient(circle at 35% 30%, #fff4c2 0%, #ffcc33 20%, #ff7b00 60%, rgba(255,0,0,0) 100%);
          opacity:0.95;
          animation: flame-flicker 0.18s linear infinite;
          filter: blur(0.6px);
        }

        /* loop: center -> arc to moon -> pause -> return to center */
        @keyframes rocket-loop {
          0%{
            transform: translate(-50%, 0) rotate(0deg) scale(0.95);
            opacity:1;
          }
          30%{
            /* mid-flight */
            transform: translate(calc(20vw - 50%), -24vh) rotate(12deg) scale(1.02);
          }
          45%{
            /* approach moon */
            transform: translate(calc(34vw - 50%), -38vh) rotate(30deg) scale(1.06);
          }
          55%{
            /* landed / pause on moon */
            transform: translate(calc(34vw - 50%), -38vh) rotate(30deg) scale(1);
            opacity:1;
          }
          90%{
            /* return path back toward center */
            transform: translate(calc(18vw - 50%), -18vh) rotate(8deg) scale(1.02);
            opacity:1;
          }
          100%{
            /* back to center, ready for next takeoff */
            transform: translate(-50%, 0) rotate(0deg) scale(0.95);
            opacity:1;
          }
        }

        /* flicker flame */
        @keyframes flame-flicker {
          0%{ transform: translateX(-50%) scaleY(1); opacity:1; }
          50%{ transform: translateX(-50%) scaleY(0.85); opacity:0.85; }
          100%{ transform: translateX(-50%) scaleY(1); opacity:1; }
        }

        /* small parallax starfield sparkle (subtle) */
        .pointer-events-none::before{
          content: "";
          position: absolute;
          left: 12%;
          top: 10%;
          width: 6px;
          height: 6px;
          background: rgba(255,255,255,0.06);
          border-radius: 50%;
          box-shadow:
            -200px 40px 0 rgba(255,255,255,0.03),
            120px 180px 0 rgba(255,255,255,0.02),
            60px 120px 0 rgba(255,255,255,0.025);
          filter: blur(.2px);
        }

        /* responsive adjustments so rocket path looks correct on smaller screens */
        @media (max-width: 768px){
          .moon{ width:110px; height:110px; right:6%; top:4%; }
          .rocket{
            bottom: 4%;
            width:48px;
            height:48px;
            left:50%;
            transform: translate(-50%, 0);
            animation: rocket-loop-sm 7.5s ease-in-out 3s infinite;
          }
          @keyframes rocket-loop-sm {
            0%{ transform: translate(-50%, 0) rotate(0deg) scale(0.95); }
            30%{ transform: translate(calc(12vw - 50%), -18vh) rotate(8deg) scale(1.02); }
            45%{ transform: translate(calc(24vw - 50%), -30vh) rotate(20deg) scale(1.05); }
            55%{ transform: translate(calc(24vw - 50%), -30vh) rotate(20deg) scale(1); }
            90%{ transform: translate(calc(10vw - 50%), -12vh) rotate(6deg) scale(1.02); }
            100%{ transform: translate(-50%, 0) rotate(0deg) scale(0.95); }
          }
        }

        /* very small screens */
        @media (max-width: 420px){
          .moon{ width:88px; height:88px; right:4%; top:3%; }
          .rocket{ left:50%; bottom:3%; width:40px; height:40px; transform: translate(-50%,0); animation: rocket-loop-sm 7.5s ease-in-out 3s infinite; }
        }
      `}</style>
    </div>
  );
}
