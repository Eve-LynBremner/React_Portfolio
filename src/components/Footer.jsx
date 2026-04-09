import React from 'react'

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2026 Eve-Lyn Bremner. All rights reserved.</p>
    </footer>
  )
}

// Inline styles for simplicity
const styles = {
  footer: {
    backgroundColor: '#000000',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
  },
  
};

export default Footer