import React from 'react'
import styles from './StepsContainer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faBitcoin, faFacebook, faGoogle, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default function StepsContainer() {
    return (
        <section className={styles.stepsMainWrapper}>
          
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: 40 }}>
                    <h2 className={styles.stepsMainTitle}>Как принимать криптовалютные платежи с CryptoProd</h2>
                    <a className={styles.linkButton} href="#">
                        <button className={styles.buttonCont}>НАЧАЛО РАБОТЫ</button>
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

                            <h3 className={styles.titleSteps}>1. Начните свое путешествие</h3>
                            <p className={styles.textSteps}  >Присоединяйтесь к CryptoProd, зарегистрировавшись с некастодиальным кошельком, номером телефона или адресом электронной почты, чтобы начать принимать платежи.</p>
                            <div>

                            </div>
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
                                <p className={styles.titleButton}>Создать продавца</p>
                            </div>
                            <div>
                                <div className={styles.secondStep}>
                                    <p className={styles.secondStepInputWrapper}>
                                        <label className={styles.secondStepLabel} htmlFor="firstMerchant">Введите имя</label>
                                        <div className={styles.secondStepInput}><h4 style={{ margin: 0, color: 'white', fontSize: 20 }}>Первый торговец</h4></div>
                                    </p>
                                    <div className={styles.secondStepButton}>
                                        <a href="#">
                                            <button className={styles.button}>Cоздать</button>
                                        </a>
                                    </div>

                                </div>
                                <h3 className={styles.titleSteps}>2. Создайте своего первого продавца</h3>
                                <p className={styles.textSteps}>Настройте свой первый торговый счет в Cryptomus, чтобы начать принимать платежи и получить надежный бизнес-кошелек.</p>
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
                                <p className={styles.titleButton}>Ваши ключи API</p>
                            </div>


                            <div>
                                <div className={styles.thirdStepBlock}>
                                    <div className={styles.thirdStepBlockItem}>
                                        <p className={styles.titleButton}>Статус</p>
                                        <div>
                                            <p className={styles.titleButton}>Активный</p>
                                        </div>
                                    </div>
                                    <div className={styles.thirdStepBlockItem}>
                                        <p className={styles.titleButton}>Платежный API-ключ</p>
                                        <div>
                                            <p className={styles.titleButton}>kTaz9Eh*********OBh9aG5</p>
                                            <div >
                                                <button className={styles.thirdButton}>Повторно сгенерируйте ключ API платежей
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.thirdStepBlockItem}>
                                        <p className={styles.titleButton}>API-ключ выплаты</p>
                                        <div >
                                            <p className={styles.titleButton}>kTaz9Eh*********OBh9355</p>
                                            <div >
                                                <button className={styles.thirdButton}>Повторно сгенерируйте ключ Payout API</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className={styles.acceptHeaderWrapper}>
                            <div className={styles.acceptHeader}>
                                <h3 className={styles.titleSteps}>3. Сгенерировать API-ключи</h3>
                                <p className={styles.textSteps}>Настройте свой первый торговый счет в Cryptomus, чтобы начать принимать платежи и получить надежный бизнес-кошелек.</p>

                            </div>

                        </div>
                    </div>

                </div>
        
        </section>

    )
}
