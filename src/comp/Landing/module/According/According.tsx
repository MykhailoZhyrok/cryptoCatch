import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faMinus, faPlus, faQrcode } from '@fortawesome/free-solid-svg-icons';
import './According.css';
import img1 from '../../../../static/according/png-clipart-bitcoin-cryptocurrency-blockchain-digital-currency-satoshi-nakamoto-crypto-currency-business-metal-thumbnail.png'
// import img2 from '../../../../static/according/png-clipart-bitcoin-network-cloud-mining-cryptocurrency-crypto-angle-logo-thumbnail.png'
// import img3 from '../../../../static/according/png-clipart-can-crypto-exchange-business-can-stock-photo-thumbnail.png'
import img4 from '../../../../static/according/44.jpg'
import { useTranslation } from 'react-i18next';

import PaymentBox from '../../../Main/PaymentBox';

export default function According() {
  const [isCollapsed, setIsCollapsed] = useState<number>(1);
  const [contentHeight, setContentHeight] = useState<number | null>(null);
  const { t } = useTranslation();

  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }

  }, [isCollapsed]);

  useEffect(() => {

    window.addEventListener('resize', (() => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    }))
    return () => window.removeEventListener('resize', (() => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    }));
  }, []);
  const isCollapse = (i: number) => {
    setIsCollapsed(i);
  };
  const content = (i: number) => {
    switch (i) {
      case 1:
        return (

          <PaymentBox />


        );

      case 2:
        return (
          <div style={{ height: "100%", width: '100%', backgroundColor: 'white', borderRadius: 20, overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 10 }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <div className="logoCont">
                <FontAwesomeIcon style={{ fontSize: 40 }} icon={faCubes} />
                <h1 style={{ margin: 0 }}>CryptoProd</h1>
              </div>
              <img style={{ maxWidth: '100%' }} src={img1} alt="" />
            </div>
          </div>
        );

      case 3:
        return (
          <div style={{ height: "100%", width: '100%', backgroundColor: 'white', borderRadius: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 10 }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <FontAwesomeIcon
                style={{ fontSize: 250, color: 'black' }}
                icon={faQrcode} />
              <h1 style={{ margin: 0, textAlign: 'center' }}>Recipient wallet address 124c1x134311254cx24</h1>
            </div>
          </div>
        );

      case 4:
        return (

          <div style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 20, overflow: 'hidden', marginBottom: 10 }}>
            <img style={{ maxHeight: 300 }} src={img4} alt="" />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      className='accordingSection'

    >
      <div className='accordingBlockCont'>
        <h1 className='accordingHeaderTitle'>
          {t('according.headerTitle')}
        </h1>


        <div className='accordingWrap'>
          <div className='firstBlock'>
            {/* Перший блок */}
            <div style={{
              borderBottomWidth: 1,
              borderBottomStyle: 'solid',
              borderBottomColor: 'black'
            }} onMouseEnter={() => isCollapse(1)}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <h1>{t('according.sections.bills.title')}</h1>
                {isCollapsed === 1 ? (
                  <FontAwesomeIcon
                    style={{ fontSize: 25, color: 'black' }}
                    icon={faMinus}
                  />
                ) : (
                  <FontAwesomeIcon
                    style={{ fontSize: 25, color: 'black' }}
                    icon={faPlus}
                  />
                )}
              </div>
              <div ref={isCollapsed === 1 ? contentRef : null} style={{
                overflow: 'hidden',

                height: isCollapsed === 1 ? `${contentHeight}px` : '0',
                transition: 'height 0.5s ease',
              }}>
                <p style={{ margin: 0 }}>Этот способ подходит для оплаты товаров или услуг.</p>
                <p style={{ margin: 0, paddingBottom: 10 }}>
                  {t('according.sections.bills.description')}
                </p>
                <div className='contentDiv'>
                  {content(1)}
                </div>

              </div>
            </div>

            <div style={{
              borderBottomWidth: 1,
              borderBottomStyle: 'solid',
              borderBottomColor: 'black'
            }} onMouseEnter={() => isCollapse(2)}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <h1>{t('according.sections.recurringPayments.title')}</h1>
                {isCollapsed === 2 ? (
                  <FontAwesomeIcon
                    style={{ fontSize: 25, color: 'black' }}
                    icon={faMinus}
                  />
                ) : (
                  <FontAwesomeIcon
                    style={{ fontSize: 25, color: 'black' }}
                    icon={faPlus}
                  />
                )}
              </div>
              <div ref={isCollapsed === 2 ? contentRef : null} style={{
                overflow: 'hidden',
                height: isCollapsed === 2 ? `${contentHeight}px` : '0',
                transition: 'height 0.5s ease',
              }}>

                <p style={{ margin: 0, paddingBottom: 10 }}>
                  {t('according.sections.recurringPayments.description')}
                </p>
                <div className='contentDiv'>
                  {content(2)}
                </div>
              </div>
            </div>

            {/* Третій блок */}
            <div style={{
              borderBottomWidth: 1,
              borderBottomStyle: 'solid',
              borderBottomColor: 'black'
            }} onMouseEnter={() => isCollapse(3)}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <h1>{t('according.sections.host.title')}</h1>
                {isCollapsed === 3 ? (
                  <FontAwesomeIcon
                    style={{ fontSize: 25, color: 'black' }}
                    icon={faMinus}
                  />
                ) : (
                  <FontAwesomeIcon
                    style={{ fontSize: 25, color: 'black' }}
                    icon={faPlus}
                  />
                )}
              </div>
              <div ref={isCollapsed === 3 ? contentRef : null} style={{
                overflow: 'hidden',
                height: isCollapsed === 3 ? `${contentHeight}px` : '0',
                transition: 'height 0.5s ease',
              }}>

                <p style={{ margin: 0, paddingBottom: 10 }}>
                  {t('according.sections.host.description')}
                </p>
                <div className='contentDiv'>
                  {content(3)}
                </div>
              </div>
            </div>

            {/* Четвертий блок */}
            <div style={{
              borderBottomWidth: 1,
              borderBottomStyle: 'solid',
              borderBottomColor: 'black'
            }} onMouseEnter={() => isCollapse(4)}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <h1>{t('according.sections.paymentLinks.title')}</h1>
                {isCollapsed === 4 ? (
                  <FontAwesomeIcon
                    style={{ fontSize: 25, color: 'black' }}
                    icon={faMinus}
                  />
                ) : (
                  <FontAwesomeIcon
                    style={{ fontSize: 25, color: 'black' }}
                    icon={faPlus}
                  />
                )}
              </div>
              <div ref={isCollapsed === 4 ? contentRef : null} style={{
                overflow: 'hidden',
                height: isCollapsed === 4 ? `${contentHeight}px` : '0',
                transition: 'height 0.5s ease',
              }}>
                <p style={{ margin: 0, paddingBottom: 10 }}>
                  {t('according.sections.paymentLinks.description')}
                </p>
                <div className='contentDiv'>
                  {content(4)}
                </div>
              </div>
            </div>
          </div>
          <div key={isCollapsed} className="fade-in-slide">
            {content(isCollapsed)}
          </div>
        </div>
      </div>
    </section>
  );
}
