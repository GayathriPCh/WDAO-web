import React from 'react';
import './IntroVid.css'; // Import the CSS file for styles

const IntroVid: React.FC<{ videoSrc: string }> = ({ videoSrc }) => {
    return (
        <div className="video-container">
            <video className="intro-video" autoPlay loop muted>
                <source src={videoSrc} type="video/webm" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default IntroVid;
