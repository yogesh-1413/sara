import React, { useState, useEffect } from 'react';
import './BackToTopButton.css'; // Import the CSS file

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className={`back-to-top-button ${isHovering ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}

      >
        {/* {isHovering ? 'Back to Top' : ''}
        {!isHovering && (
          <svg viewBox="0 0 24 24" fill="currentColor" className="arrow-up-icon w-6 h-6 text-white dark:text-black">
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
          </svg>
        )} */}
        {isHovering ? (
          <span className="text-white dark:text-black">Back to Top</span>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="arrow-up-icon w-6 h-6 text-white dark:text-black"
          >
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
          </svg>
        )}
      </button>
    )
  );
};

export default BackToTopButton;