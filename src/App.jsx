import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <div className="min-h-screen text-gray-100">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <section id="home" className="pt-20">
            <Hero />
          </section>

          <section id="about" className="pt-24" data-aos="fade-up">
            <About />
          </section>

          <section id="skills" className="pt-24" data-aos="fade-up">
            <Skills />
          </section>

          <section id="projects" className="pt-24" data-aos="fade-up">
            <Projects />
          </section>

          <section id="contact" className="pt-24 pb-12" data-aos="fade-up">
            <Contact />
          </section>
        </AnimatePresence>
        <Footer />
      </main>
    </div>
  );
}
