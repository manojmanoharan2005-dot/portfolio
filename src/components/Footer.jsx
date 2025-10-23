import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12 py-6 text-center text-sm text-gray-400">
      <div>© {new Date().getFullYear()} Manoj Kumar M. All rights reserved.</div>
      <div className="mt-2 flex items-center justify-center gap-4 text-xl">
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
      </div>
    </footer>
  );
}
