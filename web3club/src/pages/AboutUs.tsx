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
        Welcome to WallStreet DAO, where the next-gen hustlers and degens come together to dive deep into the world of Web3, DeFi, and decentralized tech. We're all about getting ahead of the curve in the crypto space, learning how to ape into new protocols, and building our own decentralized futures. Whether you're coding smart contracts, stacking sats, or just vibing with the decentralized movement, WallStreet DAO is the place to be.
        </p>
        <p>
        We throw down with workshops, hackathons, and alpha drops, connecting you to the hottest trends in the blockchain world. If you're looking to get rugged less and moon more, we’ve got your back. Let's take this space to the next level—together.
        </p>
      </section>

      <section className={styles.team}>
        <h2>Meet the Team</h2>

        {/* Team Member 1 */}
        <div className={styles.member}>
          <div className={styles.profile}>
            <div className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxLOP-difMBMG3oknhDI0yKM0ky9P6rnSGzg&s" alt="T.Manas" className={styles.image} />
                </div>
                <div className={styles.flipCardBack}>
                  <img src="https://w0.peakpx.com/wallpaper/37/107/HD-wallpaper-neon-genesis-evangelion-vaporwave.jpg" alt="Avatar" className={styles.avatar} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.details}>
            <h3>T.Manas</h3>
            <p><strong>President & Founder/Dev</strong></p>
            <p>The one who got WallStreet DAO rolling 🌟 and keeps us moving forward, ensuring the team stays focused on the mission while leaving plenty of room for innovation.</p>
            <div className={styles.links}>
  <a href="https://www.linkedin.com/in/t-manas-chakravarty-91958224b/" className={styles.linkedinButton} target="_blank" rel="noopener noreferrer">LinkedIn</a>
  <a href="https://github.com/tmanas06" className={styles.githubButton} target="_blank" rel="noopener noreferrer">GitHub</a>
</div>

          </div>
        </div>

        {/* Repeat similar structure for other team members */}
        <div className={styles.member}>
          <div className={styles.profile}>
            <div className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img src="https://avatars.githubusercontent.com/u/132088009?v=4" alt="T.Manas" className={styles.image} />
                </div>
                <div className={styles.flipCardBack}>
                  <img src="https://w0.peakpx.com/wallpaper/37/107/HD-wallpaper-neon-genesis-evangelion-vaporwave.jpg" alt="Avatar" className={styles.avatar} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.details}>
            <h3>P. Gayathri</h3>
            <p><strong>Secretary, Co-Founder & Developer</strong></p>
            <p>The multitasker that keeps it all together. 💻🔧 From building our site to organizing events and brainstorming new initiatives, she handles it all. If something needs doing, you can bet they're on it.</p>
            <div className={styles.links}>
  <a href="https://www.linkedin.com/in/gayathri-pch/" className={styles.linkedinButton} target="_blank" rel="noopener noreferrer">LinkedIn</a>
  <a href="https://github.com/GayathriPCh" className={styles.githubButton} target="_blank" rel="noopener noreferrer">GitHub</a>
</div>

          </div>
        </div>
        <div className={styles.member}>
          <div className={styles.profile}>
            <div className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img src="https://blockgeeks.com/wp-content/uploads/2022/10/image5-1.png.webp" alt="T.Manas" className={styles.image} />
                </div>
                <div className={styles.flipCardBack}>
                  <img src="https://w0.peakpx.com/wallpaper/37/107/HD-wallpaper-neon-genesis-evangelion-vaporwave.jpg" alt="Avatar" className={styles.avatar} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.details}>
            <h3>B. Sujith</h3>
            <p><strong>Vice President</strong></p>
            <p>The strategist who keeps us on course. 📊 He coordinates our projects, plans our initiatives, and makes sure we stay on track with our goals in the Web3 space.</p>
            <div className={styles.links}>
  <a href="https://www.linkedin.com" className={styles.linkedinButton} target="_blank" rel="noopener noreferrer">LinkedIn</a>
  <a href="https://github.com" className={styles.githubButton} target="_blank" rel="noopener noreferrer">GitHub</a>
</div>

          </div>
        </div>
        <div className={styles.member}>
          <div className={styles.profile}>
            <div className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img src="https://blockgeeks.com/wp-content/uploads/2022/10/image5-1.png.webp" alt="T.Manas" className={styles.image} />
                </div>
                <div className={styles.flipCardBack}>
                  <img src="https://w0.peakpx.com/wallpaper/37/107/HD-wallpaper-neon-genesis-evangelion-vaporwave.jpg" alt="Avatar" className={styles.avatar} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.details}>
            <h3>R Niharika</h3>
            <p><strong>Treasurer</strong></p>
            <p>The finance pro. 💵 Oversees our budget and manages our funds, making sure we’re financially prepared for every step forward.</p>
            <div className={styles.links}>
  <a href="https://www.linkedin.com" className={styles.linkedinButton} target="_blank" rel="noopener noreferrer">LinkedIn</a>
  <a href="https://github.com" className={styles.githubButton} target="_blank" rel="noopener noreferrer">GitHub</a>
</div>

          </div>
        </div>
        <div className={styles.member}>
          <div className={styles.profile}>
            <div className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img src="https://avatars.githubusercontent.com/u/113188197?v=4" alt="T.Manas" className={styles.image} />
                </div>
                <div className={styles.flipCardBack}>
                  <img src="https://w0.peakpx.com/wallpaper/37/107/HD-wallpaper-neon-genesis-evangelion-vaporwave.jpg" alt="Avatar" className={styles.avatar} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.details}>
            <h3>Hasritha Reddy</h3>
            <p><strong>Social Media Lead 1</strong></p>
            <p>The trendspotter. 📲 Has their finger on the pulse of what’s trending, curating content that keeps the DAO buzzing and our community in the loop with all things Web3.</p>
            <div className={styles.links}>
  <a href="https://www.linkedin.com" className={styles.linkedinButton} target="_blank" rel="noopener noreferrer">LinkedIn</a>
  <a href="https://github.com" className={styles.githubButton} target="_blank" rel="noopener noreferrer">GitHub</a>
</div>

          </div>
          
        </div>
        <div className={styles.member}>
          <div className={styles.profile}>
            <div className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img src="https://avatars.githubusercontent.com/u/113188197?v=4" alt="T.Manas" className={styles.image} />
                </div>
                <div className={styles.flipCardBack}>
                  <img src="https://w0.peakpx.com/wallpaper/37/107/HD-wallpaper-neon-genesis-evangelion-vaporwave.jpg" alt="Avatar" className={styles.avatar} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.details}>
            <h3>Dileep </h3>
            <p><strong>Social Media Lead 2</strong></p>
            <p>The community builder. 💬 Who's  all about engaging with the DAO’s followers, sparking conversations, and keeping the vibe alive across all our social platforms.
            </p>
            <div className={styles.links}>
  <a href="https://www.linkedin.com/in/siripurapu-snehitha-1b1742295/" className={styles.linkedinButton} target="_blank" rel="noopener noreferrer">LinkedIn</a>
  <a href="https://github.com" className={styles.githubButton} target="_blank" rel="noopener noreferrer">GitHub</a>
</div>

          </div>
          
        </div>
        <div className={styles.member}>
          <div className={styles.profile}>
            <div className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img src="https://avatars.githubusercontent.com/u/113188197?v=4" alt="T.Manas" className={styles.image} />
                </div>
                <div className={styles.flipCardBack}>
                  <img src="https://w0.peakpx.com/wallpaper/37/107/HD-wallpaper-neon-genesis-evangelion-vaporwave.jpg" alt="Avatar" className={styles.avatar} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.details}>
            <h3>Krishna Swadeep</h3>
            <p><strong>Onboarding Mentor 1</strong></p>
            <p>The go-to guide. 🛠️ Helps new members get up to speed, showing them the ropes and making sure they feel right at home in the DAO’s world.</p>
            <div className={styles.links}>
  <a href="https://www.linkedin.com/in/krishna-swadeep/" className={styles.linkedinButton} target="_blank" rel="noopener noreferrer">LinkedIn</a>
  <a href="https://github.com" className={styles.githubButton} target="_blank" rel="noopener noreferrer">GitHub</a>
</div>

          </div>
          
        </div>
        <div className={styles.member}>
          <div className={styles.profile}>
            <div className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img src="https://avatars.githubusercontent.com/u/113188197?v=4" alt="T.Manas" className={styles.image} />
                </div>
                <div className={styles.flipCardBack}>
                  <img src="https://w0.peakpx.com/wallpaper/37/107/HD-wallpaper-neon-genesis-evangelion-vaporwave.jpg" alt="Avatar" className={styles.avatar} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.details}>
            <h3>S. Snehitha</h3>
            <p><strong>Onboarding Mentor 2</strong></p>
            <p>The mentor with a knack for making things simple. 🌐 Breaks down the complexities of Web3, helping newcomers dive in without getting overwhelmed.</p>
            <div className={styles.links}>
  <a href="https://www.linkedin.com" className={styles.linkedinButton} target="_blank" rel="noopener noreferrer">LinkedIn</a>
  <a href="https://github.com" className={styles.githubButton} target="_blank" rel="noopener noreferrer">GitHub</a>
</div>

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



