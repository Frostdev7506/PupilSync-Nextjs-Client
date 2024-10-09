// components/Navbar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import styles from "../styles/Navbar.module.css";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <FaBars />
      </div>
      <ul className={`${styles.navList} ${isMenuOpen ? styles.active : ""}`}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
        </li>
      </ul>
      <div
        className={`${styles.authButtons} ${isMenuOpen ? styles.active : ""}`}
      >
        <Link
          href="/login"
          className={`${styles.navLink} ${styles.loginButton}`}
        >
          Login
        </Link>
        <Link
          href="/signup"
          className={`${styles.navLink} ${styles.signupButton}`}
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
