import React from 'react';
import styles from './Discription.module.css';

export default function Discription(p) {
  const { props } = p;
  return (
    <div className={styles.card__discription}>
      <div className={styles.card__title}>{props.title}</div>
      <div className={styles.card__authorBlock}>
        <span className={styles.card_by}>by</span>
        <span className={styles.card__author}>{props.name}</span>
      </div>
      <div className={styles.card__border} />
      <div className={styles.card__tags}>{props.tags}</div>
    </div>
  );
}
