import React from 'react'
import styles from './Features.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDollar, faFile, faPercent, faShield, faSliders } from '@fortawesome/free-solid-svg-icons';


export default function Features() {
    return (
        <div className={styles.featuresWrapMain}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h1 className={styles.textItem1}>
                    Каковы функции криптоплатежного шлюза CrypProd?
                </h1>
                <div className={styles.featuresHeader}>
                    <h4 className={styles.textItem2}>Нет скользящих резервов/</h4>
                    <h4 className={styles.textItem2}>Глобальное покрытие</h4>
                    <h4 className={styles.textItem2}>Нулевые возвратные платежи/</h4>
                    <h4 className={styles.textItem2}>Мгновенные транзакции</h4>
                </div>
            </div>
            <div className={styles.containerForFeatures}>
                <div className={styles.contFeatures}>

                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '0 5px' }}>
                            <FontAwesomeIcon style={{ fontSize: 30, color: 'white', marginRight: 20 }} icon={faShield} />
                            <h3 style={{ color: 'white', margin: 0 }}>Защита от волатильности</h3>
                        </div>

                        <p style={{ color: 'white' }}>
                            Автоматическая конвертация входящих платежей в стейблкоины защитит от волатильности криптовалюты, так же как и функция автоматического конвертирования вывода, которая позволяет вам выводить криптовалюту в предпочитаемой валюте — и обе функции можно использовать совершенно бесплатно!                    </p>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', paddingBottom: 10 }}>
                            <FontAwesomeIcon style={{ fontSize: 30, color: 'white', marginRight: 20 }} icon={faCommentDollar} />
                            <h3 style={{ color: 'white', margin: 0 }}>Группа поддержки</h3>
                        </div>

                        <p style={{ color: 'white' }}>
                            Служба поддержки, которая доступна в Telegram, по электронной почте, прямо на нашем сайте в виде тикетов или в виде личного менеджера для наших продавцов, всегда рядом, чтобы решить проблемы и мгновенно ответить на вопросы ваших клиентов.                    </p>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', paddingBottom: 10 }}>
                            <FontAwesomeIcon style={{ fontSize: 30, color: 'white', marginRight: 20 }} icon={faSliders} />
                            <h3 style={{ color: 'white', margin: 0 }}>Управление статусом транзакций
                            </h3>
                        </div>

                        <p style={{ color: 'white' }}>
                            Отрегулируйте допустимую точность оплаты, проверьте, был ли счет переплачен или недоплачен, и отправьте дополнительный счет для сбора оставшейся суммы.                    </p>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', paddingBottom: 10 }}>
                            <FontAwesomeIcon style={{ fontSize: 30, color: 'white', marginRight: 20 }} icon={faFile} />
                            <h3 style={{ color: 'white', margin: 0 }}>Массовые выплаты</h3>
                        </div>

                        <p style={{ color: 'white', margin: 0 }}>
                            Совершайте массовые выплаты на тысячи адресов с автоматической конвертацией всего за один момент.                    </p>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', paddingBottom: 10 }}>
                            <FontAwesomeIcon style={{ fontSize: 30, color: 'white', marginRight: 20 }} icon={faPercent} />
                            <h3 style={{ color: 'white', margin: 0 }}>Гибкие комиссии для каждой монеты</h3>
                        </div>

                        <p style={{ color: 'white' }}>
                            Установите дополнительные комиссии или добавьте скидку на выбранные монеты.                    </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <button style={{ backgroundColor: 'grey', border: 0, padding: '20px', width: '100%', borderRadius: 15, color: 'white' }}>
                            ВСЕ ФУНКЦИИ
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}
