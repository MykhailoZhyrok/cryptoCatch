import React from 'react';
import styles from './Blog.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img1 from '../../../../static/carousel/cryptoBlog.webp';
import { faCalendar, faComment } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const blog = [1, 2, 3];

export default function Blog() {
    const { t} = useTranslation(); // Use the translation hook

    return (
        <div className={styles.blogBack}>
            <h1>{t('blog.title')}</h1>
            <div className={styles.blogWrapper}>
                {blog.map((index) => (
                    <div key={index} className={styles.blogCont}>
                        <div style={{ display: 'block' }}>
                            <div className={styles.blogImgCont}>
                                <img style={{
                                    borderRadius: 15,
                                    width: '100%',
                                    objectFit: 'cover'
                                }} src={img1} alt="" />
                                <div className={styles.logo}>
                                    <h1 style={{ margin: 0, fontSize: 24 }}>CryptoProd</h1>
                                </div>
                            </div>
                        </div>
                        <div className={styles.blogContentWrapper}>
                            <div className={styles.blogTitleCont}>
                                <h1 style={{ margin: 0, fontSize: 24 }}>{t('blog.post.title')}</h1>
                            </div>
                            <div className={styles.blogDateCont}>
                                <div className={styles.blogDate}>
                                    <FontAwesomeIcon style={{ fontSize: 20 }} icon={faCalendar} />
                                    <p className={styles.blogTextComment}>
                                        {t('blog.post.date')}
                                    </p>
                                </div>
                                <div className={styles.blogComment}>
                                    <FontAwesomeIcon style={{ fontSize: 20 }} icon={faComment} />
                                    <p className={styles.blogTextComment}>{t('blog.post.comments')}</p>
                                </div>
                            </div>
                            <div className={styles.blogContent}>
                                <p className={styles.blogText}>
                                    {t('blog.post.description')}
                                </p>
                            </div>
                            <div className={styles.blogTags}>
                                <div className={styles.blogTagCont}>
                                    <p className={styles.blogTextComment}>
                                        {t('blog.post.tags.cryptocurrencies')}
                                    </p>
                                </div>
                                <div className={styles.blogTagCont}>
                                    <p className={styles.blogTextComment}>
                                        {t('blog.post.tags.tutorial')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
