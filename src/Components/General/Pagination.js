import React from 'react';
import uuid from 'react-uuid';

function Pagination({ currentPage, setCurrentPage, totalPages }) {
  const pages = new Array(totalPages).fill(null);
  return (
    <ul className="pagination center-align">
      <li className="pagination-li">
        <button type="button" onClick={() => setCurrentPage(currentPage - 1)}>
          <i className="material-icons">chevron_left</i>
        </button>
      </li>
      {pages.map((page, i) => (
        <li className="pagination-li" key={uuid()}>
          <button
            type="button"
            onClick={() => setCurrentPage(i)}
            className={currentPage === i ? 'active' : null}
          >
            {i + 1}
          </button>
        </li>
      ))}
      <li className="pagination-li">
        <button type="button" onClick={() => setCurrentPage(currentPage + 1)}>
          <i className="material-icons">chevron_right</i>
        </button>
      </li>
    </ul>
  );
}

export default Pagination;
