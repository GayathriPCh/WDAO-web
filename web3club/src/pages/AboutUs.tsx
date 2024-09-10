import React from 'react';
import styles from './AboutUs.module.css'; // Import CSS module for styling

const AboutUs: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>About Us</h1>
        <p>Learn about our Web3 club, its mission, and the team driving innovation in blockchain technology.</p>
      </header>

      <section className={styles.mission}>
        <h2>Our Mission</h2>
        <p>
          Our Web3 club was established to drive the adoption and understanding of blockchain technology among students and professionals. We focus on hosting events, workshops, and hackathons that foster innovation and provide hands-on experience with the latest in blockchain and decentralized technologies.
        </p>
        <p>
          Founded in 1947, our club has quickly become a hub for blockchain enthusiasts and industry professionals. We are dedicated to creating opportunities for learning, networking, and collaboration in the rapidly evolving world of Web3.
        </p>
      </section>

      <section className={styles.team}>
        <h2>Meet the Team</h2>

        <div className={styles.member}>
          <img src="https://blockgeeks.com/wp-content/uploads/2022/10/image5-1.png.webp" alt="Head" className={styles.image} />
          <div className={styles.details}>
            <h3>T.Manas</h3>
            <p><strong>President/Founder/Dev</strong></p>
            <p>This guy is the driving force behind our major projects and events. His leadership ensures that our club remains dynamic and impactful in the Web3 space. (future tense) </p>
          </div>
        </div>

        <div className={styles.member}>
          <img src="https://blockgeeks.com/wp-content/uploads/2022/10/image2-2.png.webp" alt="Co-Head" className={styles.image} />
          <div className={styles.details}>
            <h3>Gayathri Chowdhary parepalli</h3>
            <p><strong>Co-founder/Secretary/Developer</strong></p>
            <p>This dude assists in managing the club's activities and supports the president in executing the strategic vision. Her contributions are essential in ensuring that our events and workshops are successful.</p>
          </div>
        </div>

        <div className={styles.member}>
          <img src="https://blockgeeks.com/wp-content/uploads/2022/10/image4-1.png.webp" alt="Lead" className={styles.image} />
          <div className={styles.details}>
            <h3>Sujith Bojjowwarr</h3>
            <p><strong>Vice-president/Doesnt exist</strong></p>
            <p>Leads our hackathon and workshop teams, providing guidance and support to ensure the high quality of our technical sessions.(None of this is true)</p>
          </div>
        </div>

        <div className={styles.member}>
          <img src="https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=645&dpr=2&s=none" alt="Co-Lead" className={styles.image} />
          <div className={styles.details}>
            <h3>AtmalaSCK</h3>
            <p><strong>Co-Vice-President/Unfortunately senior</strong></p>
            <p>Brother collaborates with the lead in organizing events and managing club activities. New season new character.</p>
          </div>
        </div>

      
      </section>

      <section className={styles.contact}>
        <p>For more information, reach out to us at <a href="mailto:wallstreetclub@klh.edu.in">wallstreetclub@klh.edu.in</a>.</p>
      </section>
    </div>
  );
};

export default AboutUs;
