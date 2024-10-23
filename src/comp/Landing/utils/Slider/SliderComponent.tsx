import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeather, faChessKing, faChessKnight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

import image1 from '../../../../static/carousel/pngegg.png';
import image2 from '../../../../static/carousel/—Pngtree—red blue trading candlestick up_18142023.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './SliderComponent.css';

const SliderComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div style={{ backgroundColor: '#000', padding: '25px', borderRadius: '15px', maxWidth: '100%', overflow: 'hidden' }}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper: SwiperClass) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        style={{ overflow: 'visible' }}
      >
        <SwiperSlide className='slideSwiper' >
          <div className="slide1">

            <div className="slideCont">
              <div>
                <h1 className="slideTitle">{t('slider.slide1.title')}
                </h1>
                <p className="slideText">{t('slider.slide1.text')}</p>
              </div>
              <div className="linkCont">
                <a className="slideLink"href="#"><FontAwesomeIcon icon={faFeather} /></a>
                <a className="slideLink"href="#"><FontAwesomeIcon icon={faChessKnight} /></a>
              </div>
            </div>



          </div>
        </SwiperSlide>
        <SwiperSlide className='slideSwiper' >
          <div style={{ textAlign: 'left' }}>
          <h1 className="slideTitle">{t('slider.slide2.title')}
                </h1>
                <p className="slideText">{t('slider.slide2.text')}</p>
            <div style={{ marginTop: '20px' }}>
              <img src="/path-to-certik-logo.png" alt="Certik" style={{ width: '100px', marginRight: '10px' }} />
              <img src="/path-to-uniswap-logo.png" alt="Uniswap" style={{ width: '100px' }} />
            </div>
          </div>
          <div>
            <img src="/path-to-image.png" alt="Crypto image" style={{ maxWidth: '300px', height: 'auto', marginLeft: '20px' }} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderComponent;
