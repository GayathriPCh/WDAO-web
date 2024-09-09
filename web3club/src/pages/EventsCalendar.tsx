import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { collection, getDocs } from 'firebase/firestore'; 
import { db } from '../firebase'; // Import the Firestore instance
import './backbutton.css'; 
import bgImage from './bgcal.jpeg'; 

const EventsCalendar: React.FC = () => {
  const [events, setEvents] = useState<{ id: string; [key: string]: any }[]>([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Audiowide';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Fetch events from Firestore
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'events'));
        const eventsArray: { id: string; [key: string]: any }[] = [];
        querySnapshot.forEach((doc) => {
          eventsArray.push({ id: doc.id, ...doc.data() });
        });
        setEvents(eventsArray);
      } catch (error) {
        console.error("Error fetching events: ", error);
      }
    };

    fetchEvents();
  }, []);

  const handleGoBack = () => {
    navigate('/'); 
  };

  const [, setIsHovered] = useState(false);

  return (
    <div style={styles.container}>
      <button
        className="btn"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleGoBack}
        style={styles.backButton}
      >
        Back
      </button>

      <h1 style={styles.heading}>Events Calendar</h1>
      {events.map((event, index) => (
        <div
          key={event.id}
          id={`card-${event.id}`}
          style={{
            ...styles.event,
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
          }}
        >
          <div style={styles.imageContainer}>
            <img src={event.imageUrl} alt={event.title} style={styles.image} />
          </div>
          <div style={styles.content}>
            <h2 style={styles.eventTitle}>{event.title}</h2>
            <p style={styles.eventDescription}>{event.description}</p>
            <button
              style={styles.button}
              onClick={() => window.location.href = event.link}
              onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundImage = 'linear-gradient(to right, #00c9ff 0%, #92fe9d 100%)'}
              onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundImage = 'linear-gradient(to right, #b721ff 0%, #21d4fd 100%)'}
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

import { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '2rem',
    color: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    cursor: 'pointer',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '3cm',
    fontFamily: "'Audiowide', sans-serif",
    color: '#ffffff',
    textShadow: '0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #aa00aa, 0 0 40px #aa00aa, 0 0 50px #aa00aa, 0 0 60px #aa00aa, 0 0 70px #aa00aa',
    textAlign: 'center',
    padding: '20px 0',
  },
  eventTitle: {
    fontFamily: "'Audiowide', sans-serif",
    fontSize: '24px',
    marginBottom: '5px',
  },
  eventDescription: {
    fontFamily: "'Audiowide', sans-serif",
    fontSize: '16px',
    marginBottom: '10px',
  },
  eventsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  event: {
    width: '80%',
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    opacity: 1,
    transition: 'opacity 0.5s ease-in-out',
    background: 'rgba(0, 0, 0, 0.7)',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  content: {
    flex: 1,
    padding: '20px',
  },
  button: {
    fontFamily: "'Audiowide', sans-serif",
    color: '#fff',
    backgroundImage: 'linear-gradient(to right, #b721ff 0%, #21d4fd 100%)',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
  },
};

export default EventsCalendar;
