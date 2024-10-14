// Marquee.tsx
import React from 'react';
import './Marquee.css'; // Create a CSS file for styling

const Marquee: React.FC = () => {
  const blogImages = [
    { src: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*ttmPrBegrcWHAnZbzUIZRA.png', alt: 'Blog 1', href: '/blogs/1' },
    { src: 'https://media.licdn.com/dms/image/v2/D4D22AQEDcIvoTear9Q/feedshare-shrink_800/feedshare-shrink_800/0/1726735458706?e=1729728000&v=beta&t=76D7WPr5FRv9HJTEvaH6LE6NKRm2ZmKqPuQ5W5dA34o', alt: 'Blog 2', href: '/blogs/2' },
    { src: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*TDeYOyUj-CTkFJzZ8nuR_A.png', alt: 'Blog 3', href: '/blogs/3' },
    // Add more images as needed
    { src: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*ttmPrBegrcWHAnZbzUIZRA.png', alt: 'Blog 1', href: '/blogs/1' },
    { src: 'https://media.licdn.com/dms/image/v2/D4D22AQEDcIvoTear9Q/feedshare-shrink_800/feedshare-shrink_800/0/1726735458706?e=1729728000&v=beta&t=76D7WPr5FRv9HJTEvaH6LE6NKRm2ZmKqPuQ5W5dA34o', alt: 'Blog 2', href: '/blogs/2' },
    { src: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*TDeYOyUj-CTkFJzZ8nuR_A.png', alt: 'Blog 3', href: '/blogs/3' },
  ];

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
