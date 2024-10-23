import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Footer.module.css';
import { faCubes, faX } from '@fortawesome/free-solid-svg-icons';
import { faAppStore, faDiscord, faGooglePay, faInstagram, faLinkedin, faMeta, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation(); // Use the translation hook

    return (
        <div className={styles.footerMainCont}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerLogo}>
                    <div className={styles.footerMain}>
                        <div className={styles.logoCont}>
                            <FontAwesomeIcon style={{ fontSize: 40 }} icon={faCubes} />
                            <h1 style={{ margin: 0 }}>CryptoProd</h1>
                        </div>
                        <p>{t('footer.footerDescription')}</p>
                        <a className={styles.appStore}>
                            <FontAwesomeIcon style={{ fontSize: 40 }} icon={faAppStore} />
                        </a>
                        <a className={styles.appStore}>
                            <FontAwesomeIcon style={{ fontSize: 40 }} icon={faGooglePay} />
                        </a>
                    </div>
                </div>
                <div className={styles.footerLinks}>
                    <div className={styles.footerArea1}>
                        <h3>{t('footer.company')}</h3>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#">{t('footer.home')}</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#">{t('footer.tariffs')}</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#">{t('footer.roadmap')}</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#">{t('footer.brandGuide')}</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#">{t('footer.blog')}</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#">{t('footer.faq')}</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#">{t('footer.contacts')}</a>
                    </div>
                    <div className={styles.footerArea1}>
                        <h3>{t('footer.personal')}</h3>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#">{t('footer.wallet')}</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#">{t('footer.p2pExchange')}</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#">{t('footer.staking')}</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#">{t('footer.conversion')}</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#">{t('footer.earnings')}</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#">{t('footer.explorer')}</a>
                    </div>
                    <div className={styles.footerArea1}>
                        <h3>{t('footer.business')}</h3>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#">{t('footer.whiteLabel')}</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#">{t('footer.cryptoProcessing')}</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#">{t('footer.eCommercePlugins')}</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#">{t('footer.api')}</a>
                    </div>
                    <div className={styles.footerArea1}>
                        <h3>{t('footer.support')}</h3>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#">{t('footer.telegram')}</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#">{t('footer.email')}</a>
                    </div>
                </div>
            </div>
            <div className={styles.footerSecondCont}>
                <div className={styles.footerSecond}>
                    <div className={styles.footerSecondPath}>
                        <FontAwesomeIcon style={{ fontSize: 25 }} icon={faTelegram} />
                        <FontAwesomeIcon style={{ fontSize: 25 }} icon={faDiscord} />
                        <FontAwesomeIcon style={{ fontSize: 25 }} icon={faMeta} />
                        <FontAwesomeIcon style={{ fontSize: 25 }} icon={faYoutube} />
                        <FontAwesomeIcon style={{ fontSize: 25 }} icon={faInstagram} />
                        <FontAwesomeIcon style={{ fontSize: 25 }} icon={faX} />
                        <FontAwesomeIcon style={{ fontSize: 25 }} icon={faLinkedin} />
                    </div>
                    <div className={styles.footerSecondPath}>
                        <p>{t('footer.privacyPolicy')}</p>
                        <p>{t('footer.termsOfUse')}</p>
                    </div>
                </div>
            </div>
            <div className={styles.footerThirdCont}>
                <p>{t('footer.footerDescription')}</p>
                <p>Ⓒ 2024 CryptoProd</p>
            </div>
        </div>
    );
}
