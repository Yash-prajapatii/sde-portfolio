import React from "react";

function Navbar({ onNavigate }) {
  return (
    <header className="navbar">
      <div className="nav-left">
        <span className="logo">&lt;Yash /&gt;</span>
      </div>
      <nav className="nav-links">
        <button onClick={() => onNavigate("about")}>About</button>
        <button onClick={() => onNavigate("skills")}>Skills</button>
        <button onClick={() => onNavigate("projects")}>Projects</button>
        <button onClick={() => onNavigate("experience")}>Experience</button>
        <button onClick={() => onNavigate("contact")}>Contact</button>
      </nav>
    </header>
  );
}

export default Navbar;
