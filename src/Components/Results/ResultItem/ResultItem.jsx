import React from 'react';
import s from './ResultItem.module.css';

const ResultItem = ({
  author, content, title, date, sourceName, sourceLink, img,
}) => (
  //   console.log('sdfds');
  <div className={s.resultItem}>
    <h3 className={s.title}>{title}</h3>
    <div className={s.author}>
      <span>By:</span>
      <div>{author}</div>
    </div>

    <div className={s.source}>
      <span>Original source:</span>
      <span>
        <a href={sourceLink}>{sourceName}</a>
      </span>
    </div>

    <div className={s.content}>
      <div>{content}</div>
      <div>
        <img src={img} alt="content_image" />
      </div>
    </div>

    <div className={s.footer__date}>{date}</div>
  </div>
);
export default ResultItem;
