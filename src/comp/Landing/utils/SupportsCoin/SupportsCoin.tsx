import React from 'react'
import Marquee from '../Media/Marquee'
import styles from './SupportsCoin.module.css'
import { useTranslation } from 'react-i18next';

export default function SupportsCoin() {
  const { t } = useTranslation();

  return (
    <div className={styles.mainCont}>
        <div>
            <h1 className={styles.mainText}>
            {t('suppotCoin.title')}
            </h1>
            <Marquee color='black'/>
        </div>
    </div>
  )
}
