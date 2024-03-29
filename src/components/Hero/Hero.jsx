import React from 'react';
import styles from "./Hero.module.css";



const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h4 className={styles.intro}>Hi, My name is </h4>
            <br />
            <h1 className={styles.title1}>Ganga D. Pandey</h1><br />
            <h1 className={styles.title2}>I'm a Frontend Developer. </h1> <br />
            <p className={styles.description}>I am a final year Bsc.Csit Student   
            <span className={styles.span}><a href='https://tu.edu.np/' target='_blank'>  @Tribhuvan University </a></span>
                , <br />intrested in Web Development, UI/UX Development <br />and am seeking exciting opportunities related to the same.</p>

            <a href="mailto:igangapandey@gmail.com" className={styles.contactBtn}>
                Hire Me
            </a>
        </div>
    </section>
  )
}

export default Hero
