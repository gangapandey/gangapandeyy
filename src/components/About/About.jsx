import React from 'react';
import styles from './About.module.css';
import { getImageUrl } from "../../utils";

const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}><span>01. </span> About Me</h2>
            <div className={styles.content}>

                <p className={styles.aboutItems}>
                 My name is Ganga D. Pandey and I am a self taught Front-end Developer based in Kathmandu. I found my passion for Web Development in 2022. Then I started exploring the Frontend tools and frameworks.<br></br><br></br>
                 What Kept me on this journey is that I found it exciting to always  be learning new things and encountering challenges that I'm not familiar with.<br></br><br></br>
                 When I am not programming, I like travelling, reading books and drawing. 
                </p>

                <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" className={styles.aboutImage} />
            </div>
        </section>
    )
}

export default About
