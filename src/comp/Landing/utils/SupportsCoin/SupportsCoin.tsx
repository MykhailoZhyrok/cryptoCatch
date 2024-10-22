import React from 'react'
import Marquee from '../Media/Marquee'
import styles from './SupportsCoin.module.css'

export default function SupportsCoin() {
  return (
    <div className={styles.mainCont}>
        <div>
            <h1 className={styles.mainText}>
            Поддерживаемые монеты и блокчейны
            </h1>
            <Marquee color='black'/>
        </div>
    </div>
  )
}
