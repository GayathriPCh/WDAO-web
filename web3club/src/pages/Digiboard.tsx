import React, { useState } from 'react';
import styles from './Gallery.module.css';

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
    name: "Blockchain Workshop 2023",
    driveLink: "https://drive.google.com/example1",
    images: [
      { url: "https://example.com/image1.jpg", description: "Participants learning about smart contracts" },
      { url: "https://example.com/image2.jpg", description: "Hands-on coding session" },
      // Add more images as needed
    ]
  },
  {
    name: "Crypto Trading Seminar",
    driveLink: "https://drive.google.com/example2",
    images: [
      { url: "https://example.com/image3.jpg", description: "Expert speaker explaining trading strategies" },
      { url: "https://example.com/image4.jpg", description: "Q&A session with attendees" },
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