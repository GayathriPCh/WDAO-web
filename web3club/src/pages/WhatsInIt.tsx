import React from 'react';
import whatsImage from './whats.png';
import andromedaFont from '../fonts/Andromeda-eR2n.ttf';
import futuristicShoreFont from '../fonts/FuturisticShoreRegular-2JP8.otf';

// Define the keyframes for floating animation
const floatAnimation = `
  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }
`;

// Injecting font-face rules to apply the custom fonts
const globalStyles = `
  @font-face {
    font-family: 'Andromeda';
    src: url(${andromedaFont}) format('truetype');
  }
  @font-face {
    font-family: 'Futuristic Shore';
    src: url(${futuristicShoreFont}) format('opentype');
  }
`;

// Inject styles into the document head
const styleTag = document.createElement('style');
styleTag.innerHTML = globalStyles + floatAnimation;
document.head.appendChild(styleTag);

const WhatsInit: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <div style={styles.contentWrapper}>
          <div style={styles.imageBottomLeft} className="image-bottom-left">
            <img src={whatsImage} alt="What's in it" style={{ ...styles.image, ...styles.floatAnimation }} />
          </div>
          <div style={styles.gradientBox}>
            <h2 style={styles.title}>WHAT'S IN IT FOR YOU?</h2>
            <p style={styles.content}>
              Get access to exclusive content, participate in community events, and much more.
            </p>
          </div>
          <div style={styles.imageBottomRight} className="image-bottom-right">
            <img src={whatsImage} alt="What's in it" style={{ ...styles.image, ...styles.floatAnimation }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: `url(https://images.unsplash.com/photo-1632349069255-3b55e28e6a49?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D) no-repeat center center fixed`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '0 1rem',
  } as React.CSSProperties,
  overlay: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
  } as React.CSSProperties,
  contentWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    zIndex: 1,
    flexDirection: 'column',
    textAlign: 'center',
  } as React.CSSProperties,
  gradientBox: {
    background: 'transparent',
    borderRadius: '12px',
    padding: '3rem',
    boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.3)',
    color: '#ffffff',
    width: '90%',
    maxWidth: '600px',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0',
    textAlign: 'center',
    backdropFilter: 'blur(10px)',
    // Removed the border property to eliminate the outline
  } as React.CSSProperties,
  imageBottomLeft: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    zIndex: 0,
    width: '30%',
    height: 'auto',
    display: 'block',
  } as React.CSSProperties,
  imageBottomRight: {
    position: 'absolute',
    bottom: '0',
    right: '0',
    zIndex: 0,
    width: '30%',
    height: 'auto',
    display: 'block',
  } as React.CSSProperties,
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  } as React.CSSProperties,
  title: {
    fontSize: '5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    transform: 'rotate(-3deg)',
    fontFamily: 'Andromeda',
    textTransform: 'uppercase',
    background: '-webkit-linear-gradient(#5ff2e8, #8c21ff)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  } as React.CSSProperties,
  content: {
    color: '#ffffeb',
    fontSize: '1.5rem',
    lineHeight: '1.5',
    transform: 'rotate(-3deg)',
    fontFamily: 'Futuristic Shore, sans-serif',
    textTransform: 'uppercase',
  } as React.CSSProperties,
  floatAnimation: {
    animation: 'float 3s ease-in-out infinite',
  } as React.CSSProperties,
};

// Add media queries for responsiveness
const mediaQueries = `
  @media (max-width: 915px) {
    .image-bottom-left,
    .image-bottom-right {
      opacity: 0; // Hide images on tablets and smaller screens
    }
    .gradientBox {
      padding: 1rem;
      width: 90%;
      height: auto;
    }
    .title {
      font-size: 2rem;
      transform: rotate(0deg);
    }
    .content {
      font-size: 1.2rem;
      transform: rotate(0deg);
    }
  }
  @media (max-width: 480px) {
    .title {
      font-size: 1.5rem;
    }
    .content {
      font-size: 1rem;
    }
  }
`;

const mediaStyleTag = document.createElement('style');
mediaStyleTag.innerHTML = mediaQueries;
document.head.appendChild(mediaStyleTag);

export default WhatsInit;
