// might no longer be required but adding just in case
import React from 'react'

const NavBar = ({pages, selectedPage, onSetPage}) => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navbarList}>
        {pages.map(page => (
          <li
            key={page.key}
            style={{
              ...styles.navbarLink,
              ...(page.key === selectedPage ? styles.selected : {}),
            }}
            onClick={() => onSetPage(page.key)}
          >
            {page.name}
          </li>
        ))}
      </ul>
    </nav>
  )
}

// Inline styles for simplicity
const styles = {  
  navbar: {
    backgroundColor: '#ffffff',
    color: '#000000',
    // padding: '1px',
    textAlign: 'center',
  },
  navbarLink: {
    cursor: 'pointer',
    display: 'block',
    padding: '5px',
    color: '#000000',
    textDecoration: 'none',
  },
  selected: {
    borderRadius: '4px',
    border: '1px solid #000000',
  },
  // navbar links to lay next to each other rather than on top (as was with sidebar)
  navbarList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
};

export default NavBar