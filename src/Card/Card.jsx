import React from 'react';
import s from './Card.module.css';

export default function Card({ formData }) {
  return (
    <div className={s.card}>
      <div>
        <span>Name:</span>
        <span>{formData.firstName}</span>
      </div>
      <div>
        <span>Surname:</span>
        <span>{formData.lastName}</span>
      </div>
      <div>
        <span>Post code:</span>
        <span>{formData.zipCode}</span>
      </div>
      <div>
        <span>Delivery day:</span>
        <span>{formData.deliveryDate}</span>
      </div>
      <div>
        <span>Country:</span>
        <span>{formData.country}</span>
      </div>
      <div>
        <span>Sex:</span>
        <span>{formData.gender}</span>
      </div>
    </div>
  );
}
