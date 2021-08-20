import React from 'react';
import { Link } from 'react-router-dom';
import s from './NotFound.module.css';

const NotFound = () => (
  <div className={s.oops}>
    <div className={s.oops__inner}>
      <div className={s.oops__content}>
        <div className={s.oops__textBlock}>
          <div className={`${s.oops__title} ${s.title}`}>Oops... you seem to be lost</div>
          <div className={s.oops__text}>
            Just don&apos;t be discouraged, but there is no such page :(
            <br />
            We can offer you to watch a video with cute pandas or return to the main page
          </div>
          <Link to="/" className={`${s.oops__button} ${s.btnReset}`}>
            Back to main page
          </Link>
          <div className={s.oops__404}>404</div>
        </div>
      </div>
    </div>
  </div>
);
export default NotFound;
