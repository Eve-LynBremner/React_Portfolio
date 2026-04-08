import NavBar from './NavBar'
import Header from './Header'
import Footer from './Footer';

const pages = [
  { name: 'Home', key: 'home' },
  { name: 'About', key: 'about' },
  { name: 'Projects', key: 'projects' },
  { name: 'Contact', key: 'contact' },
]

const Layout = ({ children, selectedPage, onSetPage}) => {

  return (
    <div style={styles.container}>
      {/* Header */}
      <Header />

      {/* Navigation */}
      <NavBar 
        pages={pages}
        selectedPage={selectedPage}
        onSetPage={onSetPage}
      />

      <div style={styles.main}>
        {/* Content Area */}
        <section style={styles.content}>
          {children}
        </section>
      </div>

      {/* Footer */}
      <Footer />
     
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    minWidth: '100vw',
  },
  main: {
    display: 'flex',
    flex: 1,
  },
  content: {
    flex: 1,
    padding: '20px',
  },
};

export default Layout;
