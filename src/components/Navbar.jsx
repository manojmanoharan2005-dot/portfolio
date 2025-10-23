import React from "react";

export default function Navbar() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className="fixed w-full z-30 top-0 bg-black/30 backdrop-blur-md">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-xl font-semibold">Manoj Kumar M</div>
        <ul className="hidden md:flex gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-violet-300">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          {/* mobile - simple anchor list fallback */}
          <details className="text-right">
            <summary className="cursor-pointer">Menu</summary>
            <ul className="mt-2 flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="block px-2 py-1 hover:text-violet-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </nav>
    </header>
  );
}
