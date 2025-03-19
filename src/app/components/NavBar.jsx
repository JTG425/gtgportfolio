"use client";
import Link from 'next/link';
import '../componentstyles/navbar.css';
import { motion as m } from "framer-motion";
import { TbMenu4 } from "react-icons/tb";
import { useState } from 'react';
import { delay } from 'framer-motion';

export default function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Me' },
    { href: '/projects', label: 'My Projects' },
    { href: '/contact', label: 'Contact Me' },
  ];

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const buttonVariants = {
    initial: {
      background: "var(--foreground)",
      color: "var(--copy)",
      scale: 1,
      borderRadius: "var(--border-radius)"
    },
    hovered: {
      background: "var(--background)",
      color: "var(--copy)",
      borderRadius: "var(--border-radius)"
    },
  };

  const dropdownVariants = {
    initial: {
      height: "85px",
    },
    show: {
      height: "393px",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      height: "85px",
      transition: {
        when: "afterChildren",
      },
    },
  };

  const dropdownLinkVariants = {
    initial: {
      opacity: 0,
    },
    show: (custom) => ({
      opacity: 1,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
      },
    }),
    exit: (custom) => ({
      opacity: 0,
    }),
  };

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        {links.map(({ href, label }) => (
          <Link key={href} href={href}>
            <m.button
              whileHover="hovered"
              whileTap={{ scale: 0.9 }}
              variants={buttonVariants}
              initial="initial"
              className="navbar-button"
            >
              {label}
            </m.button>
          </Link>
        ))}
      </div>
      <m.div 
        className="dropdown-content"
        initial="initial"
        animate={showDropdown ? "show" : "initial"}
        variants={dropdownVariants}
      >
        <span className="dropdown-header">
          <p>LOGO</p>
          <m.button
            onClick={handleDropdownToggle}
            whileHover={{ background: "var(--background)" }}
            className="dropdown-header-button"
          >
            <TbMenu4 color="var(--copy-lighter)" size={35} />
          </m.button>
        </span>
        <span className="dropdown-links">
          {links.map((link, index) => (
            <Link key={`dropdown-link-${link.href}`} href={link.href}>
              <m.button
                custom={index}
                variants={dropdownLinkVariants}
                initial="initial"
                animate={showDropdown ? "show" : "exit"}
                whileHover={{ background: "var(--background)" }}
                className="dropdown-button"
                onClick={handleDropdownToggle}
              >
                {link.label}
              </m.button>
            </Link>
          ))}
        </span>
      </m.div>
    </div>
  );
}
