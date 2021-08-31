import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Pagination.module.css';
import * as action from '../../store/actions/search';

const Pagination = () => {
  const { articlesCount, countShowNews, page } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const [showDiv, setShowDiv] = useState(true);
  const pageCount = Math.floor(articlesCount / countShowNews) || 1;

  function handleInput(e) {
    setShowDiv(false);
    dispatch(action.setPageAC(e.target.value));
  }

  function nextPage() {
    setShowDiv(true);
    dispatch(action.nextPageAC());
  }

  function prevPage() {
    setShowDiv(true);
    dispatch(action.prevPageAC());
  }

  function setResultCount(e) {
    dispatch(action.setResultCount(e.target.value));
  }

  return (
    <div className={s.pagination}>
      <div className={s.pages}>
        <button type="button" onClick={prevPage} className={s.pagination__btn}>
          &laquo;
        </button>
        <div className={s.page_nums}>
          {showDiv.showDivPages ? (
            <button className={s.curPage} type="button" onClick={() => setShowDiv(false)}>
              {page}
            </button>
          ) : (
            <input
              type="number"
              value={page}
              placeholder={page}
              className={s.page_input}
              onChange={(e) => handleInput(e)}
              onBlur={() => setShowDiv({ ...showDiv, showDivPages: true })}
            />
          )}
          <span>
            /
            {pageCount}
          </span>
        </div>

        <button type="button" className={s.pagination__btn} onClick={nextPage}>
          &raquo;
        </button>
      </div>
      <div className={s.resultCount}>
        <span> Number of results per page:</span>
        <input
          type="number"
          placeholder={countShowNews}
          value={countShowNews}
          onChange={setResultCount}
          className={s.page_input}
        />
      </div>
    </div>
  );
};

export default Pagination;
