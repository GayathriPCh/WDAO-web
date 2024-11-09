import React from 'react';
import styles from './AboutUs.module.css';
import linkedin from '../assets/ll.png';
import github from '../assets/social.svg';
import sujith from '../assets/sujith.jpg';
import niharika from '../assets/niharika.jpg';
import manas from '../assets/manas.jpg';
import gayathri from '../assets/gayathri.png';
const AboutUs: React.FC = () => {
  const teamMembers = [
    { name: "T.Manas", role: "President & Founder/Dev", image: manas, linkedin: "https://www.linkedin.com/in/t-manas-chakravarty-91958224b/", github: "https://github.com/tmanas06" },
    { name: "P. Gayathri", role: "Secretary, Co-Founder & Developer", image: gayathri, linkedin: "https://www.linkedin.com/in/gayathri-pch/", github: "https://github.com/GayathriPCh" },
    { name: "B. Sujith", role: "Vice President", image: sujith, linkedin: "https://www.linkedin.com/in/sujith-bojjawar-26b820256/", github: "https://github.com" },
    { name: "R Niharika", role: "Operations Manager", image: niharika, linkedin: "https://www.linkedin.com", github: "https://github.com" },
    { name: "Shreya", role: "Management Head", image: "https://avatars.githubusercontent.com/u/113188197?v=4", linkedin: "https://www.linkedin.com", github: "https://github.com" },
    { name: "Dileep", role: "Marketing & Social Media Head", image: "https://avatars.githubusercontent.com/u/113188197?v=4", linkedin: "https://www.linkedin.com", github: "https://github.com" },
    { name: "Hasritha Reddy", role: "Marketing & Social Media Head 2", image: "https://avatars.githubusercontent.com/u/113188197?v=4", linkedin: "https://www.linkedin.com/in/krishna-swadeep/", github: "https://github.com" },
    { name: "Thanmai", role: "Research Head", image: "https://avatars.githubusercontent.com/u/113188197?v=4", linkedin: "https://www.linkedin.com/in/siripurapu-snehitha-1b1742295/", github: "https://github.com" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>About Us</h1>
        <p>Learn about our Web3 club, its mission, and the team driving innovation in blockchain technology.</p>
      </header>

      <section className={styles.mission}>
        <h2>Our Mission</h2>
        <p>
          Welcome to WallStreet DAO, where the next-gen hustlers and degens come together to dive deep into the world of Web3, DeFi, and decentralized tech. We're all about getting ahead of the curve in the crypto space, learning how to ape into new protocols, and building our own decentralized futures. Whether you're coding smart contracts, stacking sats, or just vibing with the decentralized movement, WallStreet DAO is the place to be.
        </p>
        <p>
          We throw down with workshops, hackathons, and alpha drops, connecting you to the hottest trends in the blockchain world. If you're looking to get rugged less and moon more, we've got your back. Let's take this space to the next level—together.
        </p>
      </section>

      <section className={styles.team}>
        <h2>Meet the Team</h2>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.memberCard}>
              <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <img src={member.image} alt={member.name} className={styles.image} />
                  </div>
                  <div className={styles.flipCardBack}>
                    <img src="https://w0.peakpx.com/wallpaper/37/107/HD-wallpaper-neon-genesis-evangelion-vaporwave.jpg" alt="Avatar" className={styles.avatar} />
                  </div>
                </div>
              </div>
              <h3>{member.name}</h3>
              <p><strong>{member.role}</strong></p>
              <div className={styles.socialLinks}>
              <a href={member.linkedin} className={styles.socialButton} target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="LinkedIn" className={styles.socialIcon} />
                </a>
                <a href={member.github} className={styles.socialButton} target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="GitHub" className={styles.socialIcon} />
                </a>              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.contact}>
        <p>For more information, reach out to us at <a href="mailto:wallstreetclub@klh.edu.in">wallstreetclub@klh.edu.in</a>.</p>
      </section>
    </div>
  );
};

export default AboutUs;