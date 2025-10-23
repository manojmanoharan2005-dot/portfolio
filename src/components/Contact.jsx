import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");
    // replace service_id, template_id, user_id with your EmailJS values
    emailjs
      .sendForm("service_id", "template_id", form.current, "user_id")
      .then(() => {
        setStatus("success");
        form.current.reset();
        setTimeout(() => setStatus("idle"), 3500);
      })
      .catch((err) => {
        console.error(err);
        setErrorMsg("Failed to send. Try again later.");
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3500);
      });
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-violet-900/50 to-violet-800/30 backdrop-blur-md p-6 rounded-2xl max-w-2xl mx-auto shadow-lg"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3 className="text-2xl font-semibold mb-3">Contact</h3>
      <p className="text-sm text-gray-300 mb-4">
        Have a project or question? Send a message — I'll reply ASAP.
      </p>

      <form ref={form} onSubmit={sendEmail} className="grid gap-3">
        <label className="text-xs text-gray-300">Name</label>
        <input
          name="name"
          required
          className="p-3 bg-transparent border border-white/8 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
          placeholder="Your name"
        />

        <label className="text-xs text-gray-300">Email</label>
        <input
          name="email"
          type="email"
          required
          className="p-3 bg-transparent border border-white/8 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
          placeholder="you@domain.com"
        />

        <label className="text-xs text-gray-300">Message</label>
        <textarea
          name="message"
          required
          rows="5"
          className="p-3 bg-transparent border border-white/8 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
          placeholder="Tell me about your project..."
        />

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={status === "sending"}
            className="px-4 py-2 bg-violet-600 hover:bg-violet-500 rounded disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <div className="text-green-400 text-sm">Message sent — thank you!</div>
          )}
          {status === "error" && <div className="text-red-400 text-sm">{errorMsg}</div>}
        </div>
      </form>

      <div className="mt-6 border-t border-white/6 pt-4 flex items-center justify-between">
        <div className="text-sm text-gray-300">Or reach me on</div>
        <div className="flex gap-4 text-xl text-gray-200">
          <a
            href="https://github.com/manojmanoharan2005-dotGITHUB"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-violet-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/manoj-kumar-m-70a003301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-violet-300"
          >
            <FaLinkedin />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-violet-300">
            <FaTwitter />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
