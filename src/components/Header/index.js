import React, { useState } from "react";
import { FiSearch, FiHeart, FiShoppingBag, FiUser, FiMenu, FiX } from "react-icons/fi";
import "./index.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Left Logo */}
        <div className="logo">
          <img
            src="https://res.cloudinary.com/douyiqjdq/image/upload/v1761989253/Screenshot_2025-11-01_145650_dw1pmd.png"
            alt="Logo"
          />
        </div>

        {/* Center Section (Logo on top, nav below on big screens) */}
        <div className="center-section">
          <img
            src="https://res.cloudinary.com/douyiqjdq/image/upload/v1761988364/Screenshot_2025-11-01_144209_ytkjg2.png"
            alt="Brand Logo"
            className="brand-logo"
          />

          <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <a href="#shop" onClick={() => setMenuOpen(false)}>SHOP</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>SKILLS</a>
            <a href="#stories" onClick={() => setMenuOpen(false)}>STORIES</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT US</a>
          </nav>
        </div>

        {/* Right Icons */}
        <div className="header-right">
          <FiSearch className="icon" title="Search" />
          <FiHeart className="icon" title="Wishlist" />
          <FiShoppingBag className="icon" title="Bag" />
          <FiUser className="icon" title="Account" />
          <span className="lang">
            ENG <span className="dropdown">▼</span>
          </span>

          {/* Mobile Toggle */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
