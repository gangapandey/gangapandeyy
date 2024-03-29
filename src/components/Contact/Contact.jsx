import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <div className={styles.connect} id="contact">
      <div className={styles.paragraph}>
        <p className={styles.topic}>03. Let's Connect!</p>
        <h2 className={styles.subtopic}>Get In Touch</h2>
        <p className={styles.texxt}>I am currently seeking for intern/Entry role in Web <br /> Development. If you have any works for me or just  <br /> want to say Hello, my inbox is always open.</p>
      </div>
      <div className={styles.btn}>
        <a className={styles.button} href="mailto:igangapandey@gmail.com">Say Hello</a>
      </div>


      <footer id="contact" className={styles.container}>
        <div className={styles.text}>
          <h2><a className={styles.title} href="/">GANGA<span style={{ color: '#64ffda' }}>/</span>P</a></h2>
        </div>

        <ul className={styles.images}>
          <li className={styles.link}>
            <a href="https://www.linkedin.com/in/gangapandey/"><img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" /></a>
          </li>
          <li className={styles.link}>
            <a href="https://github.com/gangapandey"><img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" /></a>
          </li>
          <li className={styles.link}>
            <a href="https://www.facebook.com/gangapandeyy"><img src={getImageUrl("contact/facebookicon.png")} alt="Facebook icon" /></a>
          </li>
          <li className={styles.link}>
            <a href="https://www.instagram.com/gangapandeyy/"><img src={getImageUrl("contact/instagramIcon.png")} alt="Insta icon" /></a>
          </li>
          
          
          
        </ul>

        <div className={styles.last}>
          <p>Thanks for Scrolling!❤️</p>
        </div>
      </footer>
    </div>
  );
};