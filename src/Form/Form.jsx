import React, { useState, useEffect } from 'react';
import s from './Form.module.css';

export default function Form({ setFormData }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [country, setCountry] = useState('Belarus');
  const [processingData, setProcessingData] = useState(false);
  const [gender, setGender] = useState(false);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    validate();
  }, [
    processingData,
    firstName,
    lastName,
    zipCode,
    deliveryDate,
    country,
    gender,
  ]);

  const activeSendBtn = () => {
    if (Object.keys(errors).length === 0) {
      return `${s.send} ${s.send_btn}`;
    }
    return `${s.send_btn} ${s.no_send}`;
  };

  const validate = () => {
    setErrors({});
    if (!processingData) {
      setErrors((curErrors) => ({ ...curErrors, processingData }));
    }
    if (firstName === '') {
      setErrors((curErrors) => ({ ...curErrors, firstName }));
    }
    if (lastName === '') {
      setErrors((curErrors) => ({ ...curErrors, lastName }));
    }
    if (zipCode === '') {
      setErrors((curErrors) => ({ ...curErrors, zipCode }));
    }
    if (deliveryDate === '') {
      setErrors((curErrors) => ({ ...curErrors, deliveryDate }));
    }
  };

  const resetFields = () => {
    setFirstName('');
    setLastName('');
    setZipCode('');
    setDeliveryDate('');
    setCountry('Belarus');
    setProcessingData(false);
    setGender(false);
  };

  const submit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      resetFields();
      setFormData((curData) => [
        ...curData,
        {
          firstName,
          lastName,
          zipCode,
          deliveryDate,
          country,
          gender,
        },
      ]);
    }
  };
  return (
    <form className={s.form} onSubmit={submit}>
      <div>
        <label htmlFor="firstName">
          Name:
          {errors.firstName === '' && (
            <span className={s.error}>*required field</span>
          )}
          <br />
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label htmlFor="lastName">
          Surname:
          {errors.lastName === '' && (
            <span className={s.error}>*required field</span>
          )}
          <br />
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label htmlFor="zipCode">
          Post code:
          {errors.zipCode === '' && (
            <span className={s.error}>*required field</span>
          )}
          <br />
          <input
            type="number"
            name="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label htmlFor="deliveryDate">
          Choose the delivery day
          <br />
          <input
            type="date"
            name="deliveryDate"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
          />
          {errors.deliveryDate === '' && (
            <span className={s.error}>*required field</span>
          )}
        </label>
      </div>

      <div>
        <label htmlFor="country">
          Select Country:
          <br />
          <select
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option>Belarus</option>
            <option>Ukraine</option>
            <option>Russia</option>
          </select>
        </label>
      </div>

      <div className={s.switcher}>
        Choose your gender:
        <input
          name="switch"
          id="switch"
          type="checkbox"
          checked={gender}
          onChange={() => setGender((curAnswer) => !curAnswer)}
          hidden
        />
        <label htmlFor="switch" className={s.switch}>
          <input type="checkbox" name="switch" id="switch" hidden />
          <h1 className={s.female}>✝</h1>
          <h1 className={s.male}>➜</h1>
        </label>
      </div>

      <div className={s.processingData}>
        <label htmlFor="precessingData">
          Do you agree to the data processing?
          {errors.processingData === false && (
            <span className={s.error}>*required field</span>
          )}
          <br />
          <input
            className={s.processing}
            type="checkbox"
            name="precessingData"
            checked={processingData}
            onChange={() => setProcessingData((curAnswer) => !curAnswer)}
          />
        </label>
      </div>

      <div className={s.btn_wrapper}>
        <input type="submit" value="Send" className={activeSendBtn()} />
      </div>
    </form>
  );
}
