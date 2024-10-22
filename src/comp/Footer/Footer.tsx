import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Footer.module.css'
import { faCubes, faX } from '@fortawesome/free-solid-svg-icons'
import { faAppStore, faDiscord, faGooglePay, faInstagram, faLinkedin, faMeta, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function () {
    return (
        <div className={styles.footerMainCont}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerLogo}>
                    <div className={styles.footerMain}>
                        <div className={styles.logoCont}>
                            <FontAwesomeIcon style={{ fontSize: 40 }} icon={faCubes} />
                            <h1 style={{ margin: 0 }}>CryptoProd</h1>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum corrupti, saepe, laborum assumenda quod labore repellat quam. Placeat, aliquid?</p>
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
                        <h3>Компания</h3>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#" >Домой</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#" >Тарифы</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#" >Дорожная карта</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#" >Руководство бренда</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#" >Блог</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#" >Часто задаваемые вопросы</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#" >Контакты</a>

                    </div>
                    <div className={styles.footerArea1}>
                        <h3>Личный</h3>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#" >Кошелек</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#" >P2P-обмен</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#" >Стейкинг</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#" >Конвертация</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#" >Заработок</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#" >Обозреватель</a>

                    </div>
                    <div className={styles.footerArea1}>
                        <h3>Бизнес</h3>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#" >White Label</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#" >Криптопроцессинг</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#" >Плагины для электронной коммерции</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#" >API</a>


                    </div>
                    <div className={styles.footerArea1}>
                        <h3>Поддержка</h3>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#" >Telegram</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="#" >Электронная почта</a>


                    </div>
                </div>


            </div>
            <div className={styles.footerSecondCont}>
                <div className={styles.footerSecond}>
                    <div className={styles.footerSecondPath}>
                    <FontAwesomeIcon style={{ fontSize: 25}} icon={faTelegram} />
                    <FontAwesomeIcon style={{ fontSize: 25}} icon={faDiscord} />
                    <FontAwesomeIcon style={{ fontSize: 25}} icon={faMeta} />
                    <FontAwesomeIcon style={{ fontSize: 25}} icon={faYoutube} />
                    <FontAwesomeIcon style={{ fontSize: 25}} icon={faInstagram} />
                    <FontAwesomeIcon style={{ fontSize: 25}} icon={faX} />
                    <FontAwesomeIcon style={{ fontSize: 25}} icon={faLinkedin} />
                    </div>
                    <div className={styles.footerSecondPath}>
                        <p>AAA</p>
                        <p>Privacy policy</p>
                        <p>Terms of use</p>
                    </div>
                </div>
            </div>
            <div className={styles.footerThirdCont}>      
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium architecto corrupti eveniet temporibus aliquam? Blanditiis non ducimus incidunt molestiae totam. Laborum, unde delectus. Ratione, magnam possimus quam voluptatibus natus deleniti!</p>
                    <p>Ⓒ 2024 CryptoProd</p>
            </div>
        </div>
    )
}
