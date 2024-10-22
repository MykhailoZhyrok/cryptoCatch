import React, { useEffect, useRef, useState } from 'react';
import './Marquee.css'; // Підключаємо файл стилів
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeather, faChessKing, faChessKnight } from '@fortawesome/free-solid-svg-icons';

const Marquee: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const items = [
    { icon: faFeather, title: 'CryptoProd1' },
    { icon: faChessKing, title: 'CryptoProd2' },
    { icon: faChessKnight, title: 'CryptoProd3' },
    { icon: faFeather, title: 'CryptoProd4' },
    { icon: faChessKing, title: 'CryptoProd5' },
    { icon: faChessKnight, title: 'CryptoProd6' },
    // { icon: faFeather, title: 'CryptoProd1' },
    // { icon: faChessKing, title: 'CryptoProd2' },
    // { icon: faChessKnight, title: 'CryptoProd3' },
    // { icon: faFeather, title: 'CryptoProd4' },
    // { icon: faChessKing, title: 'CryptoProd5' },
    // { icon: faChessKnight, title: 'CryptoProd6' },
  ];

  const calculateTranslateXEnd = () => {
    const marquee = marqueeRef.current;
    if (marquee) {
      const totalWidth = marquee.scrollWidth; 
      const screenWidth = window.innerWidth; 

      const translateXEnd = totalWidth / 3; 
      marquee.style.setProperty('--translateXEnd', `-${translateXEnd}px`);

     
    }
  };

  useEffect(() => {
    calculateTranslateXEnd(); 

    window.addEventListener('resize', calculateTranslateXEnd); 
    return () => window.removeEventListener('resize', calculateTranslateXEnd); 
  }, []);

  return (
    <div className="marquee-wrapper">
      <div
        className="marquee"
        ref={marqueeRef}
        style={{ animation: `marquee 10s linear infinite` }}
      >
        {items.map((item, index) => (
          <a key={index} style={{ padding: 10, textDecoration: 'none' }} href="#">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <FontAwesomeIcon style={{ fontSize: 60 }} icon={item.icon} />
              <h2>{item.title}</h2>
            </div>
          </a>
        ))}
        {items.map((item, index) => (
          <a key={`copy-${index}`} style={{ padding: 10, textDecoration: 'none' }} href="#">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <FontAwesomeIcon style={{ fontSize: 60 }} icon={item.icon} />
              <h2>{item.title}</h2>
            </div>
          </a>
        ))}
        {items.map((item, index) => (
          <a key={`copy-${index}`} style={{ padding: 10, textDecoration: 'none' }} href="#">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <FontAwesomeIcon style={{ fontSize: 60 }} icon={item.icon} />
              <h2>{item.title}</h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
