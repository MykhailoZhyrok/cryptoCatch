import React, { useEffect, useState } from 'react';
import './BackToTop.css';

export default function BackToTop() {
const [isVisible, setIsVisible] = useState<boolean>(false);

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      className="back-to-top"
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none' }} 
    >
      &#8679;
    </button>
  );
}
