import React from 'react';
import s from './Card.module.css';

export default function Card({ formData, id, removeCard }) {
  function addSex() {
    if (formData.gender) {
      return <span>Male</span>;
    }
    return <span>Female</span>;
  }

  return (
    <div className={s.card}>
      <div>
        <span className={s.card__title}>Name:</span>
        <span>{formData.firstName}</span>
      </div>
      <div>
        <span className={s.card__title}>Surname:</span>
        <span>{formData.lastName}</span>
      </div>
      <div>
        <span className={s.card__title}>Post code:</span>
        <span>{formData.zipCode}</span>
      </div>
      <div>
        <span className={s.card__title}>Delivery day:</span>
        <span>{formData.deliveryDate}</span>
      </div>
      <div>
        <span className={s.card__title}>Country:</span>
        <span>{formData.country}</span>
      </div>
      <div>
        <span className={s.card__title}>Sex:</span>
        {addSex()}
      </div>
      <button type="button" onClick={() => removeCard(id)} className={s.remove}>
        &#10008;
      </button>
    </div>
  );
}
