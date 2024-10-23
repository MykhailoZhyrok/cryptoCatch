import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckToSlot, faClipboardList, faCubes, faGripLines, faRotate, faSackDollar, faStore } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faPeopleCarryBox } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import BurgerMenu from './BurgerrMenu';
import Language from './Language';
import { useTranslation } from 'react-i18next';


interface BurgerMenuProps {
    setOpenBurger: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ setOpenBurger }: BurgerMenuProps) {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [visibleSelf, setVisibleSelf] = useState(false);
    const [visibleBusiness, setVisibleBusiness] = useState(false);
    const [visibleLanguage, setVisibleLanguage] = useState(false)
    const modalRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const langModRef = useRef<HTMLDivElement>(null);
    const buttonlang = useRef<HTMLDivElement>(null);
    const toggleServices = () => {

        if (!isOpen) {
            setIsVisible(true);
            setTimeout(() => setIsOpen(true), 10);

        } else {
            setIsOpen(false);
            setTimeout(() => setIsVisible(false), 10);
        }
        console.log('isOpen:', isOpen)

        console.log('isVisible:', isVisible)
    };
    const handleMouseEnterSelf = () => {
        setVisibleSelf(true);
    }

    const handleMouseLeaveSelf = () => {
        setVisibleSelf(false);
    }
    const handleMouseEnterBusiness = () => {
        setVisibleBusiness(true);
    }

    const handleMouseLeaveBusiness = () => {
        setVisibleBusiness(false);
    }
    const activeStyle = {
        color: 'grey',
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            buttonRef.current && buttonRef.current.contains(event.target as Node)
        ) {
            return;
        }

        if (
            modalRef.current && !modalRef.current.contains(event.target as Node)
        ) {
            setIsVisible(false);
            setIsOpen(false);
        }
    };

    const handleClickOutsideLang = (event: MouseEvent) => {
        if (
            buttonlang.current && buttonlang.current.contains(event.target as Node)
        ) {
            return;
        }
        if (langModRef.current && !langModRef.current.contains(event.target as Node)) {
            console.log(langModRef)
            setVisibleLanguage(false);
        }
    }


    useEffect(() => {
        console.log(t)
        if (visibleLanguage) {
            document.addEventListener('mousedown', handleClickOutsideLang);
        } else {
            document.removeEventListener('mousedown', handleClickOutsideLang);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutsideLang);
        };
    }, [visibleLanguage]);
    useEffect(() => {
        if (isVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isVisible]);
    return (
        <>

            <header className={styles.headerCont}>

                <div className={styles.navCont}>
                    <div className={styles.logoCont}>

                        <FontAwesomeIcon icon={faCubes} />
                        <h1 className={styles.logoText} style={{ margin: 0 }}>CryptoProd</h1>
                    </div>
                    <div className={styles.headerNav}>
                        <ul className={styles.ulNav}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div ref={buttonRef} className={styles.headerService} onClick={toggleServices}>
                                    <span className={styles.serviceText}>{t('navbar.services.header')}</span>
                                    <FontAwesomeIcon
                                        style={{ fontSize: 12 }}
                                        icon={faChevronDown}
                                        className={isOpen ? styles.iconRotated : styles.icon}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    {isVisible && (
                                        <div ref={modalRef} className={`${styles.serviceCloud} ${isOpen ? styles.open : styles.close}`}>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="8" fill={"white"}><path d="M21.609 1.69C22.258.96 22.927 0 24 0s1.743.96 2.392 1.69l2.744 3.088c1.055 1.186 1.582 1.78 2.216 2.205a6 6 0 0 0 1.84.826C33.93 8 34.412 8 36 8H12c1.587 0 2.07 0 2.81-.191a6 6 0 0 0 1.839-.826c.634-.426 1.161-1.019 2.215-2.205z"></path></svg>
                                                <div className={styles.serviceSettings}>
                                                    <div className={styles.serviceColl} style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
                                                        onMouseEnter={handleMouseEnterSelf}
                                                        onMouseLeave={handleMouseLeaveSelf}>
                                                        <h5 className={styles.serviceTitle}>
                                                            {t('navbar.services.personal')}
                                                        </h5>
                                                        <FontAwesomeIcon
                                                            style={{ fontSize: 12 }}
                                                            icon={faCaretRight}

                                                        />
                                                    </div>
                                                    <div className={styles.serviceColl} style={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
                                                        onMouseEnter={handleMouseEnterBusiness}
                                                        onMouseLeave={handleMouseLeaveBusiness}>
                                                        <h5 className={styles.serviceTitle}>
                                                            {t('navbar.services.business')}
                                                        </h5>
                                                        <FontAwesomeIcon
                                                            style={{ fontSize: 12 }}
                                                            icon={faCaretRight}

                                                        />
                                                    </div>

                                                </div></div>

                                            <div className={styles.navbatContMain} >
                                                {visibleSelf ? <div className={styles.serviceExt}
                                                    onMouseEnter={handleMouseEnterSelf}
                                                    onMouseLeave={handleMouseLeaveSelf}>
                                                    <div className={styles.serviceSettings}>
                                                        <div className={styles.serviceColl} style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8, width: 250 }}>
                                                            <div style={{ width: 45, marginRight: 15 }}>
                                                                <FontAwesomeIcon
                                                                    style={{ fontSize: 20 }}
                                                                    icon={faWallet}

                                                                />
                                                            </div>

                                                            <div>
                                                                <h5 className={styles.serviceTitle}>
                                                                    {t('navbar.services.wallet.title')}
                                                                </h5>
                                                                <p style={{ margin: 0 }}>{t('navbar.services.wallet.description')}</p>
                                                            </div>


                                                        </div>
                                                        <div className={styles.serviceColl} style={{ width: 250 }}>
                                                            <div style={{ width: 45, marginRight: 15 }}>
                                                                <FontAwesomeIcon
                                                                    style={{ fontSize: 20 }}
                                                                    icon={faPeopleCarryBox}

                                                                />
                                                            </div>

                                                            <div>
                                                                <h5 className={styles.serviceTitle}>
                                                                    {t('navbar.services.p2pTrade.title')}
                                                                </h5>
                                                                <p style={{ margin: 0 }}> {t('navbar.services.p2pTrade.description')}</p>
                                                            </div>

                                                        </div>
                                                        <div className={styles.serviceColl} style={{ width: 250 }}>
                                                            <div style={{ width: 45, marginRight: 15 }}>
                                                                <FontAwesomeIcon
                                                                    style={{ fontSize: 20 }}
                                                                    icon={faLayerGroup}

                                                                />
                                                            </div>

                                                            <div>
                                                                <h5 className={styles.serviceTitle}>
                                                                    {t('navbar.services.staking.title')}
                                                                </h5>
                                                                <p style={{ margin: 0 }}> {t('navbar.services.staking.description')}</p>
                                                            </div>
                                                        </div>
                                                        <div className={styles.serviceColl} style={{ width: 250 }}>
                                                            <div style={{ width: 45, marginRight: 15 }}>
                                                                <FontAwesomeIcon
                                                                    style={{ fontSize: 20 }}
                                                                    icon={faRotate}

                                                                />
                                                            </div>

                                                            <div>
                                                                <h5 className={styles.serviceTitle}>
                                                                    {t('navbar.services.conversion.title')}
                                                                </h5>
                                                                <p style={{ margin: 0 }}>{t('navbar.services.conversion.description')}</p>
                                                            </div>
                                                        </div>
                                                        <div className={styles.serviceColl} style={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8, width: 250 }}>
                                                            <div style={{ width: 45, marginRight: 15 }}>
                                                                <FontAwesomeIcon
                                                                    style={{ fontSize: 20 }}
                                                                    icon={faSackDollar}

                                                                />
                                                            </div>

                                                            <div>
                                                                <h5 className={styles.serviceTitle}>
                                                                    {t('navbar.services.earnings.title')}
                                                                </h5>
                                                                <p style={{ margin: 0 }}>{t('navbar.services.earnings.description')}</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div> : ''}
                                                {visibleBusiness ? <div className={styles.serviceExt}
                                                    onMouseEnter={handleMouseEnterBusiness}
                                                    onMouseLeave={handleMouseLeaveBusiness}>

                                                    <div className={styles.serviceSettings}>
                                                        <div className={styles.serviceColl} style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8, width: 250 }}>
                                                            <div style={{ width: 45, marginRight: 15 }}>
                                                                <FontAwesomeIcon
                                                                    style={{ fontSize: 20 }}
                                                                    icon={faStore}

                                                                />
                                                            </div>

                                                            <div>
                                                                <h5 className={styles.serviceTitle}>
                                                                    {t('navbar.services.whiteLabel.title')}                                                                </h5>
                                                                <p style={{ margin: 0 }}>{t('navbar.services.whiteLabel.description')}</p>
                                                            </div>


                                                        </div>
                                                        <div className={styles.serviceColl} style={{ width: 250 }}>
                                                            <div style={{ width: 45, marginRight: 15 }}>
                                                                <FontAwesomeIcon
                                                                    style={{ fontSize: 20 }}
                                                                    icon={faBitcoin}

                                                                />
                                                            </div>

                                                            <div>
                                                                <h5 className={styles.serviceTitle}>
                                                                    {t('navbar.services.cryptoProcessing.title')}
                                                                </h5>
                                                                <p style={{ margin: 0 }}>{t('navbar.services.cryptoProcessing.description')}</p>
                                                            </div>

                                                        </div>
                                                        <div className={styles.serviceColl} style={{ width: 250 }}>
                                                            <div style={{ width: 45, marginRight: 15 }}>
                                                                <FontAwesomeIcon
                                                                    style={{ fontSize: 20 }}
                                                                    icon={faClipboardList}

                                                                />
                                                            </div>

                                                            <div>
                                                                <h5 className={styles.serviceTitle}>
                                                                    {t('navbar.services.merchantCatalog.title')}
                                                                </h5>
                                                                <p style={{ margin: 0 }}>{t('navbar.services.merchantCatalog.description')}</p>
                                                            </div>
                                                        </div>
                                                        <div className={styles.serviceColl} style={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8, width: 250 }}>
                                                            <div style={{ width: 45, marginRight: 15 }}>
                                                                <FontAwesomeIcon
                                                                    style={{ fontSize: 20 }}
                                                                    icon={faCheckToSlot}

                                                                />
                                                            </div>

                                                            <div>
                                                                <h5 className={styles.serviceTitle}>
                                                                    {t('navbar.services.massPayments.title')}
                                                                </h5>
                                                                <p style={{ margin: 0 }}>{t('navbar.services.massPayments.description')}</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div> : ''}

                                            </div>

                                            <div>

                                            </div>
                                        </div>

                                    )}
                                </div>


                            </div>
                            <li className={styles.buttonNavCont}>
                                <NavLink
                                    className={styles.linkNav}
                                    to="/paymants"
                                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                >
                                    {t('navbar.links.tariffs')}
                                </NavLink>
                            </li>
                            <li className={styles.buttonNavCont}>
                                <NavLink
                                    className={styles.linkNav}
                                    to="/paymants"
                                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                >
                                    {t('navbar.links.blog')}
                                </NavLink>
                            </li>
                            <li className={styles.buttonNavCont}>
                                <NavLink
                                    className={styles.linkNav}
                                    to="/paymants"
                                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                >
                                    API
                                </NavLink>
                            </li>
                        </ul>
                        <div className={styles.settingsCont}>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: 20, alignItems: 'flex-end' }}>
                                <div ref={buttonlang} className={styles.headeSettingsButton} onClick={() => setVisibleLanguage(!visibleLanguage)}>

                                    <FontAwesomeIcon style={{ fontSize: 30, color: 'black' }} icon={faGlobe} />
                                </div>
                                {visibleLanguage &&

                                    <Language containerRef={langModRef} />

                                }
                            </div>
                            <div className={styles.burgerMenu} onClick={() => {
                                setOpenBurger(true)
                            }}>

                                <FontAwesomeIcon style={{ fontSize: 30, color: 'black' }} icon={faGripLines} />

                            </div>
                        </div>
                        <div className={styles.buttonCont}>
                            <a className={styles.linkLog} href="#">
                                <button className={`${styles.logButton} ${styles.buttonPod}`}>
                                {t('navbar.long.log')}
                                </button></a>
                            <a className={styles.linkLog} href="#">
                                <button className={`${styles.regButton} ${styles.buttonPod}`}>{t('navbar.long.reg')}
                                </button></a>
                        </div>

                    </div>
                </div>

                <a href="#" className="back-to-top" id="backToTop">&#8679;</a>
            </header >
        </>
    );
}
