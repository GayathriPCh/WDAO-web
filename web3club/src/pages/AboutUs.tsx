import React from 'react';
import styles from './AboutUs.module.css';
import linkedin from '../assets/ll.png';
import github from '../assets/social.svg';
import sujith from '../assets/sujith.jpg';
import niharika from '../assets/niharika.jpg';
import manas from '../assets/manas.jpg';
import gayathri from '../assets/gayathri.png';
import hasritha from '../assets/hasritha.jpg';
import thanmai from '../assets/thanmai.jpg';
import shreya from '../assets/shreya.jpg';
const AboutUs: React.FC = () => {
  const teamMembers = [
    { name: "T.Manas", role: "President & Founder/Dev", image: manas, backImage: "https://www.shutterstock.com/image-photo/rates-stock-quotes-business-man-600nw-2061468485.jpg", linkedin: "https://www.linkedin.com/in/t-manas-chakravarty-91958224b/", github: "https://github.com/tmanas06" },
    { name: "P. Gayathri", role: "Secretary, Co-Founder & Developer", image: gayathri, backImage: "https://i.pinimg.com/564x/1a/c9/6a/1ac96a3141e31fc6242f87e503854c7a.jpg", linkedin: "https://www.linkedin.com/in/gayathri-pch/", github: "https://github.com/GayathriPCh" },
    { name: "B. Sujith", role: "Vice President", image: sujith, backImage: "https://i.pinimg.com/564x/6e/54/aa/6e54aa40120e60a46b2dc45ca09acaa8.jpg", linkedin: "https://www.linkedin.com/in/sujith-bojjawar-26b820256/", github: "https://github.com" },
    { name: "R Niharika", role: "Operations Manager", image: niharika, backImage: "https://i.pinimg.com/564x/c4/c6/96/c4c696d43555c08f806375759e1b7528.jpg", linkedin: "https://www.linkedin.com", github: "https://github.com" },
    { name: "Shreya", role: "Management Head", image: shreya, backImage: "", linkedin: "https://www.linkedin.com", github: "https://github.com" },
    { name: "Dileep", role: "Marketing & Social Media Head", image: "https://i.pinimg.com/564x/60/ca/c6/60cac66714cc6f5ebfde310e65650032.jpg", backImage: "https://i.pinimg.com/564x/60/ca/c6/60cac66714cc6f5ebfde310e65650032.jpg", linkedin: "https://www.linkedin.com", github: "https://github.com" },
    { name: "Hasritha Reddy", role: "Marketing & Social Media Head 2", image: hasritha, backImage: "https://i.pinimg.com/564x/6a/bc/77/6abc7722c73ecf39b699907483dae29d.jpg", linkedin: "https://www.linkedin.com/in/krishna-swadeep/", github: "https://github.com" },
    { name: "Thanmai", role: "Research Head", image: thanmai, backImage: "", linkedin: "https://www.linkedin.com/in/siripurapu-snehitha-1b1742295/", github: "https://github.com" },
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
<section className={styles.acknowledgments}>
        <h2>Acknowledgments</h2>
        <div className={styles.acknowledgmentContent}>
          <div className={styles.principal}>
            <img src="https://klh.edu.in/wp-content/uploads/2023/08/Ramakrishna.jpg" alt="Dr. A Ramakrishna" className={styles.acknowledgmentImage} />
            <h3>Our Principal</h3>
            <p>We extend our sincere gratitude to our esteemed Principal, <strong>Dr. A Ramakrishna</strong>, for his unwavering support and guidance in our endeavors.</p>
          </div>
          <div className={styles.skillingDean}>
            <img src="https://klh.edu.in/wp-content/uploads/2022/01/sravan.jpg" alt="Sr. Sravan Kumar Gunturi" className={styles.acknowledgmentImage} />
            <h3>Special Thanks</h3>
            <p>We would like to express our heartfelt thanks to our Skilling Dean, <strong>Sr. Sravan Kumar Gunturi</strong>, for his invaluable contributions and encouragement in our journey towards innovation in blockchain technology, by supporting us in establishing this club.</p>
          </div>
        </div>
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
              <img src={member.backImage} alt={`${member.name} back`} className={styles.avatar} />
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
          </a>
        </div>
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