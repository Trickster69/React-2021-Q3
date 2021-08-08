import React from 'react';
import styles from './Discription.module.css';

export default function Discription({ title, name, tags }) {
  return (
    <div className={styles.card__discription}>
      <div className={styles.card__title}>{title}</div>
      <div className={styles.card__authorBlock}>
        <span className={styles.card_by}>by</span>
        <span className={styles.card__author}>{name}</span>
      </div>
      <div className={styles.card__border} />
      <div className={styles.card__tags}>{tags}</div>
    </div>
  );
}
