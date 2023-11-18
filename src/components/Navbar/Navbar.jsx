import React, {useState} from 'react';
import styles from "./Navbar.module.css";
import { getImageUrl } from '../../utils';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">GANGA<span style={{ color: '#64ffda' }}>/</span>P</a>
        <div className={styles.menu}>
        <img className={styles.menuBtn} src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          } alt="menu-button" onClick={() => setMenuOpen(!menuOpen)}
        />
            <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`}  onClick={() => setMenuOpen(false)}>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <button><a href="#contact">Resume</a></button>
                </li>
                
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
