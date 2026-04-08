import React from 'react'

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Eve-Lyn Bremner</h1>
    </header>
  )
}

// Inline styles for simplicity
const styles = {
  header: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '5px',
  },
  
};

export default Header