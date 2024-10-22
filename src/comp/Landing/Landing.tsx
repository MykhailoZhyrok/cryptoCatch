import React, { useState, useEffect } from 'react';
import styles from './Landing.module.css';
import Navbar from '../Navbar/Navbar';
import backHeader from '../../static/main/cryptoHeader.webp';
import SliderComponent from './utils/Slider/SliderComponent';

import Marquee from './utils/Media/Marquee';
import According from './utils/According/According';
import Features from './utils/Features/Features';
import SupportsCoin from './utils/SupportsCoin/SupportsCoin';
import StepsContainer from './utils/StepsContainer/StepsContainer';
import Blog from './utils/Blog/Blog';
import Footer from '../Footer/Footer';
import BackToTop from '../BackToTop/BackToTop';
import BurgerMenu from '../Navbar/BurgerrMenu';

export default function Landing() {
  const [openBurger, setOpenBurger] = useState(false)
  useEffect(() => {
    // Функція для перевірки розміру вікна
    const handleResize = () => {
      if (window.innerWidth > 1150) {
        setOpenBurger(false); // Закриваємо бургер-меню, якщо ширина більше 1150px
      }
    };

    // Додаємо прослуховувач на зміну розміру
    window.addEventListener('resize', handleResize);

    // Викликаємо функцію при першому рендері, щоб перевірити початковий розмір
    handleResize();

    // Прибираємо прослуховувач при відмонтуванні компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={styles.burgerMenuCont} >
      
        {openBurger ? 
        <div className={styles.burgerCont}>
          <BurgerMenu setOpenBurger={setOpenBurger} /> 
        </div>:  <div>
      
      
      <Navbar setOpenBurger={setOpenBurger} />
      
      <div className={styles.landingHeader}>
        <h3 className={styles.landingText}>
          ПРИНИМАЙТЕ КРИПТОПЛАТЕЖИ
        </h3>
        <h1 className={styles.landingTitle}>
          Криптокач
        </h1>
        <button className={styles.startButton}>
          НАЧАЛО РАБОТЫ
        </button>

      </div>
      <SliderComponent />
      {/* <MediaComponent/> */}
      <div className={styles.marqueeCont}>
        <Marquee />
      </div>
      <According />
      <Features />
      <SupportsCoin />
      <StepsContainer />
      <Blog />
      <BackToTop />
      <Footer />
    </div>}
   
    </div>
  );
}
