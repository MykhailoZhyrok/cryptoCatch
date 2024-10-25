import React, { useState, useEffect } from 'react';
import uk from '../../static/language/uk.png';
import ru from '../../static/language/ru.webp';
import styles from './Language.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

interface LanguageProps {
    containerRef: React.RefObject<HTMLDivElement>;
    setVisibleLanguage: (visible: boolean) => void;  // Added prop
}
const Language: React.FC<LanguageProps> = ({ containerRef, setVisibleLanguage }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState<string>(i18n.language);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    // Слідкуйте за зміною мови
    useEffect(() => {
        setCurrentLanguage(i18n.language);
        console.log(currentLanguage)
    }, [i18n.language]);

    const languages = [
        { name: 'Українська', imgSrc: uk, key: 'uk' },
        { name: 'Русский', imgSrc: ru, key: 'ru' },
        // { name: 'English', imgSrc: ru }, // Додайте інші мови за потреби
    ];

    const filteredLanguages = languages.filter(language =>
        language.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    return (
        <div className={styles.langWrapper}>
            <div ref={containerRef} className={styles.langCont}>
                <div style={{ padding: 10, borderBottom: '1px solid gray' }}>
                    <div className={styles.langSearch}>
                        <FontAwesomeIcon style={{ marginRight: 10, color: '#8a8a8a' }} icon={faMagnifyingGlass} />
                        <input
                            className={styles.langInput}
                            type="text"
                            placeholder='Search'
                            onChange={(e) => setInputValue(e.target.value)}
                            value={inputValue}
                        />
                    </div>
                </div>

                <div className={styles.langList}>
                    {filteredLanguages.map((language, index) => (
                        <div
                            key={index}
                            className={styles.langCell}
                            onClick={() => {
                                changeLanguage(language.key);
                                setVisibleLanguage(false);
                            }}
                        >
                            <img className={styles.imgLan} src={language.imgSrc} alt={language.name} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                <h3 style={{ margin: 0 }}>{language.name}</h3>
                                <div>
                                    {currentLanguage === language.key ? <FontAwesomeIcon icon={faCheck} /> : ''}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Language;
