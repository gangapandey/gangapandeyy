import React from "react";

import styles from '../Projects/Card.module.css';

import { getImageUrl } from "../../utils";

export const Card = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image}/>

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>

      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (

            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
        
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link} target="_blank">
          <span>Live Demo</span>
        </a>
        <a href={source} className={styles.link} target="_blank">
          <img className={styles.icon} src="./assets/projects/githubIcon.png"  alt="git" />
        </a>
      </div>
    </div>
  );
};