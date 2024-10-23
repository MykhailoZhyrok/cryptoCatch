import React, { useState } from 'react';
import uk from '../../static/language/uk.png';
import ru from '../../static/language/ru.webp';
import styles from './Language.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

interface LanguageProps {
    containerRef: React.RefObject<HTMLDivElement>; // Виправлена назва
}

const Language: React.FC<LanguageProps> = ({ containerRef }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const { i18n } = useTranslation();
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
      };
    const languages = [
        { name: 'Українська', imgSrc: uk, key:'uk' },
        { name: 'Українська', imgSrc: uk, key:'uk' },
        { name: 'Українська', imgSrc: uk, key:'uk' },
        { name: 'Українська', imgSrc: uk, key:'uk' },
        { name: 'Українська', imgSrc: uk, key:'uk' },
        { name: 'Я лох', imgSrc: ru, key: 'ru' },
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
                        <div key={index} className={styles.langCell} onClick={() => changeLanguage(language.key)}>
                            <img className={styles.imgLan} src={language.imgSrc} alt={language.name} />
                            <h3 style={{ margin: 0 }}>{language.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Language;
