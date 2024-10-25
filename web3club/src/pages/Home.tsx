import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../fonts/fonts.css';
import bg1 from './bg1.png';
import WhatsInIt from './WhatsInIt';
import Marquee from './Marquee';
import IntroVid from './IntroVid';
import intro from '../assets/intro.mp4';
import logo from '../pages/wdaologo.png'
const Home: React.FC = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Audiowide';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.heroSection}>
        <div style={styles.heroContent}>
        <div style={styles.contentRow}>
    <img src={logo} alt="Logo" style={styles.logo} />
  <div style={styles.textContainer}>
          <h1 style={styles.heroTitle}>
            <span style={styles.whiteText}>the </span>
            <span style={styles.gradientText}>Wallstreet DAO</span>
          </h1>
          <p style={styles.heroSubtitle}>
            The first of its kind university DAO community, based KLH Uni
          </p>
        </div>
        </div>
        </div>
      </div>
     
      <WhatsInIt />
      <IntroVid videoSrc={intro}/>
      <Marquee />
      
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#121212',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "'Audiowide', sans-serif",
    minHeight: '100vh',
  } as React.CSSProperties,
  heroSection: {
    backgroundImage: `url(${bg1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    padding: '0 1rem', // Add padding to ensure content doesn't touch edges on smaller screens
  } as React.CSSProperties,
  heroContent: {
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '1rem',
    borderRadius: '8px',
    maxWidth: '80%',
    width: '100%',
  } as React.CSSProperties,
  heroTitle: {
    fontFamily: 'Glitch Goblin, sans-serif',
    fontSize: '5rem', // Adjust font size for responsiveness
    marginBottom: '0.5rem',
    display: 'inline-block',
    wordBreak: 'break-word', // Ensure title breaks correctly on small screens
  } as React.CSSProperties,
  gradientText: {
    background: `linear-gradient(90deg, #90f542, lime)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  } as React.CSSProperties,
  whiteText: {
    color: '#ffffff',
  } as React.CSSProperties,
  heroSubtitle: {
    fontSize: '1.5rem', // Adjust subtitle font size for responsiveness
  } as React.CSSProperties,
  gifBoxRight: {
    position: 'relative',
    width: '50%', // Take half of the heroSection
    height: '100%', // Full height to match heroSection
    overflow: 'hidden',
    display: 'flex', // Use flex to center the GIF
    justifyContent: 'center',
    alignItems: 'center',
  } as React.CSSProperties,
  gifImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain', // Change to 'contain' to ensure the GIF fits fully within the box
  } as React.CSSProperties,
  logoContainer: {
    marginRight: '1rem', // Space between logo and text
    display: 'flex',
    alignItems: 'center', // Center the logo vertically
  } as React.CSSProperties,
  textContainer: {
    display: 'flex',
    marginLeft: '1rem', // Space between logo and text
    flexDirection: 'column', // Stack title and subtitle vertically
    alignItems: 'flex-start', // Align text to the left
  } as React.CSSProperties,
  logo: {
    width: '180px', // Adjust size as needed
    height: '170px', // Maintain aspect ratio
  } as React.CSSProperties,
  contentRow: {
    display: 'flex',
    justifyContent: 'center', // Center the content horizontally
    alignItems: 'center', // Center the content vertically
    flexDirection: 'row', // Row layout for logo + text
  } as React.CSSProperties,
  
};

const globalStyles = document.createElement('style');
globalStyles.innerHTML = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #121212;
    color: #ffffff;
    font-family: 'Audiowide', sans-serif;
    min-height: 100vh;
  }
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .visible {
    opacity: 1 !important;
  }
  @media (max-width: 768px) {
    .heroTitle {
      font-size: 1rem; /* Adjust font size for mobile screens */
    }
    .heroSubtitle {
      font-size: 1.2rem; /* Adjust subtitle font size for mobile screens */
    }
    .heroContent {
      padding: 0.5rem; /* Adjust padding for mobile screens */
    }
  }
`;
document.head.appendChild(globalStyles);

export default Home;
