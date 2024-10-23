import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './StepsContainer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faBitcoin, faFacebook, faGoogle, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function StepsContainer() {
    const { t } = useTranslation();

    return (
        <section className={styles.stepsMainWrapper}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: 40 }}>
                <h2 className={styles.stepsMainTitle}>{t('steps.title')}</h2>
                <a className={styles.linkButton} href="#">
                    <button className={styles.buttonCont}>{t('steps.startButton')}</button>
                </a>
            </div>
            <div className={styles.stepsCont}>
                <div className={styles.stepBlock}>
                    <div className={styles.stepWindow}>
                        <div className={styles.stepHeader}>
                            <div className={styles.pointerCont}>
                                <span className={styles.stepsPointer}></span>
                                <span className={styles.stepsPointer}></span>
                                <span className={styles.stepsPointer}></span>
                            </div>
                        </div>
                        <div className={styles.buttonsWrapper}>
                            <a href="#">
                                <button className={styles.button}>
                                    <FontAwesomeIcon style={{ fontSize: 30, color: 'white' }} icon={faBitcoin} />
                                </button>
                            </a>
                            <a href="#">
                                <button className={styles.button}>
                                    <FontAwesomeIcon style={{ fontSize: 30, color: 'white' }} icon={faGoogle} />
                                </button>
                            </a>
                            <a href="#">
                                <button className={styles.button}>
                                    <FontAwesomeIcon style={{ fontSize: 30, color: 'white' }} icon={faTelegram} />
                                </button>
                            </a>
                            <a href="#">
                                <button className={styles.button}>
                                    <FontAwesomeIcon style={{ fontSize: 30, color: 'white' }} icon={faApple} />
                                </button>
                            </a>
                            <a href="#">
                                <button className={styles.button}>
                                    <FontAwesomeIcon style={{ fontSize: 30, color: 'white' }} icon={faEnvelope} />
                                </button>
                            </a>
                            <a href="#">
                                <button className={styles.button}>
                                    <FontAwesomeIcon style={{ fontSize: 30, color: 'white' }} icon={faFacebook} />
                                </button>
                            </a>
                        </div>
                        <h3 className={styles.titleSteps}>{t('steps.journeyTitle')}</h3>
                        <p className={styles.textSteps}>{t('steps.journeyDescription')}</p>
                    </div>
                </div>
                <div className={styles.stepBlock}>
                    <div className={styles.stepWindow}>
                        <div className={styles.stepHeader}>
                            <div className={styles.pointerCont}>
                                <span className={styles.stepsPointer}></span>
                                <span className={styles.stepsPointer}></span>
                                <span className={styles.stepsPointer}></span>
                            </div>
                            <p className={styles.titleButton}>{t('steps.createMerchantTitle')}</p>
                        </div>
                        <div>
                            <div className={styles.secondStep}>
                                <p className={styles.secondStepInputWrapper}>
                                    <label className={styles.secondStepLabel} htmlFor="firstMerchant">{t('steps.inputNameLabel')}</label>
                                    <div className={styles.secondStepInput}><h4 style={{ margin: 0, color: 'white', fontSize: 20 }}>{t('steps.firstMerchantPlaceholder')}</h4></div>
                                </p>
                                <div className={styles.secondStepButton}>
                                    <a href="#">
                                        <button className={styles.button}>{t('steps.createButton')}</button>
                                    </a>
                                </div>
                            </div>
                            <h3 className={styles.titleSteps}>{t('steps.firstMerchantTitle')}</h3>
                            <p className={styles.textSteps}>{t('steps.firstMerchantDescription')}</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.stepBlock} ${styles.stepBlockLarge}`}>
                    <div className={styles.stepWindow}>
                        <div className={styles.stepHeader}>
                            <div className={styles.pointerCont}>
                                <span className={styles.stepsPointer}></span>
                                <span className={styles.stepsPointer}></span>
                                <span className={styles.stepsPointer}></span>
                            </div>
                            <p className={styles.titleButton}>{t('steps.apiKeysTitle')}</p>
                        </div>
                        <div>
                            <div className={styles.thirdStepBlock}>
                                <div className={styles.thirdStepBlockItem}>
                                    <p className={styles.titleButton}>{t('steps.statusTitle')}</p>
                                    <div>
                                        <p className={styles.titleButton}>{t('steps.activeStatus')}</p>
                                    </div>
                                </div>
                                <div className={styles.thirdStepBlockItem}>
                                    <p className={styles.titleButton}>{t('steps.paymentApiKeyTitle')}</p>
                                    <div>
                                        <p className={styles.titleButton}>{t('steps.paymentApiKey')}</p>
                                        <div>
                                            <button className={styles.thirdButton}>{t('steps.regeneratePaymentKey')}</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.thirdStepBlockItem}>
                                    <p className={styles.titleButton}>{t('steps.payoutApiKeyTitle')}</p>
                                    <div>
                                        <p className={styles.titleButton}>{t('steps.payoutApiKey')}</p>
                                        <div>
                                            <button className={styles.thirdButton}>{t('steps.regeneratePayoutKey')}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.acceptHeaderWrapper}>
                        <div className={styles.acceptHeader}>
                            <h3 className={styles.titleSteps}>{t('steps.generateApiKeysTitle')}</h3>
                            <p className={styles.textSteps}>{t('steps.generateApiKeysDescription')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
