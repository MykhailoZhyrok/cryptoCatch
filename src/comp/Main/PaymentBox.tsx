import React, { useState, useEffect } from 'react';
import styles from './PaymentBox.module.css';
import CountdownCircle from '../../utils/CountdownCircleProps';


const PaymentBox: React.FC = () => {
    const [currentBalance, setCurrentBalance] = useState('10.00');
    const [currency, setCurrency] = useState('TRX');
    const totalDuration = 120;
    const [timeLeft, setTimeLeft] = useState(totalDuration);
    function formatTime(timeLeft:number) {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;
      
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
      
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
      }
    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [timeLeft]);
    return (
        < div style={{maxWidth: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className={styles.paymentBox}>
                <div className={styles.paymentHeader}>
                    <h1 style={{ margin: 0, textAlign: 'center', fontSize: 20 }}>CryptoLogo</h1>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '30%' }}>
                        <div style={{ padding: '5px', backgroundColor: 'black', borderRadius: 15 }}>
                            <p style={{ margin: 0 }}>+0.001</p>
                        </div>
                        <h5 style={{ margin: 0 }}>icon</h5>
                    </div>

                </div>
                <div style={{ display: 'flex' }}>
                    <h1>{currentBalance} {currency}</h1>
                </div>
                <div style={{ display: 'flex' }}>
                    <h4>TRON (TRC-20)</h4>
                </div>
                <div style={{ display: 'flex', backgroundColor: 'black', borderRadius: 20, alignItems: 'center', padding: '10px 20px 10px 20px' }}>

                    <CountdownCircle duration={totalDuration} timeLeft={timeLeft} />
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', marginLeft: 10 }}>
                        <p style={{ margin: 0 }}>Expiry time:</p>
                        <p style={{ margin: 0, color: 'green' }}>{formatTime(timeLeft)}</p>
                    </div>

                </div>

            </div>
            <div className={styles.paymentsOpt}>
                <div style={{borderBottom: '1px solid', marginBottom: 20}}>
                    <select className={styles.paymentsOptRadio}>
                        <option value="TRC-20">TRON (TRC-20)</option>
                    </select>
                    <button className={styles.paymentButton}>
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                            <h5 style={{ margin: 0 }}>Payment via CryptoLogo</h5>
                        </div>
                    </button>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'center', height: 10}}>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div style={{display: 'flex', margin: 0,height: 10, backgroundColor: 'black', padding: '0px 15px', alignItems: 'center', paddingTop: 5}}>
                        <h5 style={{margin: 0}}>Or</h5>
                        </div>
                        
                    </div>
                    </div>
                    
                </div>
                
                <div>
                <button className={styles.paymentButton}>
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                            <h5 style={{ margin: 0 }}>Wallet Connect</h5>
                        </div>
                    </button>
                </div>

            
            </div>
        </div>
    );
};

export default PaymentBox;
