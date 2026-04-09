import NavBar from './NavBar'
import Header from './Header'
import Footer from './Footer';

import FloatingLines from "../components/FloatingLines";

const pages = [
  { name: 'Home', key: 'home' },
  { name: 'About', key: 'about' },
  { name: 'Projects', key: 'projects' },
  { name: 'Contact', key: 'contact' },
]

const Layout = ({ children, selectedPage, onSetPage}) => {

  return (
    <div style={styles.container}>

      {/* BACKGROUND */}
      <div style = {{position: "absolute", inset: 0, zIndex: 0}}>
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={5}
          lineDistance={5}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>

      {/* FOREGROUND */}
      <div style = {{position: "relative", zIndex: 2, display: "flex", flexDirection: "column", minHeight: "100vh"}}>
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
     
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    minWidth: '100vw'
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
