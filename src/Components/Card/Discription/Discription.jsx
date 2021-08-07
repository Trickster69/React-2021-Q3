import React from 'react';
import styles from './Discription.module.css';

export default function Discription() {
  return (
    <div className={styles.card__discription}>
      <div className={styles.card__title}>Musyka Pasrvdr</div>
      <div className={styles.card__authorBlock}>
        <span className={styles.card_by}>by</span>
        <span className={styles.card__author}>Artishok Baklanovich</span>
      </div>
      <div className={styles.card__border} />
      <div className={styles.card__tags}>Branding, Art, Design</div>
    </div>
  );
}
