"use client";
import Link from 'next/link';
import '../componentstyles/navbar.css';
import { motion as m } from "framer-motion";

export default function NavBar() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Me' },
    { href: '/projects', label: 'My Projects' },
    { href: '/contact', label: 'Contact Me' },
  ];

  const buttonVariants = {
    initial: {
      background: "var(--foreground)",
      color: "var(--copy)",
      scale: 1,
      borderRadius: "var(border-radius)" 
    },
    hovered: {
      background: "var(--background)",
      color: "var(--copy)",
      borderRadius: "var(--border-radius)" 
    },
  };

  return (
    <div className="navbar-container">
      {links.map(({ href, label }) => (
        <Link key={href} href={href
        }>
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
  );
}
``
