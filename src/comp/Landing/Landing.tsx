import React, { useState, useEffect } from 'react';
import styles from './Landing.module.css';
import Navbar from '../Navbar/Navbar';
import backHeader from '../../static/main/cryptoHeader.webp';
import SliderComponent from './module/Slider/SliderComponent';

import Marquee from './module/Media/Marquee';
import According from './module/According/According';
import Features from './module/Features/Features';
import SupportsCoin from './module/SupportsCoin/SupportsCoin';
import StepsContainer from './module/StepsContainer/StepsContainer';
import Blog from './module/Blog/Blog';
import Footer from '../Footer/Footer';
import BackToTop from '../BackToTop/BackToTop';
import BurgerMenu from '../Navbar/BurgerrMenu';
import { useTranslation } from 'react-i18next';

export default function Landing() {
  const [openBurger, setOpenBurger] = useState<boolean>(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1150) {
        setOpenBurger(false); 
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

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
        {t('landing.header.text')}
        </h3>
        <h1 className={styles.landingTitle}>
        {t('landing.header.title')}
        </h1>
        <button className={styles.startButton}>
        {t('landing.header.startButton')}
        </button>

      </div>
      <SliderComponent />
      {/* <MediaComponent/> */}
      <div className={styles.marqueeCont}>
        <Marquee color='white'/>
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
