import React, { useState } from 'react';
import styles from './Accordion.module.css';

type AccordionProps = {
    title: string;
    content: string;
};

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.accordionItem}>
            <button onClick={() => setIsOpen(!isOpen)} className={styles.accordionHeader}>
                {title}
            </button>
            {isOpen && <div className={styles.accordionContent}>{content}</div>}
        </div>
    );
};

export default Accordion;
