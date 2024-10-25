import React from 'react'
import styles from "./Login.module.css";
import LoginHeader from './module/LoginHeader/LoginHeader';
import img from '../../static/according/login/forLogin.jpg'

export default function LoginComp() {
    return (
        <div className={styles.mainWrapper}>
            <LoginHeader />
            <div className={styles.mainContent}>

                <img className={styles.imgLogin} src={img} alt="" />

                <div className={styles.loginContentWrapper}>
                    <div className={styles.loginContent}>
                        <h1>Увійти</h1>
                        <div className={styles.inputCont}>
                        <input className={styles.input} placeholder='Введіть електронну пошту або по номеру телефону'/>
                        <input className={styles.input} placeholder='Введіть пароль'/>
                        </div>
                        <a href="#">Забули пароль?</a>

                        <div className={styles.buttonCont}>
                        <button className={styles.buttonLogin}>Увійти</button>
                        </div>
                        
                        <p>Немає акаунту?</p>
                        <a href="#">Зареєструватися</a>



                    </div>
                </div>
            </div>

        </div>
    )
}
