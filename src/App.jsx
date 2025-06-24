import React from "react";
import "./homepageStyle/Style.css";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="title">Orion AI</div>
        <nav className="nav">
          <a href="#about" className="navLink">
            About
          </a>
          <a href="#research" className="navLink">
            Research
          </a>
          <a href="#contact" className="navLink">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="hero">
        <h2 className="headline">Exploring the Universe with AI</h2>
        <p className="subText">
          Orion AI is a research initiative at the intersection of artificial
          intelligence, astrophysics, and space science. Join us as we unravel
          the mysteries of the cosmos with intelligent technology.
        </p>
        <button className="button">Get Involved</button>
      </main>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} Orion AI • Space Science & Artificial
        Intelligence Lab
      </footer>
    </div>
  );
}

export default App;
