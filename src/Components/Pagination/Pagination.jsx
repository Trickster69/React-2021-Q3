import React, { useState } from 'react';
import s from './Pagination.module.css';

const Pagination = ({
  page, setPage, resultCount, setResultCount, articlesCount,
}) => {
  const [showDiv, setShowDiv] = useState({ showDivPages: true, showDivCount: true });

  const pageCount = Math.floor(articlesCount / resultCount) || 1;

  function handleInput(e) {
    setPage(e.target.value);
    setShowDiv({ ...showDiv, showDivPages: true });
  }

  function nextPage() {
    showDiv.showDivPages = true;
    if (page >= pageCount) {
      setPage(+page);
    } else {
      setPage(+page + 1);
    }
  }

  function prevPage() {
    showDiv.showDivPages = true;
    if (page <= 1) {
      setPage(1);
    } else {
      setPage(+page - 1);
    }
  }

  return (
    <div className={s.pagination}>
      <div className={s.pages}>
        <button
          type="button"
          onClick={prevPage}
          className={s.pagination__btn}
        >
          &laquo;
        </button>
        <div className={s.page_nums}>
          {showDiv.showDivPages ? (
            <button className={s.curPage} type="button" onClick={() => setShowDiv({ ...showDiv, showDivPages: false })}>{page}</button>
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

        <button
          type="button"
          className={s.pagination__btn}
          onClick={nextPage}
        >
          &raquo;
        </button>
      </div>
      <div className={s.resultCount}>
        <span> Number of results per page:</span>
        <input
          type="number"
          placeholder={resultCount}
          value={resultCount}
          onChange={(e) => setResultCount(e.target.value)}
          className={s.page_input}
        />
      </div>
    </div>
  );
};

export default Pagination;
