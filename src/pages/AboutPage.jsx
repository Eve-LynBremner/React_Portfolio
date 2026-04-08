// AboutPage.js
import React from 'react';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>About Me</h2>
      <p className={styles.content}>I’m an analytical problem‑solver with a background in financial services, 
        where I learned to turn data, patterns, and complex information into clear insights. 
        Working with SQL, Excel, and reporting tools sharpened my logic, testing mindset, 
        and love for structured problem‑solving.
        
        That curiosity naturally led me into software development. 
        I now combine my analytical experience with hands‑on skills in Python, 
        HTML, CSS, JavaScript, React, and Node.js, strengthened through a 
        BCS‑accredited Full Stack Web Development bootcamp.
        
        I’m comfortable in Agile environments and familiar with tools like Jira, 
        Confluence, and SharePoint. As an aspiring Software Developer and Tester, 
        I’m passionate about clean logic, intuitive design, and building solutions 
        that genuinely make life easier.
      </p>
    </div>
  );
};

export default AboutPage;
