import "../css/Nav.css";

import { useState } from "react";

// SVGS
import { CiMenuKebab } from "react-icons/ci";
import { PiStudent } from "react-icons/pi";
import { FiCreditCard, FiMessageCircle, FiMail, FiHelpCircle } from "react-icons/fi";


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
            <a href="#subscriptions">Subscriptions</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
            <a href="#faq" aria-label="FAQ">FAQ</a>
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
             <a href="#about" aria-label="About"><PiStudent /></a>
            <a href="#subscriptions" aria-label="Subscriptions"><FiCreditCard /></a>
            <a href="#reviews"><FiMessageCircle /></a>
            <a href="#contact" aria-label="Contact"><FiMail /></a>
            <a href="#faq" aria-label="FAQ"><FiHelpCircle /></a>
        </div>
      </header>
      
    </div>
  );
}

export default Navbar;
