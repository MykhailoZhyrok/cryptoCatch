import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Login.module.css'
import { faBars, faCubes, faSliders } from '@fortawesome/free-solid-svg-icons';

export default function LoginHeader() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.toolsCont}>
            <div className={styles.iconWrapper}>
                    <FontAwesomeIcon className={styles.icon} icon={faBars} />
                </div>
                <div className={styles.separator}></div>

                <div className={styles.logoCont}>
                    <FontAwesomeIcon className={styles.logoIcon} icon={faCubes} />
                    <h1 className={styles.logoText} style={{ margin: 0 }}>CryptoProd</h1>
                </div>
                
            </div>

            <div className={styles.toolsCont}>
                <button className={styles.buttonStart}>Почати</button>
                <div className={styles.separator}></div>
                <div className={styles.iconWrapper}>
                    <FontAwesomeIcon className={styles.icon} icon={faSliders} />
                </div>
            </div>

        </div>
    )
}
