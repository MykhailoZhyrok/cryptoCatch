import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCaretRight, faWallet, faPeopleCarryBox, faLayerGroup, faRotate, faSackDollar, faStore, faClipboardList, faCheckToSlot, faCubes, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import styles from './BurgerMenu.module.css';
interface BurgerMenuProps {
    setOpenBurger: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BurgerMenu({ setOpenBurger }: BurgerMenuProps) {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [visibleSelf, setVisibleSelf] = useState(false);
    const [visibleBusiness, setVisibleBusiness] = useState(false);
    const [isOpenBusiness, setIsOpenBusiness] = useState(false);
    const [isOpenSelf, setIsOpenSelf] = useState(false);
    const [maxHeight, setMaxHeight] = useState<number>(200)
    const modalRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    const activeStyle = {
        color: 'grey',
    };
    const toggleServices = () => {
        if (!isOpen) {
            setIsVisible(true);
            setTimeout(() => setIsOpen(true), 10);
        } else {
            setIsOpen(false);
            setTimeout(() => setIsVisible(false), 10);
        }
    };

    const toggleSelf = () => {
        if (visibleSelf) {
            setMaxHeight(maxHeight - 500)

        } else {
            setMaxHeight(maxHeight + 500)

        }
        setVisibleSelf((prev) => !prev);


    };

    const toggleBusiness = () => {
        if (visibleBusiness) {
            setMaxHeight(maxHeight - 500)

        } else {
            setMaxHeight(maxHeight + 500)

        }
        setVisibleBusiness((prev) => !prev);

    };


    return (
        <div className={styles.burgerMenu}>
            <div className={styles.burgerHeader}>
                <div className={styles.logoCont}>
                    <FontAwesomeIcon style={{ fontSize: 40 }} icon={faCubes} />
                    <h1 style={{ margin: 0 }}>CryptoProd</h1>
                </div>
                <div onClick={() => setOpenBurger(false)}>
                    <FontAwesomeIcon style={{
                        fontSize: 20, width: 50,
                        height: 50
                    }} icon={faXmark} />

                </div>
            </div>

            <div ref={buttonRef} className={styles.headerService} onClick={toggleServices}>
                <span className={styles.serviceText}>{t('navbar.services.header')}</span>
                <FontAwesomeIcon style={{ fontSize: 22 }} icon={faChevronDown} className={isOpen ? styles.iconRotated : styles.icon} />
            </div>

            <div style={isOpen?{ maxHeight: `${maxHeight}px`, overflow: 'hidden', transition: 'max-height 0.5s ease' }:{ maxHeight: 0, overflow: 'hidden', transition: 'max-height 0.3s ease'}}>
                <div className={styles.serviceSettings}>
                    <div className={styles.serviceColl} onClick={toggleSelf}>
                        <div className={styles.serviceSettingsHeader}>
                            <h5 className={styles.serviceTitle}>{t('navbar.services.personal')}</h5>
                            <FontAwesomeIcon style={{ fontSize: 22 }} icon={faChevronDown} className={visibleSelf ? styles.iconRotated : styles.icon} />
                        </div>
                        <div className={styles.navbatContMain}>
                          
                                <div className={visibleSelf ? styles.visibleSelfOpen : styles.visibleSelfClose}>
                                    <div className={styles.serviceCollInn}>
                                        <div className={styles.iconCont} >
                                            <FontAwesomeIcon style={{ fontSize: 30, textAlign: 'center' }} icon={faWallet} />
                                        </div>

                                        <div>
                                            <h5>{t('navbar.services.wallet.title')}</h5>
                                            <p style={{ margin: 0 }}>{t('navbar.services.wallet.description')}</p>
                                        </div>
                                    </div>
                                    <div className={styles.serviceCollInn}>
                                        <div className={styles.iconCont} >
                                            <FontAwesomeIcon style={{ fontSize: 30, textAlign: 'center' }} icon={faPeopleCarryBox} />
                                        </div>

                                        <div>
                                            <h5>{t('navbar.services.p2pTrade.title')}</h5>
                                            <p style={{ margin: 0 }}>{t('navbar.services.p2pTrade.description')}</p>
                                        </div>
                                    </div>
                                    <div className={styles.serviceCollInn}>
                                        <div className={styles.iconCont} >
                                            <FontAwesomeIcon style={{ fontSize: 30, textAlign: 'center' }} icon={faLayerGroup} />
                                        </div>

                                        <div>
                                            <h5>{t('navbar.services.staking.title')}</h5>
                                            <p style={{ margin: 0 }}>{t('navbar.services.staking.description')}</p>
                                        </div>
                                    </div>
                                    <div className={styles.serviceCollInn}>
                                        <div className={styles.iconCont} >
                                            <FontAwesomeIcon style={{ fontSize: 30, textAlign: 'center' }} icon={faRotate} />
                                        </div>

                                        <div>
                                            <h5>{t('navbar.services.conversion.title')}</h5>
                                            <p style={{ margin: 0 }}>{t('navbar.services.conversion.description')}</p>
                                        </div>
                                    </div>
                                    <div className={styles.serviceCollInn}>
                                        <div className={styles.iconCont} >
                                            <FontAwesomeIcon style={{ fontSize: 30, textAlign: 'center' }} icon={faSackDollar} />
                                        </div>

                                        <div>
                                            <h5>{t('navbar.services.earnings.title')}</h5>
                                            <p style={{ margin: 0 }}>{t('navbar.services.earnings.description')}</p>
                                        </div>
                                    </div>
                                </div>

                        </div>

                    </div>
                    <div className={styles.serviceColl} onClick={toggleBusiness}>
                        <div className={styles.serviceSettingsHeader}>
                            <h5 className={styles.serviceTitle}>{t('navbar.services.business')}</h5>

                            <FontAwesomeIcon style={{ fontSize: 22 }} icon={faChevronDown} className={visibleBusiness ? styles.iconRotated : styles.icon} />

                        </div>

                        <div className={styles.navbatContMain}>


                            <div className={visibleBusiness ? styles.visibleBusinessOpen : styles.visibleBusinessClose}>
                                <div className={styles.serviceCollInn}>
                                    <div className={styles.iconCont} >

                                        <FontAwesomeIcon style={{ fontSize: 30, textAlign: 'center' }} icon={faStore} />
                                    </div>
                                    <div>
                                        <h5>{t('navbar.services.whiteLabel.title')} </h5>
                                        <p style={{ margin: 0 }}>{t('navbar.services.whiteLabel.description')}</p>
                                    </div>
                                </div>
                                <div className={styles.serviceCollInn}>
                                    <div className={styles.iconCont} >
                                        <FontAwesomeIcon icon={faBitcoin} style={{ fontSize: 30, width: 40 }} />
                                    </div>
                                    <div>
                                        <h5>{t('navbar.services.cryptoProcessing.title')}</h5>
                                        <p style={{ margin: 0 }}>{t('navbar.services.cryptoProcessing.description')}</p>
                                    </div>
                                </div>
                                <div className={styles.serviceCollInn}>
                                    <div className={styles.iconCont} >

                                        <FontAwesomeIcon style={{ fontSize: 30, textAlign: 'center' }} icon={faClipboardList} />
                                    </div>
                                    <div>
                                        <h5>{t('navbar.services.merchantCatalog.title')}</h5>
                                        <p style={{ margin: 0 }}>{t('navbar.services.merchantCatalog.description')}</p>
                                    </div>
                                </div>
                                <div className={styles.serviceCollInn}>
                                    <div className={styles.iconCont} >

                                        <FontAwesomeIcon style={{ fontSize: 30 }} icon={faCheckToSlot} />
                                    </div>

                                    <div>
                                        <h5>{t('navbar.services.massPayments.title')}</h5>
                                        <p style={{ margin: 0 }}>{t('navbar.services.massPayments.description')}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
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
            <div className={styles.buttonCont}>
                <a className={styles.linkLogin} href="#">
                    <button className={`${styles.logButton} ${styles.buttonPod}`}>
                    {t('navbar.long.log')}
                    </button>
                </a>
                <a className={styles.linkReg} href="#">
                    <button className={`${styles.regButton} ${styles.buttonPod}`}>{t('navbar.long.reg')}
                    </button>
                </a>
            </div>
        </div >
    );
}
