// Marquee.tsx
import React from 'react';
import './Marquee.css'; // Create a CSS file for styling

const Marquee: React.FC = () => {
  const blogImages = [
    { src: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*ttmPrBegrcWHAnZbzUIZRA.png', alt: 'Blog 1', href: '/blogs/1' },
    { src: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*w5lDIbsK9DjzSPBBuwyOqQ.png', alt: 'Blog 2', href: '/blogs/2' },
    { src: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*TDeYOyUj-CTkFJzZ8nuR_A.png', alt: 'Blog 3', href: '/blogs/3' },
    { src: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*sYCtIJpI2ajXvRpA06OV3w.png', alt: 'Blog 4', href: '/blogs/4' },
    {src: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*VY1_UwoRviJLxcjkY5mT8A.png', alt: 'Blog 5', href: '/blogs/5'},
    {src: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*1UT3VOKpk7t1rC0jnufaxg.png', alt: 'Blog 6', href: '/blogs/6'},
    // Add more images as needed
    { src: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*ttmPrBegrcWHAnZbzUIZRA.png', alt: 'Blog 1', href: '/blogs/1' },
    { src: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*w5lDIbsK9DjzSPBBuwyOqQ.png', alt: 'Blog 2', href: '/blogs/2' },
    { src: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*TDeYOyUj-CTkFJzZ8nuR_A.png', alt: 'Blog 3', href: '/blogs/3' },
    { src: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*sYCtIJpI2ajXvRpA06OV3w.png', alt: 'Blog 4', href: '/blogs/4' },
    {src: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*VY1_UwoRviJLxcjkY5mT8A.png', alt: 'Blog 5', href: '/blogs/5'},
    {src: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*1UT3VOKpk7t1rC0jnufaxg.png', alt: 'Blog 6', href: '/blogs/6'},  ];

  return (
    <div className="marquee-container">
      <h2 className="marquee-title">Get Started with Our Blogs</h2>
      <div className="marquee">
        {blogImages.map((image, index) => (
          <a key={index} href={image.href} className="marquee-item">
            <img src={image.src} alt={image.alt} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
