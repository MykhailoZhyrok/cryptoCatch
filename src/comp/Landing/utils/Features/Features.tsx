import React from 'react';
import styles from './Features.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDollar, faFile, faPercent, faShield, faSliders } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

export default function Features() {
    const { t } = useTranslation(); // Используйте хук для доступа к переводам

    return (
        <div className={styles.featuresWrapMain}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h1 className={styles.textItem1}>
                    {t('features.header')}
                </h1>
                <div className={styles.featuresHeader}>
                    <h4 className={styles.textItem2}>{t('features.textItem1')}</h4>
                    <h4 className={styles.textItem2}>{t('features.textItem2')}</h4>
                    <h4 className={styles.textItem2}>{t('features.textItem3')}</h4>
                    <h4 className={styles.textItem2}>{t('features.textItem4')}</h4>
                </div>
            </div>
            <div className={styles.containerForFeatures}>
                <div className={styles.contFeatures}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '0 5px' }}>
                            <FontAwesomeIcon style={{ fontSize: 30, color: 'white', marginRight: 20 }} icon={faShield} />
                            <h3 style={{ color: 'white', margin: 0 }}>{t('features.feature1.title')}</h3>
                        </div>
                        <p style={{ color: 'white' }}>
                            {t('features.feature1.description')}
                        </p>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', paddingBottom: 10 }}>
                            <FontAwesomeIcon style={{ fontSize: 30, color: 'white', marginRight: 20 }} icon={faCommentDollar} />
                            <h3 style={{ color: 'white', margin: 0 }}>{t('features.feature2.title')}</h3>
                        </div>
                        <p style={{ color: 'white' }}>
                            {t('features.feature2.description')}
                        </p>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', paddingBottom: 10 }}>
                            <FontAwesomeIcon style={{ fontSize: 30, color: 'white', marginRight: 20 }} icon={faSliders} />
                            <h3 style={{ color: 'white', margin: 0 }}>{t('features.feature3.title')}</h3>
                        </div>
                        <p style={{ color: 'white' }}>
                            {t('features.feature3.description')}
                        </p>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', paddingBottom: 10 }}>
                            <FontAwesomeIcon style={{ fontSize: 30, color: 'white', marginRight: 20 }} icon={faFile} />
                            <h3 style={{ color: 'white', margin: 0 }}>{t('features.feature4.title')}</h3>
                        </div>
                        <p style={{ color: 'white', margin: 0 }}>
                            {t('features.feature4.description')}
                        </p>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', paddingBottom: 10 }}>
                            <FontAwesomeIcon style={{ fontSize: 30, color: 'white', marginRight: 20 }} icon={faPercent} />
                            <h3 style={{ color: 'white', margin: 0 }}>{t('features.feature5.title')}</h3>
                        </div>
                        <p style={{ color: 'white' }}>
                            {t('features.feature5.description')}
                        </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <button style={{ backgroundColor: 'grey', border: 0, padding: '20px', width: '100%', borderRadius: 15, color: 'white' }}>
                            {t('features.allFeatures')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
