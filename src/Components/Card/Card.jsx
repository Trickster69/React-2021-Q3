import React from 'react';
import styles from './Card.module.css';
import Activity from './Activity/Activity';
import Discription from './Discription/Discription';

export default function Card({ card }) {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card}>
        <div className={styles.card__image}>
          <img src={card.img} alt="" />
        </div>
        <Discription title={card.title} name={card.name} tags={card.tags} />
        <Activity likeCount={card.likeCount} viewsCount={card.viewsCount} />
      </div>
    </div>
  );
}
