import React from 'react';
import './IntroVid.css'; // Import the CSS file for styles

const IntroVid: React.FC<{ videoSrc: string }> = ({ videoSrc }) => {
    return (
        <div className="video-container">
            <video className="intro-video" controls>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default IntroVid;
