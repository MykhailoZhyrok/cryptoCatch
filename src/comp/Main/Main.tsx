import React from 'react';
import PaymentBox from './PaymentBox';
import styles from './MainLayout.module.css';

const MainLayout: React.FC = () => {
    return (
        <div style={{padding: 50}}>

      
        <div className={styles.container}>
            <div className={styles.leftSection}>
                <h2>Счета</h2>
                <h3>Выбор електронной комерции</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eveniet, adipisci hic iusto fugiat laborum tenetur alias minima delectus ut odit tempora. Ipsam laborum, tenetur voluptatum nesciunt id sint officia.</p>
                <div style={{padding: '8px 5px 8px 5px', borderTop: '1px solid'}}><h5 style={{margin: 0}}>Регулярные платежи</h5></div>
                <div style={{padding: '8px 5px 8px 5px', borderTop: '1px solid'}}><h5 style={{margin: 0}}>Хост</h5></div>
                <div style={{padding: '8px 5px 8px 5px', borderTop: '1px solid', borderBottom: '1px solid'}}><h5 style={{margin: 0}}>Платежные ссылки</h5></div>
                
            </div>
            <div className={styles.rightSection}>
                <div style={{display: 'flex' , width: '80%', justifyContent: 'space-between'}}>
                <h5 style={{color: 'white'}}>Счет в фиатной валюте</h5>
                <h5>Счет в криптовалюте</h5></div>
                <PaymentBox />
            </div>
        </div>
        </div>
    );
};

export default MainLayout;
