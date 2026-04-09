// ContactPage.js
import React from 'react';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Get in Touch</h2>
      {/* HMTL form converted into jsx format */}
      <form className={styles.form}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name_input" id="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email_input" id="email" />

        <label htmlFor="message">Message:</label>
        <textarea name="message_input" id="message" rows="15"></textarea>

        <button type="button">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
