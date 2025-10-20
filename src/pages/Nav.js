import "../css/Nav.css";

import { useState } from "react";
import { CiMenuKebab, CiSearch, CiUser } from "react-icons/ci";

function Navbar() {
      
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container__nav">
        
      <header className="title__nav">
        <h3 className="title-text">
            Resuma
        </h3>
        <div className="links__nav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#subscriptions">Subscriptions</a>
            <a href="#contact">Contact</a>
        </div>
         <button 
            id="menu-btn" 
            className="hamburger-menu-btn"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
        >
            <CiMenuKebab />
        </button>
        <div id="supple-links__nav" className={`supple-links ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
            <a href="#search" aria-label="Search" ><CiSearch /></a>
            <a href="#profile" aria-label="Profile" ><CiUser /></a>
        </div>
      </header>
      
    </div>
  );
}

export default Navbar;
