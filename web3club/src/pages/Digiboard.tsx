import React, { useState } from 'react';
import styles from './Gallery.module.css';

interface VideoLink {
  imageUrl: string;
  youtubeUrl: string;
  title: string;
}

const videoLinks: VideoLink[] = [
  {
    imageUrl: "https://pixelplex.io/wp-content/uploads/2022/12/proof-of-attendance-protocol-meta.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=2P7XFy4iBkw",
    title: "Minting your POAP NFT"
  },
  {
    imageUrl: "https://images.ctfassets.net/9sy2a0egs6zh/77mVisJcj8sMquYlW3iq73/5f0ba3c515110d4786d689cbb6839745/home_featured.png",
    youtubeUrl: "https://youtu.be/-t7dnQdU_bw?si=Cx2xSih4XdZDi14u",
    title: "Metamask setup"
  },
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYMjWeGeV3vYMS42LX1t-Iftl1_B0rSzCmzA&s",
    youtubeUrl: "https://youtu.be/CHncNurfeDI?si=uVaWLJHWKdwU5le7",
    title: "Subwallet setup"
  },
  // Add more video links as needed
];

interface Image {
  url: string;
  description: string;
}

interface Event {
  name: string;
  driveLink: string;
  images: Image[];
}

const events: Event[] = [
  {
    name: "Aleph Zero India event at KLH",
    driveLink: "https://drive.google.com/example1",
    images: [
      {url:"https://media.licdn.com/dms/image/v2/D4E22AQEY8Fi0rtzzwg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727422076565?e=1734566400&v=beta&t=Fs14zFmjhA4QiQuLh3GnwFZESceI-oofvMzCz4yu_64",description:"Honored principal with speakers and guests"},
      { url: "https://media.licdn.com/dms/image/v2/D4E22AQHJgVBLUIwkbQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727422074203?e=1734566400&v=beta&t=ksN0N-QFsnkwGuoj7rc35Ao7Sl4QnhGIUq1lkmiwwak", description: "Honored principal falicitating Mr Rajashekar Makala" },

      { url: "https://media.licdn.com/dms/image/v2/D4E22AQE8N9F_yzLRHw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727422073310?e=1734566400&v=beta&t=LxTUB-bFIPItua-FgWtYTDlyEr5ZLtJiNHj2S9lxXNw", description: "Honored principal felicitating Mr. Siv ram shastri Jonnalagadda" },
      {url:"https://media.licdn.com/dms/image/v2/D5622AQGGjrf-fFZzww/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727931388093?e=1734566400&v=beta&t=N3IzeI-d0ejAvhaDzRGqytVjEA3eOoNyX9bfQn4USMQ",description:""},
      {url:"https://media.licdn.com/dms/image/v2/D4E22AQGlRQFnN4u5tQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1727262835108?e=1734566400&v=beta&t=BdzKBhh2cXpBtTLHbfWy9iHqfy2zNsZPMlKDpQLTTSU",description:""},
      { url: "https://media.licdn.com/dms/image/v2/D4E22AQHjVu-TivUDzQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727422072360?e=1734566400&v=beta&t=zzQ8ROr-wL6mroY2nXDyHQUaDXO3vOFYzystgV4FrdA", description: "Aleph zero India leads with the Wallstreet DAO crew" },
      { url: "https://media.licdn.com/dms/image/v2/D4E22AQE4Eky_nxgaHw/feedshare-shrink_1280/feedshare-shrink_1280/0/1727422068508?e=1734566400&v=beta&t=-EBVERG-MVx9usQsm1r8ajVPLtTo7FZq_t415aXpPlU", description: "Mr Siv Ram Shastri explaining the common protocol" },
      { url: "https://media.licdn.com/dms/image/v2/D4E22AQEjZj5G0F5IVw/feedshare-shrink_1280/feedshare-shrink_1280/0/1727422068429?e=1734566400&v=beta&t=d2R5s7c3vbWFBqGM4at3bhJ2n7xqIIDAt3FKQramYac", description: "Mr Siv ram shastri going over the adoption of web3 over the years" },
      { url: "https://media.licdn.com/dms/image/v2/D4E22AQEoFB9PXd_0sg/feedshare-shrink_1280/feedshare-shrink_1280/0/1727422070595?e=1734566400&v=beta&t=HB6kvIs6bGNWIqiNqYsQCc4BQELLZTdG9o0v6M71ppo", description: "Mr Rajashekar Makala giving an intro on Aleph zero" },
     

      // Add more images as needed
    ]
  },
  
  // Add more events as needed
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>WallStreet DAO Event Gallery</h1>
        <p>Explore our past events and activities in the world of Web3 and blockchain.</p>
      </header>

      <section className={styles.videoLinks}>
        <h2>Featured Videos</h2>
        <div className={styles.videoLinkContainer}>
          {videoLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.youtubeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.videoLink}
            >
              <img src={link.imageUrl} alt={link.title} className={styles.videoThumbnail} />
              <p className={styles.videoTitle}>{link.title}</p>
            </a>
          ))}
        </div>
      </section>

      {events.map((event, index) => (
        <section key={index} className={styles.event}>
          <h2>
            <a href={event.driveLink} target="_blank" rel="noopener noreferrer" className={styles.eventLink}>
              {event.name}
            </a>
          </h2>
          <div className={styles.imageGrid}>
            {event.images.map((image, imageIndex) => (
              <div key={imageIndex} className={styles.imageWrapper}>
                <img 
                  src={image.url} 
                  alt={`Event image ${imageIndex + 1}`} 
                  className={styles.eventImage}
                  onClick={() => setSelectedImage(image)}
                />
              </div>
            ))}
          </div>
        </section>
      ))}

      {selectedImage && (
        <div className={styles.modal} onClick={() => setSelectedImage(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.url} alt="Selected event" className={styles.modalImage} />
            <p>{selectedImage.description}</p>
          </div>
        </div>
      )}

      <section className={styles.contact}>
        <p>For more information, reach out to us at <a href="mailto:wallstreetclub@klh.edu.in">wallstreetclub@klh.edu.in</a>.</p>
      </section>
    </div>
  );
};

export default Gallery;