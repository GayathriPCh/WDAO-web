import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import mediumIcon from '../pages/medium.svg';
import instagramIcon from '../pages/instagram.svg';
import linkedinIcon from '../pages/linkedin.svg';
import telegramIcon from '../pages/telegram.svg';
import githubIcon from '../pages/github.svg';
import twitterIcon from '../pages/twitter.svg';
import discordIcon from '../pages/discord.svg';
import gmailIcon from '../pages/gmail.svg';
import stressIcon from '../pages/stress.png';

const NavigationBar = () => {
  const [isSocialDropdownOpen, setIsSocialDropdownOpen] = useState(false);

  const toggleSocialDropdown = () => {
    setIsSocialDropdownOpen((prevState) => !prevState);
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top" style={styles.navbar as React.CSSProperties}>
      <Container>
        <Navbar.Brand as={Link} to="/" style={styles.brand}>
          WallStreet DAO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={styles.navLinks}>
            <Nav.Link as={Link} to="/" style={styles.navLink}>Home</Nav.Link>
            <Nav.Link as={Link} to="/blog" style={styles.navLink}>Blog</Nav.Link>
            <Nav.Link as={Link} to="/events-calendar" style={styles.navLink}>Events Calendar</Nav.Link>
            <Nav.Link as={Link} to="/project-showcase" style={styles.navLink}>Project Showcase</Nav.Link>
            <Nav.Link as={Link} to="/news" style={styles.navLink}>News</Nav.Link>
            <Nav.Link as={Link} to="/mint-nft" style={styles.navLink}>Mint NFT</Nav.Link>
            <Nav.Link as={Link} to="/reviews" style={styles.navLink}>Reviews</Nav.Link>
            <Nav.Link as={Link} to="/digiboard" style={styles.navLink}>Digiboard</Nav.Link>
            <Nav.Link as={Link} to="/stress-test" style={styles.stressButton}>
              <img src={stressIcon} alt="Stress Icon" style={styles.stressIcon} />
            </Nav.Link>
            <div style={styles.dropdown as React.CSSProperties}>
              <button
                onClick={toggleSocialDropdown}
                style={{ ...styles.socialButton, ...(isSocialDropdownOpen && styles.socialButtonHover) }}
                className="nav-link"
              >
                Socials
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </button>
              {isSocialDropdownOpen && (
                <div style={styles.dropdownMenu as React.CSSProperties}>
                  <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                    <img src={discordIcon} alt="Discord" style={styles.icon} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" style={styles.icon} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={twitterIcon} alt="Twitter" style={styles.icon} />
                  </a>
                  <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
                    <img src={mediumIcon} alt="Medium" style={styles.icon} />
                  </a>
                  <a href="mailto:example@gmail.com">
                    <img src={gmailIcon} alt="Gmail" style={styles.icon} />
                  </a>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" style={styles.icon} />
                  </a>
                  <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                    <img src={telegramIcon} alt="Telegram" style={styles.icon} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" style={styles.icon} />
                  </a>
                </div>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
        <div style={styles.connectButtonContainer}>
          <ConnectButton />
        </div>
      </Container>
    </Navbar>
  );
};

const styles = {
  navbar: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(10px)',
    borderRadius: '10px',
    padding: '1rem',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
  },
  brand: {
    fontFamily: 'Moonhouse, sans-serif',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#90f542',
  },
  navLinks: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },
  navLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '0.9rem',
    margin: '0 1rem',
    transition: 'color 0.3s ease-in-out',
  },
  dropdown: {
    position: 'relative',
    marginLeft: '1rem',
  },
  socialButton: {
    padding: '10px 20px',
    backgroundColor: '#212121',
    border: '1px solid #fff',
    borderRadius: '5px',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
    display: 'flex',
    alignItems: 'center',
  },
  socialButtonHover: {
    backgroundColor: '#333',
    transform: 'translateY(-2px)',
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    right: 0,
    backgroundColor: 'rgba(0, 0, 0,0.9)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
  },
  icon: {
    width: '2rem',
    height: '2rem',
    margin: '0.5rem',
    transition: 'transform 0.3s ease-in-out',
  },
  connectButtonContainer: {
    marginLeft: '1rem',
  },
  stressButton: {
    background: '#000',
    border: 'none',
    borderRadius: '10px',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out',
  },
  stressIcon: {
    width: '40px',
    height: '40px',
    marginRight: '5px',
    transition: 'transform 0.3s ease-in-out',
  },
};

export default NavigationBar;
