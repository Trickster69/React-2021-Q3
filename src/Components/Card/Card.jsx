import React from 'react';
import styles from './Card.module.css';
import Activity from './Activity/Activity';
import Discription from './Discription/Discription';

export default function Card() {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card}>
        <div className={styles.card__image}>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/168/493/80/borneo-orangutan-tanjung-puting-national-park-indonesia-wallpaper-preview.jpg"
            alt=""
          />
        </div>
        <Discription />
        <Activity />
      </div>
    </div>
  );
}
