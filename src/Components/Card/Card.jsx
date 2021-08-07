import React from 'react';
import styles from './Card.module.css';
import Activity from './Activity/Activity';
import Discription from './Discription/Discription';

export default function Card(props) {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card}>
        <div className={styles.card__image}>
          <img src={props.card.img} alt="" />
        </div>
        <Discription
          title={props.card.title}
          name={props.card.name}
          tags={props.card.tags}
        />
        <Activity
          likeCount={props.card.likeCount}
          viewsCount={props.card.viewsCount}
        />
      </div>
    </div>
  );
}
